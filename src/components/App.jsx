import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { fetch } from 'whatwg-fetch'

import TableRow from './TableRow.jsx'

const PATH_ROOT = 'http://localhost:3000'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      folderItems: []
    }
  }
  
  handleGetSuccess = response => {
    this.setState({ folderItems: response.entries })
  }
  
  getFolder = path => {
    const pathEncoded = encodeURI(path)
    fetch(`${PATH_ROOT}/folder?path=${pathEncoded}`)
      .then(response => {
        return response.json()
      }).then(response => {
        this.handleGetSuccess(response)
      })
  }
  
  render() {
    return (
      <div className="app">
        <button onClick={() => this.getFolder('financial planning')}>
          CLICK ME to get folder
        </button>
        
        {
          this.state.folderItems.length > 0 &&
          this.state.folderItems.map((item, index) => {
            return <TableRow {...item} key={index} />
          })
        }
        
        {/*
          [".tag","name","path_lower","path_display","id","client_modified","server_modified","rev","size","content_hash"]
        */}
      </div>
    )
  }
}

export default hot(module)(App)
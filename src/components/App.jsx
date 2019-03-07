import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { getFolder } from '../services/api.js'

class App extends Component {
  render() {
    const dropdownOptions = [
      { value: "background", cssValueDefault: "red" }
    ]

    return (
      <div className="app">
        <h1>Box Editor</h1>

        <button onClick={() => getFolder('financial planning')}>
          CLICK ME to get folder
        </button>
      </div>
    )
  }
}

export default hot(module)(App)
import React, { Component } from "react"
import { hot } from "react-hot-loader"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: "200px",
        width: "200px",
        background: "red"
      },
      maxValues: {
        height: 500,
        width: 500
      },
      dropdownValue: "background"
    }

    this.updateStyle = this.updateStyle.bind(this)
    this.formatToPx = this.formatToPx.bind(this)
    this.handleSlider = this.handleSlider.bind(this)
    this.handleMaxChange = this.handleMaxChange.bind(this)
  }

  updateStyle(tuple) {
    this.setState({
      style: {
        ...this.state.style,
        ...tuple
      }
    })
  }

  formatToPx(number) {
    return number + "px"
  }

  handleSlider(event) {
    const number = event.target.value
    const cssValue = this.formatToPx(number)
    const cssProperty = event.target.name
    this.updateStyle({ [cssProperty]: cssValue })
  }

  handleMaxChange(event) {
    const cssProperty = event.target.name
    const cssValue = event.target.value

    this.setState({
      maxValues: {
        ...this.state.maxValues,
        [cssProperty]: cssValue
      }
    })
  }

  render() {
    const dropdownOptions = [
      { value: "background", cssValueDefault: "red" }
    ]

    return (
      <div className="app">
        <h1>Box Editor</h1>
        <div>{JSON.stringify(this.state)}</div>

        <div style={this.state.style}>

        </div>

        <div>
          {
            Object.keys(this.state.style).map((keyName, index) => {
              return <div key={index}>
                {keyName}
                <br />
                <input type="range"
                  max={this.state.maxValues[keyName]}
                  name={keyName}
                  value={parseInt(this.state.style[keyName])}
                  onChange={this.handleSlider} >
                </input>
                <input name={keyName} value={this.state.maxValues[keyName]} onChange={this.handleMaxChange} />
              </div>
            })
          }
        </div>

        <button onClick={() => this.updateStyle({ color: "red" })}>
          Add More
        </button>
      </div>
    )
  }
}

export default hot(module)(App)
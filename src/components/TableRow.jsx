import React, { Component } from "react"
import { hot } from "react-hot-loader"
import styled from 'styled-components'

const RowStyles = styled.div`
  display: flex;
  flex-direction: row;
`

const getFlexGrow = stylesProps => {
  if (stylesProps.id) {
    return 1
  } else if (stylesProps.name) {
    return 3
  } else {
    return 'auto'
  }
}

const CellStyles = styled.div`
  flex-basis: 0;
  flex-grow: ${props => getFlexGrow(props)}
`

class TableRow extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { id, name } = this.props
    
    return (
      <RowStyles>
        <CellStyles id>{id}</CellStyles>
        <CellStyles name>{name}</CellStyles>
      </RowStyles>
    )
  }
}

export default hot(module)(TableRow)
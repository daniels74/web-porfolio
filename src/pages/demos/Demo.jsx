import React from 'react'
import "./Demo.css"
import Blocks from "./Blocks"

const Demo = (props) => {

  const theblock = props.data.map(item => {
    return (
      <Blocks
        item={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="main">
      <div className="demomain">
        {theblock}
      </div>
    </div>

  )
}

export default Demo
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
      <div className="demomain">
        {theblock}
      </div>
      
  
  )
}

export default Demo
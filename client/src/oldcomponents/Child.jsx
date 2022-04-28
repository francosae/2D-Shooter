import React, {useState} from 'react'

export default function Child({ value }) {
  
  return (
    <div>
      <input type="text" placeholder="TESTINGBRO" onChange={e => value(e.target.value)}></input>   
    </div>
  )
}

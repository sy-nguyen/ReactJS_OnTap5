import React, { useState } from 'react'
import { Input } from 'reactstrap'

export default function Add(props) {
    const {handle_add} = props
    const [text, setText] = useState("")
  return (
    <div>
        <Input value={text} placeholder='name' onChange={(e) => setText(e.target.value)} onKeyDown={(e) =>{
            if(e.key==="Enter"){
                handle_add(text)
                setText("")
            }
        }}/>
    </div>
  )
}

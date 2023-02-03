import React, { useDebugValue } from 'react'
import { useState } from 'react';

const ChatInput = ({sendMessage,}) => {

  // set value is null for at initial
  const [value, setValue] = useState("");
  

  // event function call 
  const handleSubmit = ()=>{
    // if there is no value 
    if(value === "") return;
    
    // if there is value
    // make an function and set value
    sendMessage({sender: "user", message: value})
    // after set value == NULL
    setValue("");
  }
  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative' >

      <textarea 
      onKeyDown={(e) => {
        e.keyCode === 13 && e.shiftKey === false && handleSubmit();
      }}
      rows = {1}
      className='border-0 bg-transparent outline-none w-11/12  overflow-hidden resize-none px-3'
      // set value of input to value
        value={value}
        type = "text"
        // if any event happens set value
        onChange={(e) => setValue(e.target.value)}
      />

      <img 
      // if happens when that function press
      onClick={handleSubmit}
      src="./send.png" alt="" className='absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125' />
    </div>
  )
}

export default ChatInput
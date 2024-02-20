"use client"
import { send } from '@/socketApi'
import React, { useState } from 'react'

function Pallette({activeColor}:{activeColor:any}) {
    const [color,setColor] = useState(activeColor)
  return (
    <div className='flex flex-col gap-4'>
        <h1 className="text-3xl font-extrabold">{activeColor}</h1>

        <input className='w-full' type="color" value={activeColor}  onChange={(event:any)=> setColor(event.target.value)}/>
        <button className="border rounded-lg p-2" onClick={()=>send(color)}>Click</button>
    </div>
  )
}

export default Pallette
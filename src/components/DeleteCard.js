import React from 'react'
import { useString } from '../context/StringContext'
import {AiFillDelete} from 'react-icons/ai'

function DeleteCard({value,id}) {
    const {updateCharList, colorSet} = useString();
  return (
    <div className='aspect-square flex flex-col gap-4 rounded-lg hover:shadow-lg transition-all p-8 text-center opacity-0 animate-up' style={{animationDelay: `${50 * id}ms` , background: colorSet[(value.charCodeAt(0) - ( value == value.toUpperCase() ? 65 : 97)) + (value == value.toUpperCase() ? 0 : 26)]}}>
        <button className='p-2 text-xl text-white bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all rounded-full' onClick={()=>updateCharList(id)} > <AiFillDelete /></button>
        <p className='text-white text-3xl font-bold'>{value}</p>
    </div>
  )
}

export default DeleteCard
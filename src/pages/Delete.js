import React, { useEffect, useState } from 'react'
import DeleteCard from '../components/DeleteCard'
import { useString } from '../context/StringContext'
import {IoMdArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { BiCopy} from 'react-icons/bi'
import Party from '../components/Party'
import Celeb from '../assets/celeb.mp3'


function Delete() {
  const { string, charList, colorSet } = useString()
  const navigate = useNavigate()

  const audio = new Audio(Celeb);

  console.log(colorSet);

  useEffect(() => {
    const chargrid = document.getElementById('chargrid');
    chargrid.style.setProperty('--repeat', charList.length)
  }, [charList])

  const [copied, setCopied] = useState(false);
  const [success, setSuccess] = useState(false);
  const [party, setParty] = useState(false);

  useEffect(() => {
    if([...new Set(charList)].length === charList.join("").length) {
      setSuccess(true);
    }
    else {
      setSuccess(false);
    }
  }, [charList])

  useEffect(() => {
    if(success) {
      setParty(true);
      audio.play();
      setTimeout(() => {
        setParty(false);
        audio.pause();
      }, 5000);
    }
  }, [success])


  const copyToClipboard = () => {
    navigator.clipboard.writeText(charList.join(""));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen relative p-8 py-20 pb-24 font-poppins'>
    <button title='Go Back' onClick={() => navigate(-1)} className='fixed top-0 left-0 m-4 md:m-8 rounded-full shadow-md md:outline outline-1 p-2 z-10 bg-white transition-all'><IoMdArrowBack/></button>
    <div className='fixed bottom-0 left-0 p-4 flex flex-col md:flex-row gap-2 md:gap-8 border-t bg-white w-full justify-center items-center z-10'>
      <p className='animate-up'>Current: {string}</p>
      {copied ? <span className='animate-up'>Text Copied!</span> :  <span className='animate-up'>New: {charList.join("")} <button onClick={copyToClipboard}><BiCopy/></button></span>}
    </div>
    <h1 className='text-2xl md:text-3xl font-bold mb-8 text-center'>{success ? "Success" : "Let's Remove Duplicate Characters"}</h1>
    <div id='chargrid' className='items-center justify-center'>
      {charList.map((char, index) => <DeleteCard key={index} id={index} value={char}/>)}
    </div>
    {party && <Party />}
    </div>
  )
}

export default Delete
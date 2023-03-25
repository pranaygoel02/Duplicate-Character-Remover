import React, { useEffect, useState } from 'react'
import { useString } from '../context/StringContext'
import { useNavigate } from 'react-router-dom';
import Bg from '../assets/bg1.jpg'

function Home() {
    const {string,setString} = useString();
    const [error, setError] = useState(null);

    const  navigate = useNavigate();

    useEffect(() => {
        setError(null);
        setString('');
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(string);
        if(string.trim().length === 0) {
            setError('Please enter a non empty string.')
            return
        }
        navigate(`/${string}`);
    }

  return (
    <section style={{backgroundImage: `url(${Bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
    <div className='flex justify-center items-center flex-col gap-16 min-h-screen animate-up transition-all px-4'>
        {/* <img src={Bg}/> */}
        <h1 className='capitalize font-bold text-3xl md:text-6xl text-center font-josefin'>Duplicate character remover</h1>
        <form onSubmit={handleSubmit} className='flex text-sm sm:text-lg md:text-xl outline outline-1 outline-slate-300 rounded-md overflow-hidden font-poppins'>
            <input className='p-3 md:p-4 focus-within:outline-blue-500' value={string} onChange={e => setString(e.target.value)} placeholder='Enter string'/>
            <button type='submit' onClick={handleSubmit} className='bg-blue-600 text-white px-4 '>Submit</button>
        </form>
        <p className={`text-center text-red-600 ${error && 'animate-up'}`}>{error}</p>
    </div>
    </section>
  )
}

export default Home
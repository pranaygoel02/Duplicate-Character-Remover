import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useString } from '../context/StringContext'

function ProtectedRoute({children}) {
    const {string} = useString();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(string.trim().length === 0) {
            navigate('/');
        }
    }, [string])

    return (
    children
  )
}

export default ProtectedRoute
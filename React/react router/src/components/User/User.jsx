import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { Userid } = useParams()
    return (
        <div className='bg-green-300 text-black'>
            {Userid && "this is user " + Userid}
        </div>
    )
}

export default User

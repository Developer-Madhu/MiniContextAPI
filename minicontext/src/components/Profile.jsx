import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const { user } = useContext(UserContext)

    if (!user) return null
    return (
        <div>
            <h2>Profile</h2>
            <br />
            <h3>{user.username}</h3>
        </div>
    )
}

export default Profile
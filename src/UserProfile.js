import React, { useContext } from "react";

import UserContext from './UserContext'
const UserProfile = () => {
    const user = useContext(UserContext)

    return(
        <div>
            <p>User Profile</p>
            <h1>User: {user.name}</h1>
            <h1>Age: {user.age}</h1>
        </div>
    )

}

export default UserProfile







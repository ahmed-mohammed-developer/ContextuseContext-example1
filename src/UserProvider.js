import React, {useState} from "react";
import UserContext from './UserContext'

const UserProvider = ({children}) => {
    const [user, setUser] =useState (
        {
            name: "Ahmed",
            age: 30
        }
    )
    return(
        <>
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
        </>
    )
}

export default UserProvider
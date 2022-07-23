import React, { useEffect, useState } from 'react'
import axios from 'axios';

function CurrentUserLoader({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:8080/current-user');
            setUser(res.data);
        })();
    }, [])

    console.log(user ? user.name : "Loading..");
    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }
                return child
            })}
        </>
    )
}

export default CurrentUserLoader
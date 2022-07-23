import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UserLoader({ userId, children }) {
    const [user, setUser] = useState(null);
    let uri = `http://localhost:8080/users/${userId}`

    useEffect(() => {
        (async () => {
            const res = await axios.get(uri);
            setUser(res.data);
        })();
    }, [])

    return (
        <>
            <h1>Loaded</h1>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }

                return child
            })}
        </>
    )
}

export default UserLoader
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export const withUser = (Component, userId) => {
    return props => {
        const [user, setUser] = useState();

        useEffect(() => {
            (async () => {
                const res = await axios.get(`http://localhost:8080/users/${userId}`)
                setUser(res.data)
            })()
        }, []);

        return <Component {...props} user={user} />
    }
}

import React, { useEffect, useState } from "react"
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
    return props => {
        const [user, setUser] = useState({});
        const [originalUser, setOriginalUser] = useState({});

        useEffect(() => {
            (async () => {
                const res = await axios.get(`http://localhost:8080/users/${userId}`);
                setUser(res.data);
                setOriginalUser(res.data);
            })()
        }, [])

        const onChangeUser = changes => {
            setUser({ ...user, ...changes });
        }

        const onSaveUser = async () => {
            const res = await axios.post(`http://localhost:8080/users/${userId}`, { user })
            setOriginalUser(res.data);
            setUser(res.data);
        }

        const onResetUser = () => {
            setUser(originalUser);
        }

        return <Component {...props}
            user={user}
            onChangeUser={onChangeUser}
            onResetUser={onResetUser}
            onSaveUser={onSaveUser}
        />

    }
}
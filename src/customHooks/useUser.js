import { useState, useEffect } from "react";
import axios from 'axios';

export const useUser = (userId) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:8080/users/${userId}`);
            setUser(res.data);
        })();
    }, [userId])

    return user
}
import { useState, useEffect } from "react";
import axios from 'axios';

export const useCurrentUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:8080/current-user');
            setUser(res.data);
        })();
    }, [])

    return user
}
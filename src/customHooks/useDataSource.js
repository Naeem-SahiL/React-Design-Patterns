import { useState, useEffect } from "react";

export const useDataSource = getResorceFunc => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await getResorceFunc();
            setResource(result);
        })();
    }, [getResorceFunc])

    return resource
}
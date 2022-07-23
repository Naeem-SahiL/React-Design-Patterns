import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ResourceLoader({ resourceUrl, resourceName, children }) {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await axios.get(resourceUrl);
            setState(res.data);
        })();
    }, [])

    return (
        <>
            <h1>Loaded</h1>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: state })
                }
                return child
            })}
        </>
    )
}

export default ResourceLoader
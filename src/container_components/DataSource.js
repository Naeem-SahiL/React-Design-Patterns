import React, { useEffect, useState } from 'react'

function DataSource({ getData = () => { }, resourceName, children }) {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getData();
            setState(res);
        })();
    }, [getData])
    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: state })
                }
                return child
            })}
        </>
    )
}

export default DataSource
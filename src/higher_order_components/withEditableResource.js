import React, { useEffect, useState } from "react"
import axios from 'axios';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
    return props => {
        const [data, setData] = useState({});
        const [originalData, setOriginalData] = useState({});

        useEffect(() => {
            (async () => {
                const res = await axios.get(resourcePath);
                setData(res.data);
                setOriginalData(res.data);
            })()
        }, [])

        const onChange = changes => {
            setData({ ...data, ...changes });
        }

        const onSave = async () => {
            const res = await axios.post(resourcePath, { [resourceName]: data })
            setOriginalData(res.data);
            setData(res.data);
        }

        const onReset = () => {
            setData(originalData);
        }
        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`]: onChange,
            [`onReset${capitalize(resourceName)}`]: onReset,
            [`onSave${capitalize(resourceName)}`]: onSave,
        }

        return <Component {...props}
            {...resourceProps}
        />

    }
}
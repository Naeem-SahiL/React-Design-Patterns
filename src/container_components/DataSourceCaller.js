import React from 'react'
import DataSource from './DataSource';
import ProductInfo from './ProductInfo';
import UserInfo from './UserInfo';
import axios from "axios";
function DataSourceCaller() {
    const productUrl = 'http://localhost:8080/products/123';
    const userUrl = 'http://localhost:8080/users/123';

    const getServerData = url => async () => {
        const response = await axios.get(url);
        return response.data
    }

    const getLocalStorageData = key => () => {
        return localStorage.getItem(key);
    }

    const Text = ({ message }) => (
        <h1>{message}</h1>
    );

    return (
        <>
            <DataSource getData={getServerData(userUrl)} resourceName='user'>
                <UserInfo />
            </DataSource>
            <DataSource getData={getServerData(productUrl)} resourceName='product'>
                <ProductInfo />
            </DataSource>
            <DataSource getData={getLocalStorageData('message')} resourceName='message'>
                <Text />
            </DataSource>
        </>
    )
}

export default DataSourceCaller
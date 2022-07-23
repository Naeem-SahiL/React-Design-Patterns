import React from 'react'
import UserInfo from '../container_components/UserInfo'
import { useCurrentUser } from './useCurrentUser'
import { useResource } from './useResource'
import { useUser } from './useUser'
import ProductInfo from '../container_components/ProductInfo'
import { useDataSource } from './useDataSource'
import axios from 'axios';

const serverResource = resourceUrl => async () => {
  const response = await axios.get(resourceUrl)
  return response.data
}

const localStorageResource = key => () => {
  return localStorage.getItem(key);
}
function DemoCustomHooks() {
  // const user = useCurrentUser();
  // const user = useUser('123')
  // const user = useResource('http://localhost:8080/users/123')
  // const product = useResource('http://localhost:8080/products/123')

  const user = useDataSource(serverResource('http://localhost:8080/users/123'));
  const message = useDataSource(localStorageResource('message'))
  return (
    <>
      <UserInfo user={user} />
      {/* <ProductInfo product={product} /> */}
      <h1>{message}</h1>
    </>
  )
}

export default DemoCustomHooks
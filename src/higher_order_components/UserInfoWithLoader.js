import React from 'react'
import UserInfo from '../container_components/UserInfo'
import { withUser } from "../higher_order_components/withUser";

function UserInfoWithLoader() {
    const UserInfoWithLoader = withUser(UserInfo, '234');

    return (
        <>
            <UserInfoWithLoader />
        </>
    );
}

export default UserInfoWithLoader
import React from 'react'
import { withEditableResource } from './withEditableResource';

const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
        <>
            <label>
                Name:
                <input name='name' value={name} onChange={(e) => onChangeUser({ name: e.target.value })} />
            </label>
            <br />
            <label>
                Age:
                <input name='age' value={age} onChange={(e) => onChangeUser({ age: Number(e.target.value) })} />
            </label>
            <br />
            <label>
                Hair Color:
                <input name='hairColor' value={hairColor} onChange={(e) => onChangeUser({ hairColor: e.target.value })} />
            </label>
            <br />

            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save</button>
        </>
    ) : <p>Loading...</p>
}, 'http://localhost:8080/users/123', 'user');

export default UserInfoForm
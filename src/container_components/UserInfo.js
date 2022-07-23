import React from 'react'

function UserInfo({ user }) {
    // console.log("user-.", user);
    const {
        name, age, hairColor, hobbies
    } = user || {}

    return user ? (
        <>
            <h3>Name: {name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map((hobbie, index) => (
                    <li key={index}>{hobbie}</li>
                ))}
            </ul>
        </>
    ) : <h2>Loading...</h2>
}

export default UserInfo
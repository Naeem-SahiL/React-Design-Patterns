import React, { useEffect, useState } from 'react'

function ControlledForm() {
    const [nameError, setNameError] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if (name.length < 2) {
            setNameError('name must be greter thn 2 chars')
        }
        else {
            setNameError('')
        }
    }, [name])

    return (
        <>
            <form>
                {nameError && <p>{nameError}</p>}
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                /><br />
                <input
                    name='age'
                    type='number'
                    placeholder='Age'
                    value={age}
                    onChange={e => setName(Number(e.target.value))}
                /><br />
                <input
                    name='hairColor'
                    type='text'
                    placeholder='Hair Color'
                    value={hairColor}
                    onChange={e => setName(e.target.value)}
                /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default ControlledForm
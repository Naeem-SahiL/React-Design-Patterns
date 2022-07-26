import React from 'react'
const isObject = x => typeof x === 'object' && x !== null;

function RecursiveComponent({ data }) {
  if (!isObject(data)) {
    return (
      <li>{data}</li>
    )
  }

  const pairs = Object.entries(data);
  console.log(pairs);
  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  )
}

export default RecursiveComponent
import React from 'react'

export const Cobakey = ({ initialJembut }) => {

    const [jembut, setJembut] = React.useState(initialJembut)

    const handleJembut = () => {
        setJembut(24)
    }
    return (
        <>
            <div>{jembut}</div>
            <button onClick={handleJembut}>Klik 24</button>

        </>

    )
}

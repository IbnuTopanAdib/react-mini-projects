export const getData = async () => {
    const res = await fetch('http://localhost:3000/places');
    const data = await res.json();
    if (!res.ok) {
        throw Error('Something went wrong');
    }
    return data
}

export const putData = async (places) => {
    const res = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) {
        throw Error('Something went wrong');
    }
    return await res.json();
}

export const getUserData = async () => {
    const res = await fetch('http://localhost:3000/user-places');
    const data = res.json()

    if (!res.ok) {
        throw Error("Something went wrong!")
    }

    return data.places || [];
}
import { useState } from "react";

export default function Login() {

    const [userInput, setUserInput] = useState({
        email: '',
        password: ''
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password : false
    })


    function handleSubmit(event) {
        event.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        console.log(enteredEmail, enteredPassword)
    }

    function handleInputChange(identifier, value) {
        setUserInput(prevValues => ({
            ...prevValues,
            [identifier]: value
        }))

        setDidEdit(prevValues => ({
            ...prevValues,
            [identifier] : false
        }))
    }

    function handleInputBlur(identifier) {
        setDidEdit(prevValues => ({
            ...prevValues,
            [identifier] : true
        }))
    }

    const isInvalidEmail = didEdit.email && !userInput.email.includes('@')


    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        onChange={(event) => handleInputChange('email', event.target.value)}
                        onBlur={()=> handleInputBlur('email')}
                        value={userInput.email}
                    />
                    <div className="control-error">
                        {isInvalidEmail && <p>Please enter valid email address</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(event) => handleInputChange('password', event.target.value)}
                        value={userInput.password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}

import { useRef, useState } from "react";

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [isInvalidEmail, setIsInvalidEmail] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const emailValid = enteredEmail.includes('@');

    if (!emailValid) {
      setIsInvalidEmail(true);
      return;

    }
    setIsInvalidEmail(false);
    console.log(enteredEmail, enteredPassword)

  }


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
            ref = {emailRef}
          />
          <div className="control-error">
            {isInvalidEmail && <p>email is error</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
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

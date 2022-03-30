import React, {createContext, useContext, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import ReactTooltip from "react-tooltip";


export const UserContext = createContext({
    loggedIn: false,
    setLoggedIn: () => {
    },
});

export default function Login() {
    const [username, setUsername] = useState("123456789");
    const [password, setPassword] = useState("123456");
    const {setLoggedIn} = useContext(UserContext);

    function validateForm() {
        return username.length > 5 && (password.length >= 6 || password.length === 0);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <div data-tip="" data-for="usernameTip">
                        <Form.Label>Username/File No.</Form.Label><br/>
                    </div>
                    <ReactTooltip id="usernameTip" place="right" effect="solid">
                        Customer: fill in your Policy or Claim No. <br/>
                        Employee: fill in your Username and Password.
                    </ReactTooltip>
                    <Form.Control
                        autoFocus
                        type="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <div data-tip="" data-for="passwordTip">
                        <Form.Label>Password (Optional)</Form.Label><br/>
                    </div>
                    <ReactTooltip id="passwordTip" place="right" effect="solid">
                        If you entered a username, you must enter a password.<br/>
                        Password should be longer than 6 characters.
                    </ReactTooltip>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button lock size="lg" type="submit" onClick={() => setLoggedIn(true)} disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}
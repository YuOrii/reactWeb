import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import {UserContext} from "./Login";

export default function NavBar() {
    const {setLoggedIn} = useContext(UserContext);

    return (
        <div>
            <div className="Login">
                <p>Logged into <br/> House Insurance Claim Management System</p>
                <Button onClick={() => setLoggedIn(false)}>Logout</Button>
            </div>
            <form>
                <label>
                    <input type="text"/>
                </label>
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
}
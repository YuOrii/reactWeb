import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import {UserContext} from "./Login";
import logo from '../logo.svg';

export default function NavBar() {
    const {setLoggedIn} = useContext(UserContext);

    return (
        <div>
            <div className="Login">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Adjuster <b>Farr Bacchus</b> <br/> Logged into House Insurance Claim Management System</p>
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
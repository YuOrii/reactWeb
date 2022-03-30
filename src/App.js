import logo from './logo.svg';
import './App.css';
import React, {useContext, useState} from 'react';
import Login, {UserContext} from "./containers/Login";
import NavBar from "./containers/NavBar";
import Tables from "./containers/Tables";

const divStyle = {
    display: 'flex',
};


// const UserLogout = () => {
//     const {loggedOut, setLoggedIn} = useContext(UserContext);
//     return (
//         <button onClick={() => setLoggedIn(false)}>
//             Logout
//         </button>
//     )
// }

const LeftPane = () => {
    const {loggedIn} = useContext(UserContext);
    if (!loggedIn) {
        return <Login/>;
    } else {
        return <NavBar/>;
    }
}

const RightPane = () => {
    const {loggedIn} = useContext(UserContext);
    if (!loggedIn) {
        return <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>
                    <code>House Insurance Claim Management System</code>
                </h2>
                <p>
                    Group 70
                </p>
                <ul className="NameList">
                    <li>Yuwen Liang 30086050</li>
                    <li>Haofan Zhao 30095149</li>
                    <li>Junhao Xu 30093183</li>
                </ul>
            </header>
        </div>
    } else {
        return <div className="App">
            <Tables/>
        </div>
    }
}

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const value = {loggedIn, setLoggedIn};

    return (
        <UserContext.Provider value={value}>
            <div style={divStyle}>
                <div className="Login">
                    <LeftPane/>
                </div>
                <div className="App">
                    <RightPane/>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default App;

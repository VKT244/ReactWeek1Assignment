import React from "react";
import Navigation from './Navigation';
export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="formStyle">
                <br/><br/>
                <div className="LogIn">
                    <h3>LogIn</h3>
            </div>
            <div className="form-group">
            <label>Username</label>
            <input type="text" class="form-control" id="userNameField" placeholder="Enter username"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="passwordField" placeholder="Enter password"/>
            <br/>
            <button type="submit" class="btn btn-light">Submit</button>
                </div>
            </div>
        );
    }
}
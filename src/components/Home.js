import React from "react";
import LoginForm from "./Form";
import Navigation from "./Navigation";
import Header from "./Header";

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
            <Header />
            <Navigation />
            <LoginForm />
            </div>
        );
    }
}
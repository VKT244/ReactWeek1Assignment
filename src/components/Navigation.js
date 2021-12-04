import React from "react";

export default class Navigation extends React.Component {
    render() {
        return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home<span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Other action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Some action here</a>
            </div>
            </li>
                </ul>
            </div>            
        </nav>
        </div>
            );
        }
    }
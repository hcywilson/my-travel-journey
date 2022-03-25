import React from "react";
import PublicIcon from '@mui/icons-material/Public';

export default function NavBar() {
    return (
        <nav>
            <PublicIcon className="earth--logo"/>
            <h1 className="nav-bar--title">my travel journal.</h1>
        </nav>
    )
}
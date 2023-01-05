import React from "react";
import ReactDOM from 'react-dom/client';

function Nav({children}){
    return ReactDOM.createPortal(
        children,
        document.getElementById('navbar-root')
    )
}
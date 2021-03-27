import React from 'react';
import './Header.css';
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTimeIcon";
import SearchIcon from "@material-ui/icons/Search";


function Header() {
    return ( <div className="header" >
<div className="header__left">
    <Avatar
    className="header__avatar"
    alt=""
    src=""
    />
    <AccessTimeIcon/>
</div>
<div className="header__search"><SearchIcon/>
<input placeholder=""/>
</div>
<div className="header__right">
    {/*<HelpOutlineIcon/>*/}
</div>
        </div>
    )
}

export default Header
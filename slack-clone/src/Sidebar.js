import React from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons"
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
    return  <div className="sidebar">
<div className="sidebar__header">
    <div className="sidebar__info">
         <h2>Clever Programmer</h2>
    <h3>
        <FiberManualRecordIcon/>
    </h3>
    </div>
   <CreateIcon/>
   <SidebarOption/>
</div>
        </div>
    
}

export default Sidebar;
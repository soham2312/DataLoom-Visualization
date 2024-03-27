import React from "react";

import { MdDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { MdReport } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { FaQ } from "react-icons/fa6";

const Sidebar = ({ extraclass }) => {
  return (
    <div className={extraclass ? "sidebar" : "sidebar dis"}>
      <div className="sidebar_menu">
        <div className="sidebar_menu_item selected">
          <MdDashboard className="sidebar_menu_icons" /> Dashboard
        </div>
        <div className="sidebar_menu_item">
          <IoSettingsSharp className="sidebar_menu_icons" /> Settings
        </div>
        <div className="sidebar_menu_item">
          <MdReport className="sidebar_menu_icons" /> Report
        </div>
        <div className="sidebar_menu_item">
          <IoMdHelpCircle className="sidebar_menu_icons" /> Helpdesk
        </div>
        <div className="sidebar_menu_item">
          <FaQ className="sidebar_menu_icons" /> FAQ
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

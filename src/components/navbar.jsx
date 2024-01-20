import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navBar" style={{background: 'grey', width: '150px'}}>
        <ul className="navList">
          <li className="navItem" style={{display: 'block', color: '#fff', lineHeight: '2'}}>Menu</li>
          <li className="navItem" style={{display: 'block', color: '#fff', lineHeight: '2'}}>Music</li>
          <li className="navItem" style={{display: 'block', color: '#fff', lineHeight: '2'}}>Message</li>
          <li className="navItem" style={{display: 'block', color: '#fff', lineHeight: '2'}}>Profile</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

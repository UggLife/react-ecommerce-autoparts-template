import './Sidebar.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const styles = {
  activeMenuLink: {
    background: 'rgb(196, 103, 214)',
    color: 'rgb(196, 103, 214)',
  },
};

const customerRoutes = {
  Purchases: '/dashboard/purchases',
  Messages: '/dashboard/messages',
};

const ownerRoutes = {
  Dashboard: '/dashboard',
  'New Listing': '/dashboard/newProduct',
  Inventory: '/dashboard/inventory',
  Purchases: '/dashboard/purchases',
  Messages: '/dashboard/messages',
};

const Sidebar = () => {
  const userRole = useSelector((state) => state.auth.userRole);

  // Create sidebar based on user role CUSTOMER / OWNER
  const createSidebar = (roleValue) => Object.keys(roleValue).map((route) => (
    <div className="sidebar__link">
      <NavLink activeStyle={styles.activeMenuLink} exact to={roleValue[route]}>
        <p>{route}</p>
      </NavLink>
    </div>
  ));

  return (
    <div id="sidebar">
      <div className="sidebar__menu">
        {userRole === 'CUSTOMER' ? createSidebar(customerRoutes) : createSidebar(ownerRoutes)}
      </div>
    </div>
  );
};

export default Sidebar;

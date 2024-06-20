import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomTabNavigator from './BottomTabNavigator';

function Layout() {
  return (
    <div>
      <Outlet />
      <BottomTabNavigator />
    </div>
  );
}

export default Layout;

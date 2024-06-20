import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProfilePage from './components/ProfilePage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;

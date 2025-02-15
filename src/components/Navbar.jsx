import { 
  FaHome, 
  FaBook, 
  FaRobot, 
  FaUsers, 
  FaLeaf, 
  FaUser, 
  FaCog,
  FaStar 
} from 'react-icons/fa';
import { useState } from 'react';

function Navbar({ currentPage, setCurrentPage }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const userPoints = 1250; // This could come from props or context

  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <FaHome /> },
    { id: 'learning', name: 'Learn', icon: <FaBook /> },
    { id: 'ai-chat', name: 'AI Help', icon: <FaRobot /> },
    { id: 'community', name: 'Community', icon: <FaUsers /> },
    { id: 'wellness', name: 'Wellness', icon: <FaLeaf /> }
  ];

  return (
    <nav className="navbar">
      <div className="nav-links">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
            aria-label={item.name}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </button>
        ))}
        
        <div className="profile-menu-container">
          <button
            className={`nav-link ${['profile', 'settings'].includes(currentPage) ? 'active' : ''}`}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            aria-label="Profile Menu"
          >
            <span className="nav-icon"><FaUser /></span>
            <span className="nav-text">Profile</span>
          </button>
          
          {showProfileMenu && (
            <div className="profile-dropdown">
              <div className="points-display">
                <FaStar className="points-icon" />
                <span>{userPoints} Points</span>
              </div>
              <button 
                onClick={() => {
                  setCurrentPage('profile');
                  setShowProfileMenu(false);
                }}
                className="dropdown-item"
              >
                <FaUser /> Profile
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('settings');
                  setShowProfileMenu(false);
                }}
                className="dropdown-item"
              >
                <FaCog /> Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 
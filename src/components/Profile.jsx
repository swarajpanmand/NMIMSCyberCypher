import { useState } from 'react'
import { FaUser, FaCog, FaBrain, FaClock, FaTrophy, FaChartLine, FaCalendarAlt, FaLightbulb, FaStar, FaMedal, FaHeart, FaUserNinja, FaUserAstronaut, FaUserSecret, FaUserTie, FaUserMd, FaUserGraduate, FaUserCog, FaUserAlt, FaUserCircle, FaEdit, FaSave, FaCamera } from 'react-icons/fa';
import { GiBrain, GiStairsGoal } from 'react-icons/gi';

const avatarOptions = [
  {
    icon: FaUserNinja,
    label: 'Ninja',
    color: '#e74c3c'
  },
  {
    icon: FaUserAstronaut,
    label: 'Astronaut',
    color: '#3498db'
  },
  {
    icon: FaUserSecret,
    label: 'Secret Agent',
    color: '#2c3e50'
  },
  {
    icon: FaUserTie,
    label: 'Professional',
    color: '#34495e'
  },
  {
    icon: FaUserMd,
    label: 'Doctor',
    color: '#27ae60'
  },
  {
    icon: FaUserGraduate,
    label: 'Graduate',
    color: '#8e44ad'
  },
  {
    icon: FaUserCog,
    label: 'Engineer',
    color: '#f39c12'
  },
  {
    icon: FaUserAlt,
    label: 'Classic',
    color: '#7f8c8d'
  },
  {
    icon: FaUserCircle,
    label: 'Circle',
    color: '#16a085'
  }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showAvatarSelection, setShowAvatarSelection] = useState(false);

  const userStats = {
    focusTime: "28h 45m",
    completedTasks: 156,
    streakDays: 12,
    achievements: 8
  };

  const achievements = [
    {
      id: 1,
      title: "Focus Master",
      description: "Completed 5 focus sessions in one day",
      icon: <FaBrain />,
      progress: 100,
      earned: true
    },
    {
      id: 2,
      title: "Consistency King",
      description: "Maintained a 7-day streak",
      icon: <FaChartLine />,
      progress: 100,
      earned: true
    },
    {
      id: 3,
      title: "Task Champion",
      description: "Completed 50 tasks",
      icon: <FaTrophy />,
      progress: 75,
      earned: false
    }
  ];

  const learningPreferences = {
    visualLearning: 85,
    audioLearning: 60,
    kinestheticLearning: 75,
    readingWriting: 45
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setShowAvatarSelection(false);
  };

  return (
    <div className="profile-container">
      {/* Profile Header with Avatar */}
      <div className="profile-header">
        <div className="profile-avatar-container">
          <div className="profile-avatar-large">
            {selectedAvatar && <selectedAvatar.icon style={{ color: selectedAvatar.color }} />}
            <button 
              className="change-avatar-btn"
              onClick={() => setShowAvatarSelection(!showAvatarSelection)}
            >
              <FaCamera />
            </button>
          </div>
          <h2>Your Profile</h2>
        </div>
      </div>

      {/* Avatar Selection Modal */}
      {showAvatarSelection && (
        <div className="avatar-selection-modal">
          <h3>Choose Your Avatar</h3>
          <div className="avatar-grid">
            {avatarOptions.map((avatar, index) => (
              <div 
                key={index}
                className={`avatar-option ${selectedAvatar === avatar ? 'selected' : ''}`}
                onClick={() => handleAvatarSelect(avatar)}
              >
                <avatar.icon className="avatar-icon" style={{ color: avatar.color }} />
                <span>{avatar.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Profile Navigation */}
      <div className="profile-nav">
        <button 
          className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <FaUser /> Overview
        </button>
        <button 
          className={`nav-btn ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          <FaTrophy /> Achievements
        </button>
        <button 
          className={`nav-btn ${activeTab === 'preferences' ? 'active' : ''}`}
          onClick={() => setActiveTab('preferences')}
        >
          <FaCog /> Preferences
        </button>
      </div>

      {/* Profile Content */}
      <div className="profile-content">
        {activeTab === 'overview' && (
          <div className="profile-overview">
            <div className="overview-section">
              <h3><FaLightbulb /> Learning Style</h3>
              <div className="learning-styles">
                {Object.entries(learningPreferences).map(([style, value]) => (
                  <div key={style} className="learning-style-item">
                    <div className="style-header">
                      <span className="style-name">
                        {style.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="style-value">{value}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overview-section">
              <h3><GiStairsGoal /> Current Goals</h3>
              <div className="goals-grid">
                <div className="goal-card">
                  <div className="goal-icon"><FaClock /></div>
                  <h4>Daily Focus Time</h4>
                  <p>2 hours / 3 hours</p>
                  <div className="goal-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: '66%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Add more goal cards */}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="achievements-grid">
            {achievements.map(achievement => (
              <div 
                key={achievement.id} 
                className={`achievement-card ${achievement.earned ? 'earned' : ''}`}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-info">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                  <div className="achievement-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                    <span>{achievement.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="preferences-section">
            {/* Add preferences content */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile 
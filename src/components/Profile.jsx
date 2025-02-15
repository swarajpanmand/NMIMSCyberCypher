import { useState } from 'react'
import { FaUser, FaCog, FaBrain, FaClock, FaTrophy, FaChartLine, FaCalendarAlt, FaLightbulb, FaStar, FaMedal, FaHeart } from 'react-icons/fa';
import { GiBrain, GiStairsGoal } from 'react-icons/gi';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

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

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="/avatar-placeholder.png" alt="Profile" />
          <div className="profile-status">
            <span className="status-dot"></span>
            Level 8
          </div>
        </div>
        <div className="profile-info">
          <h2>Sarah Johnson</h2>
          <p className="profile-bio">Embracing ADHD and turning challenges into strengths 💪</p>
          <div className="profile-stats">
            <div className="stat-item">
              <FaClock className="stat-icon" />
              <div className="stat-details">
                <span className="stat-value">{userStats.focusTime}</span>
                <span className="stat-label">Focus Time</span>
              </div>
            </div>
            <div className="stat-item">
              <FaChartLine className="stat-icon" />
              <div className="stat-details">
                <span className="stat-value">{userStats.completedTasks}</span>
                <span className="stat-label">Tasks Done</span>
              </div>
            </div>
            <div className="stat-item">
              <FaCalendarAlt className="stat-icon" />
              <div className="stat-details">
                <span className="stat-value">{userStats.streakDays}</span>
                <span className="stat-label">Day Streak</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
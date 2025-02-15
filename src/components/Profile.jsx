import { useState } from 'react'
import { FaUser, FaCrown, FaStar, FaTrophy } from 'react-icons/fa';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('profile')
  const [settings, setSettings] = useState({
    // Profile Settings
    username: 'CodeQuester',
    avatar: '/default-avatar.png',
    selectedBadges: ['coding-streak', 'problem-solver'],
    theme: 'light',
    
    // Accessibility Settings
    fontSize: 'medium',
    contrast: 'normal',
    animationSpeed: 'normal',
    fontFamily: 'default',
    
    // Learning Preferences
    difficulty: 'medium',
    dailyGoal: 2,
    preferredTopics: ['algorithms', 'web-development'],
    studyReminders: true
  })

  const badges = [
    { id: 'coding-streak', name: '7-Day Streak', icon: '🔥' },
    { id: 'problem-solver', name: 'Problem Solver', icon: '🎯' },
    { id: 'team-player', name: 'Team Player', icon: '👥' },
    { id: 'quick-learner', name: 'Quick Learner', icon: '⚡' },
    { id: 'bug-hunter', name: 'Bug Hunter', icon: '🐛' },
    { id: 'helper', name: 'Helper', icon: '🤝' }
  ]

  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }))
  }

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <FaUser className="avatar-icon" />
          <button className="change-avatar-btn">Change Avatar</button>
        </div>
        <div className="profile-info">
          <h2>{settings.username}</h2>
          <div className="badge-showcase">
            <FaCrown className="badge" title="Premium Member" />
            <FaStar className="badge" title="Top Contributor" />
            <FaTrophy className="badge" title="Achievement Master" />
          </div>
        </div>
      </div>
      {/* <Heatmap /> */}
      {/* Settings Navigation */}
      <div className="settings-nav">
        <button 
          className={`nav-btn ${activeSection === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveSection('profile')}
        >
          Profile
        </button>
        <button 
          className={`nav-btn ${activeSection === 'accessibility' ? 'active' : ''}`}
          onClick={() => setActiveSection('accessibility')}
        >
          Accessibility
        </button>
        <button 
          className={`nav-btn ${activeSection === 'learning' ? 'active' : ''}`}
          onClick={() => setActiveSection('learning')}
        >
          Learning
        </button>
      </div>

      {/* Settings Content */}
      <div className="settings-content">
        {activeSection === 'profile' && (
          <div className="settings-section">
            <h3>Profile Customization</h3>
            
            <div className="setting-group">
              <label>Username</label>
              <input 
                type="text"
                value={settings.username}
                onChange={(e) => handleSettingChange('profile', 'username', e.target.value)}
              />
            </div>

            <div className="setting-group">
              <label>Theme</label>
              <select 
                value={settings.theme}
                onChange={(e) => handleSettingChange('profile', 'theme', e.target.value)}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="high-contrast">High Contrast</option>
              </select>
            </div>

            <div className="setting-group">
              <label>Available Badges</label>
              <div className="badges-grid">
                {badges.map(badge => (
                  <div 
                    key={badge.id}
                    className={`badge-item ${settings.selectedBadges.includes(badge.id) ? 'selected' : ''}`}
                    onClick={() => {
                      const newSelected = settings.selectedBadges.includes(badge.id)
                        ? settings.selectedBadges.filter(id => id !== badge.id)
                        : [...settings.selectedBadges, badge.id]
                      handleSettingChange('profile', 'selectedBadges', newSelected)
                    }}
                  >
                    <span className="badge-icon">{badge.icon}</span>
                    <span className="badge-name">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'accessibility' && (
          <div className="settings-section">
            <h3>Accessibility Preferences</h3>
            
            <div className="setting-group">
              <label>Font Size</label>
              <select 
                value={settings.fontSize}
                onChange={(e) => handleSettingChange('accessibility', 'fontSize', e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">Extra Large</option>
              </select>
            </div>

            <div className="setting-group">
              <label>Contrast</label>
              <select 
                value={settings.contrast}
                onChange={(e) => handleSettingChange('accessibility', 'contrast', e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="very-high">Very High</option>
              </select>
            </div>

            <div className="setting-group">
              <label>Animation Speed</label>
              <select 
                value={settings.animationSpeed}
                onChange={(e) => handleSettingChange('accessibility', 'animationSpeed', e.target.value)}
              >
                <option value="none">No Animations</option>
                <option value="slow">Slow</option>
                <option value="normal">Normal</option>
              </select>
            </div>

            <div className="setting-group">
              <label>Font Family</label>
              <select 
                value={settings.fontFamily}
                onChange={(e) => handleSettingChange('accessibility', 'fontFamily', e.target.value)}
              >
                <option value="default">Default</option>
                <option value="dyslexic">OpenDyslexic</option>
                <option value="sans-serif">Sans Serif</option>
                <option value="monospace">Monospace</option>
              </select>
            </div>
          </div>
        )}

        {activeSection === 'learning' && (
          <div className="settings-section">
            <h3>Learning Preferences</h3>
            
            <div className="setting-group">
              <label>Content Difficulty</label>
              <select 
                value={settings.difficulty}
                onChange={(e) => handleSettingChange('learning', 'difficulty', e.target.value)}
              >
                <option value="beginner">Beginner</option>
                <option value="medium">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="setting-group">
              <label>Daily Learning Goal (hours)</label>
              <input 
                type="number"
                min="0.5"
                max="8"
                step="0.5"
                value={settings.dailyGoal}
                onChange={(e) => handleSettingChange('learning', 'dailyGoal', parseFloat(e.target.value))}
              />
            </div>

            <div className="setting-group">
              <label>Preferred Topics</label>
              <div className="topics-grid">
                {['algorithms', 'web-development', 'databases', 'machine-learning'].map(topic => (
                  <label key={topic} className="topic-checkbox">
                    <input 
                      type="checkbox"
                      checked={settings.preferredTopics.includes(topic)}
                      onChange={(e) => {
                        const newTopics = e.target.checked
                          ? [...settings.preferredTopics, topic]
                          : settings.preferredTopics.filter(t => t !== topic)
                        handleSettingChange('learning', 'preferredTopics', newTopics)
                      }}
                    />
                    {topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </label>
                ))}
              </div>
            </div>

            <div className="setting-group">
              <label className="switch-label">
                <input 
                  type="checkbox"
                  checked={settings.studyReminders}
                  onChange={(e) => handleSettingChange('learning', 'studyReminders', e.target.checked)}
                />
                Enable Study Reminders
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="settings-footer">
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  )
}

export default Profile 
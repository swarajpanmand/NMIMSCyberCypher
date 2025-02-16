import { useState } from 'react'
import { 
  FaUser, 
  FaBell, 
  FaShieldAlt, 
  FaPalette, 
  FaUniversalAccess,
  FaLink,
  FaUserCircle,
  FaUserNinja,
  FaUserAstronaut,
  FaUserSecret,
  FaUserTie,
  FaUserMd,
  FaUserGraduate,
  FaUserCog,
  FaUserAlt,
  FaCamera,
  FaSave,
  FaEdit
} from 'react-icons/fa';

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

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [settings, setSettings] = useState({
    // Account Settings
    email: 'user@example.com',
    linkedAccounts: {
      google: true,
      github: false,
      discord: true
    },
    twoFactorEnabled: true,

    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    breakReminders: true,
    studyReminders: true,
    achievementAlerts: true,
    reminderTime: '09:00',
    
    // Display Settings
    darkMode: false,
    dyslexicFont: false,
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    
    // Parental Controls
    parentalControlEnabled: false,
    studyTimeLimit: 120, // minutes
    contentFilter: 'moderate',
    parentEmail: ''
  })

  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0]);
  const [showAvatarSelection, setShowAvatarSelection] = useState(false);

  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }))
  }

  const handlePasswordReset = () => {
    // Password reset logic would go here
    alert('Password reset email sent!')
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: <FaUser /> },
    { id: 'notifications', name: 'Notifications', icon: <FaBell /> },
    { id: 'privacy', name: 'Privacy & Security', icon: <FaShieldAlt /> },
    { id: 'appearance', name: 'Appearance', icon: <FaPalette /> },
    { id: 'accessibility', name: 'Accessibility', icon: <FaUniversalAccess /> },
    { id: 'connections', name: 'Connected Accounts', icon: <FaLink /> }
  ];

  return (
    <div className="settings-page">
      <nav className="settings-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="nav-tab-icon">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </nav>

      <div className="settings-content">
        {activeTab === 'profile' && (
          <div className="settings-section">
            <h2>Profile Settings</h2>
            
            <div className="current-avatar-container">
              <div className="current-avatar-large">
                {selectedAvatar && <selectedAvatar.icon style={{ color: selectedAvatar.color }} />}
                <button 
                  className="change-avatar-btn"
                  onClick={() => setShowAvatarSelection(!showAvatarSelection)}
                >
                  <FaCamera />
                </button>
              </div>
              <span className="avatar-label">{selectedAvatar.label}</span>
            </div>

            {showAvatarSelection && (
              <div className="avatar-selection-panel">
                <h3>Choose Your Avatar</h3>
                <div className="settings-avatar-grid">
                  {avatarOptions.map((avatar, index) => (
                    <div 
                      key={index}
                      className={`settings-avatar-option ${selectedAvatar === avatar ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedAvatar(avatar);
                        setShowAvatarSelection(false);
                      }}
                    >
                      <avatar.icon 
                        className="settings-avatar-icon" 
                        style={{ color: avatar.color }} 
                      />
                      <span>{avatar.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="setting-group">
              <h3>Email Address</h3>
              <input 
                type="email" 
                value={settings.email}
                onChange={(e) => handleSettingChange('profile', 'email', e.target.value)}
              />
              <button className="verify-btn">Verify Email</button>
            </div>

            <div className="setting-group">
              <h3>Password</h3>
              <button 
                className="reset-password-btn"
                onClick={handlePasswordReset}
              >
                Reset Password
              </button>
            </div>

            <div className="setting-group">
              <h3>Two-Factor Authentication</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.twoFactorEnabled}
                  onChange={(e) => handleSettingChange('profile', 'twoFactorEnabled', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-group">
              <h3>Linked Accounts</h3>
              <div className="linked-accounts">
                <div className="account-link">
                  <span>Google</span>
                  <button 
                    className={settings.linkedAccounts.google ? 'unlink-btn' : 'link-btn'}
                    onClick={() => handleSettingChange(
                      'profile', 
                      'linkedAccounts', 
                      {...settings.linkedAccounts, google: !settings.linkedAccounts.google}
                    )}
                  >
                    {settings.linkedAccounts.google ? 'Unlink' : 'Link'}
                  </button>
                </div>
                <div className="account-link">
                  <span>GitHub</span>
                  <button 
                    className={settings.linkedAccounts.github ? 'unlink-btn' : 'link-btn'}
                    onClick={() => handleSettingChange(
                      'profile', 
                      'linkedAccounts', 
                      {...settings.linkedAccounts, github: !settings.linkedAccounts.github}
                    )}
                  >
                    {settings.linkedAccounts.github ? 'Unlink' : 'Link'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="settings-section">
            <h2>Notifications</h2>
            
            <div className="setting-group">
              <h3>Email Notifications</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => handleSettingChange('notifications', 'emailNotifications', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-group">
              <h3>Push Notifications</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.pushNotifications}
                  onChange={(e) => handleSettingChange('notifications', 'pushNotifications', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-group">
              <h3>Reminder Settings</h3>
              <div className="reminder-settings">
                <label>
                  <input 
                    type="checkbox"
                    checked={settings.breakReminders}
                    onChange={(e) => handleSettingChange('notifications', 'breakReminders', e.target.checked)}
                  />
                  Break Reminders
                </label>
                <label>
                  <input 
                    type="checkbox"
                    checked={settings.studyReminders}
                    onChange={(e) => handleSettingChange('notifications', 'studyReminders', e.target.checked)}
                  />
                  Study Reminders
                </label>
                <label>
                  <input 
                    type="checkbox"
                    checked={settings.achievementAlerts}
                    onChange={(e) => handleSettingChange('notifications', 'achievementAlerts', e.target.checked)}
                  />
                  Achievement Alerts
                </label>
              </div>
            </div>

            <div className="setting-group">
              <h3>Preferred Reminder Time</h3>
              <input 
                type="time"
                value={settings.reminderTime}
                onChange={(e) => handleSettingChange('notifications', 'reminderTime', e.target.value)}
              />
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="settings-section">
            <h2>Privacy & Security</h2>
            
            <div className="setting-group">
              <h3>Two-Factor Authentication</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.twoFactorEnabled}
                  onChange={(e) => handleSettingChange('privacy', 'twoFactorEnabled', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-group">
              <h3>Linked Accounts</h3>
              <div className="linked-accounts">
                <div className="account-link">
                  <span>Google</span>
                  <button 
                    className={settings.linkedAccounts.google ? 'unlink-btn' : 'link-btn'}
                    onClick={() => handleSettingChange(
                      'privacy', 
                      'linkedAccounts', 
                      {...settings.linkedAccounts, google: !settings.linkedAccounts.google}
                    )}
                  >
                    {settings.linkedAccounts.google ? 'Unlink' : 'Link'}
                  </button>
                </div>
                <div className="account-link">
                  <span>GitHub</span>
                  <button 
                    className={settings.linkedAccounts.github ? 'unlink-btn' : 'link-btn'}
                    onClick={() => handleSettingChange(
                      'privacy', 
                      'linkedAccounts', 
                      {...settings.linkedAccounts, github: !settings.linkedAccounts.github}
                    )}
                  >
                    {settings.linkedAccounts.github ? 'Unlink' : 'Link'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appearance' && (
          <div className="settings-section">
            <h2>Appearance</h2>
            
            <div className="setting-group">
              <h3>Theme</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) => handleSettingChange('appearance', 'darkMode', e.target.checked)}
                />
                <span className="toggle-slider"></span>
                Dark Mode
              </label>
            </div>

            <div className="setting-group">
              <h3>Accessibility</h3>
              <div className="accessibility-settings">
                <label>
                  <input 
                    type="checkbox"
                    checked={settings.dyslexicFont}
                    onChange={(e) => handleSettingChange('appearance', 'dyslexicFont', e.target.checked)}
                  />
                  Dyslexia-Friendly Font
                </label>
                <label>
                  <input 
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => handleSettingChange('appearance', 'highContrast', e.target.checked)}
                  />
                  High Contrast
                </label>
                <label>
                  <input 
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => handleSettingChange('appearance', 'reducedMotion', e.target.checked)}
                  />
                  Reduced Motion
                </label>
              </div>
            </div>

            <div className="setting-group">
              <h3>Font Size</h3>
              <select 
                value={settings.fontSize}
                onChange={(e) => handleSettingChange('appearance', 'fontSize', e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">Extra Large</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === 'accessibility' && (
          <div className="settings-section">
            <h2>Accessibility</h2>
            
            <div className="setting-group">
              <h3>Dyslexia-Friendly Font</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.dyslexicFont}
                  onChange={(e) => handleSettingChange('accessibility', 'dyslexicFont', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-group">
              <h3>High Contrast</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => handleSettingChange('accessibility', 'highContrast', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-group">
              <h3>Reduced Motion</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => handleSettingChange('accessibility', 'reducedMotion', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        )}

        {activeTab === 'connections' && (
          <div className="settings-section">
            <h2>Connected Accounts</h2>
            
            <div className="setting-group">
              <h3>Linked Accounts</h3>
              <div className="linked-accounts">
                <div className="account-link">
                  <span>Google</span>
                  <button 
                    className={settings.linkedAccounts.google ? 'unlink-btn' : 'link-btn'}
                    onClick={() => handleSettingChange(
                      'connections', 
                      'linkedAccounts', 
                      {...settings.linkedAccounts, google: !settings.linkedAccounts.google}
                    )}
                  >
                    {settings.linkedAccounts.google ? 'Unlink' : 'Link'}
                  </button>
                </div>
                <div className="account-link">
                  <span>GitHub</span>
                  <button 
                    className={settings.linkedAccounts.github ? 'unlink-btn' : 'link-btn'}
                    onClick={() => handleSettingChange(
                      'connections', 
                      'linkedAccounts', 
                      {...settings.linkedAccounts, github: !settings.linkedAccounts.github}
                    )}
                  >
                    {settings.linkedAccounts.github ? 'Unlink' : 'Link'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="settings-footer">
        <button className="save-settings-btn">Save Changes</button>
      </div>
    </div>
  )
}

export default Settings 
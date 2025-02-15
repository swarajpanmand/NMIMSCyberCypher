import { useState } from 'react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account')
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

  return (
    <div className="settings-page">
      {/* Settings Navigation */}
      <nav className="settings-nav">
        <button 
          className={`nav-tab ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          Account & Security
        </button>
        <button 
          className={`nav-tab ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications
        </button>
        <button 
          className={`nav-tab ${activeTab === 'display' ? 'active' : ''}`}
          onClick={() => setActiveTab('display')}
        >
          Display
        </button>
        <button 
          className={`nav-tab ${activeTab === 'parental' ? 'active' : ''}`}
          onClick={() => setActiveTab('parental')}
        >
          Parental Controls
        </button>
      </nav>

      {/* Settings Content */}
      <div className="settings-content">
        {activeTab === 'account' && (
          <div className="settings-section">
            <h2>Account & Security</h2>
            
            <div className="setting-group">
              <h3>Email Address</h3>
              <input 
                type="email" 
                value={settings.email}
                onChange={(e) => handleSettingChange('account', 'email', e.target.value)}
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
                  onChange={(e) => handleSettingChange('account', 'twoFactorEnabled', e.target.checked)}
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
                      'account', 
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
                      'account', 
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

        {activeTab === 'display' && (
          <div className="settings-section">
            <h2>Display Settings</h2>
            
            <div className="setting-group">
              <h3>Theme</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) => handleSettingChange('display', 'darkMode', e.target.checked)}
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
                    onChange={(e) => handleSettingChange('display', 'dyslexicFont', e.target.checked)}
                  />
                  Dyslexia-Friendly Font
                </label>
                <label>
                  <input 
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => handleSettingChange('display', 'highContrast', e.target.checked)}
                  />
                  High Contrast
                </label>
                <label>
                  <input 
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => handleSettingChange('display', 'reducedMotion', e.target.checked)}
                  />
                  Reduced Motion
                </label>
              </div>
            </div>

            <div className="setting-group">
              <h3>Font Size</h3>
              <select 
                value={settings.fontSize}
                onChange={(e) => handleSettingChange('display', 'fontSize', e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">Extra Large</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === 'parental' && (
          <div className="settings-section">
            <h2>Parental Controls</h2>
            
            <div className="setting-group">
              <h3>Enable Parental Controls</h3>
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={settings.parentalControlEnabled}
                  onChange={(e) => handleSettingChange('parental', 'parentalControlEnabled', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            {settings.parentalControlEnabled && (
              <>
                <div className="setting-group">
                  <h3>Daily Study Time Limit (minutes)</h3>
                  <input 
                    type="number"
                    min="30"
                    max="480"
                    value={settings.studyTimeLimit}
                    onChange={(e) => handleSettingChange('parental', 'studyTimeLimit', parseInt(e.target.value))}
                  />
                </div>

                <div className="setting-group">
                  <h3>Content Filter Level</h3>
                  <select 
                    value={settings.contentFilter}
                    onChange={(e) => handleSettingChange('parental', 'contentFilter', e.target.value)}
                  >
                    <option value="strict">Strict</option>
                    <option value="moderate">Moderate</option>
                    <option value="light">Light</option>
                  </select>
                </div>

                <div className="setting-group">
                  <h3>Parent/Guardian Email</h3>
                  <input 
                    type="email"
                    value={settings.parentEmail}
                    onChange={(e) => handleSettingChange('parental', 'parentEmail', e.target.value)}
                    placeholder="parent@example.com"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="settings-footer">
        <button className="save-settings-btn">Save Changes</button>
      </div>
    </div>
  )
}

export default Settings 
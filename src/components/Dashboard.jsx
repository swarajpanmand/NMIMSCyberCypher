import { useState } from 'react'
import { FaUser } from 'react-icons/fa'

const Dashboard = () => {
  const [activeMode, setActiveMode] = useState('focus') // focus, checklist

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {/* Left Sidebar - Progress & Achievements */}
        <aside className="progress-sidebar">
          <div className="profile-summary">
            <div className="avatar-container">
              <div className="avatar">
                <FaUser />
              </div>
              <div className="level-badge">Lvl 5</div>
            </div>
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-title">ADHD Learning Explorer</p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-icon">⭐</span>
                <span className="stat-value">1,250 XP</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🏆</span>
                <span className="stat-value">15 Badges</span>
              </div>
            </div>
          </div>

          <div className="achievements">
            <h3>Recent Achievements</h3>
            <div className="badges-grid">
              <div className="badge" title="First Code Challenge">🗡️</div>
              <div className="badge" title="3-Day Streak">👕</div>
              <div className="badge" title="Helper Badge">🎽</div>
              <div className="badge locked" title="Coming Soon">🔒</div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          {/* Study Mode Selector */}
          <div className="mode-selector">
            <button 
              className={`mode-btn ${activeMode === 'focus' ? 'active' : ''}`}
              onClick={() => setActiveMode('focus')}
            >
              Focus Session
            </button>
            <button 
              className={`mode-btn ${activeMode === 'checklist' ? 'active' : ''}`}
              onClick={() => setActiveMode('checklist')}
            >
              Study Checklist
            </button>
          </div>

          {/* Learning Path Map */}
          <div className="learning-map">
            <h2>Your Learning Journey</h2>
            <div className="map-grid">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className={`map-node ${i < 3 ? 'completed' : i === 3 ? 'current' : 'locked'}`}
                >
                  {i < 3 ? '✅' : i === 3 ? '🎯' : '🔒'}
                  <span className="node-label">Level {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar - Notes & Reminders */}
        <aside className="notes-sidebar">
          <div className="sticky-notes">
            <h3>Quick Notes</h3>
            <div className="note">
              <textarea placeholder="Add a new note..."></textarea>
            </div>
            <div className="note">
              <p>Review Arrays & Objects</p>
              <span className="note-date">Today</span>
            </div>
          </div>

          <div className="reminders">
            <h3>Reminders</h3>
            <div className="reminder-list">
              <div className="reminder">
                <span className="reminder-time">2:30 PM</span>
                <span className="reminder-text">Practice Session</span>
              </div>
              <div className="reminder">
                <span className="reminder-time">4:00 PM</span>
                <span className="reminder-text">Community Meet</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Dashboard 
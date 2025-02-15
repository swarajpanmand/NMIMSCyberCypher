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
              <div className="badge" title="First Code Challenge"><svg width="102" height="104" viewBox="0 0 102 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48.6208 0.000218463V22.1252C50.3668 22.1834 52.1188 22.1836 53.8668 22.1252V0L48.6208 0.000218463ZM32.8489 24.1331V30.8683H69.6393V24.1331C57.4522 26.9157 44.9167 26.8881 32.8489 24.1331ZM0.000218463 31.7973L2.04244 40.0147L30.9363 41.7837L32.9923 41.9066L32.8491 43.9626C32.2821 52.2855 33.9982 61.1592 38.4368 68.5401L40.1035 36.5242L0.000218463 31.7973ZM101.245 31.7973L62.3716 36.381L63.9426 66.5112C67.5398 59.5657 68.9123 51.5376 68.3962 43.9628L68.2596 41.907L70.3088 41.7839L99.2029 40.0149L101.245 31.7973H101.245ZM44.2769 34.9532L41.9474 79.6808V89.3393L51.6471 103.882L61.0527 89.599L58.2111 34.9532H53.2864V89.8038H49.2016V34.953H44.2769V34.9532ZM3.02563 44.168C3.79504 46.6236 4.78369 49.2011 5.94262 51.8044L28.7846 49.9329C28.7063 48.5296 28.6858 47.1274 28.7234 45.7388L3.02563 44.168ZM98.2191 44.168L72.5218 45.7388C72.5594 47.1274 72.5386 48.5296 72.4606 49.9329L95.3025 51.8044C96.461 49.2011 97.4501 46.6236 98.2188 44.1678L98.2191 44.168ZM29.1809 54.0043L7.82091 55.7529C9.01131 58.1086 10.3184 60.4464 11.7078 62.7061L30.0825 58.7104C29.7033 57.1547 29.4008 55.5798 29.1809 54.0043ZM72.064 54.0043C71.8448 55.5796 71.5482 57.1549 71.1696 58.7104L89.5372 62.7061C90.9267 60.4464 92.234 58.1086 93.424 55.7529L72.064 54.0043ZM31.2237 62.6449L14.0781 66.3745C15.5413 68.5167 17.0661 70.5386 18.6137 72.3786L32.808 66.6207C32.2124 65.319 31.6839 63.9926 31.2233 62.6451L31.2237 62.6449ZM70.0223 62.6449C69.5617 63.9926 69.0327 65.3186 68.4375 66.6205L82.6317 72.3786C84.1792 70.5392 85.7041 68.5171 87.1673 66.3748L70.022 62.6451L70.0223 62.6449Z" fill="#FFD166"/>
</svg>
</div>
              <div className="badge" title="3-Day Streak"><svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.62052 0C2.38438 0.177052 -0.0668116 2.48245 0.00138638 6.61936L4.32234 13.3473C5.29066 13.0822 6.36828 12.5084 7.43671 11.744L16.7208 24.8448C13.001 29.3979 9.88834 34.5587 7.38513 40.3284L13.1885 46.1322C15.653 40.9736 18.5731 36.334 21.9139 32.1726L67.9956 97.1956L104.457 104.455L97.197 67.994L32.1576 21.9003C36.5089 18.3794 41.3036 15.3625 46.508 12.812L40.704 7.00865C34.7572 9.58859 29.4596 12.8177 24.8053 16.6901L11.7441 7.43336C12.4967 6.37913 13.0692 5.30545 13.349 4.3203L6.62096 0H6.62052ZM94.2374 19.0021V19.0038L94.2381 19.0021H94.2374ZM94.2374 19.0038L88.111 46.3202L82.621 28.7039L78.6636 44.1505L72.792 33.3001L72.6644 45.9381L100.749 65.98L104.068 85.0005L103.812 44.1505L96.2807 52.8311L94.2379 19.0041L94.2374 19.0038ZM28.4548 25.1198L77.0292 68.0426L82.6348 82.633L68.0444 77.0274L25.1236 28.4554C26.1968 27.3017 27.3083 26.1909 28.4544 25.1198H28.4548ZM35.5161 68.022V68.0229H35.5172L35.5161 68.022ZM35.5172 68.0229L41.6437 73.0011L33.7288 73.8947L46.3673 78.1072L23.2617 79.0012L48.4097 85.0013L26.3258 89.086L54.1549 94.7027L39.474 104.277L85.0473 104.66L66.0269 101.341L43.1762 68.4058L35.5177 68.0229H35.5172Z" fill="#FFD166"/>
</svg></div>
              <div className="badge" title="Helper Badge"><svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M101.271 88.8015C117.171 66.9203 115.257 36.1215 95.5261 16.3898C75.3947 -3.74164 43.7419 -5.32738 21.7944 11.6312C18.6164 7.91062 15.5425 4.19852 12.7918 0.682685L0.993421 12.4815C4.50971 15.2038 8.24238 18.2222 11.9915 21.3382C-5.34739 43.301 -3.88423 75.2555 16.3881 95.5277C36.0534 115.193 66.7109 117.158 88.5781 101.431L93.2371 106.09L110.879 110.484L105.899 93.4286L101.271 88.8014L101.271 88.8015ZM72.8808 60.4111L46.236 33.7668L56.2114 23.7908L48.9377 16.5164C69.5817 15.4867 86.6846 40.2035 72.8804 60.4109L72.8808 60.4111ZM48.4539 16.5438L36.604 28.395C35.1649 26.8026 33.6707 25.1437 32.1465 23.4398C37.4873 19.0387 43.0825 16.916 48.4541 16.5439L48.4539 16.5438ZM24.1983 31.75C25.8544 33.1957 27.4662 34.615 29.012 35.9875L16.7009 48.2989L24.203 55.8015L33.5749 46.429L88.2388 101.092C44.5436 130.504 -11.1407 76.3314 24.1982 31.75H24.1983Z" fill="#FFD166"/>
</svg>
</div>
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
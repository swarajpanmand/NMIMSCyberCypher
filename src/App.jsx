import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import LearningModule from './components/LearningModule'
import AIChatAssistant from './components/AIChatAssistant'
import CommunityDiscussion from './components/CommunityDiscussion'
import Wellness from './components/Wellness'
import Profile from './components/Profile'
import Settings from './components/Settings'
import './styles/Dashboard.css'
import './styles/LearningModule.css'
import './styles/AIChatAssistant.css'
import './styles/CommunityDiscussion.css'
import './styles/Wellness.css'
import './styles/Profile.css'
import './styles/Settings.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [currentStreak, setCurrentStreak] = useState(0)
  const [showBreakReminder, setShowBreakReminder] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pages = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'learning', name: 'Learn', icon: '📚' },
    { id: 'ai-chat', name: 'AI Help', icon: '🤖' },
    { id: 'community', name: 'Community', icon: '👥' },
    { id: 'wellness', name: 'Wellness', icon: '🌿' },
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ]

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'learning':
        return <LearningModule />
      case 'ai-chat':
        return <AIChatAssistant />
      case 'community':
        return <CommunityDiscussion />
      case 'wellness':
        return <Wellness />
      case 'profile':
        return <Profile />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <div className="nav-links">
          {pages.map(page => (
            <button
              key={page.id}
              onClick={() => {
                setCurrentPage(page.id)
                setIsMenuOpen(false)
              }}
              className={`nav-link ${currentPage === page.id ? 'active' : ''}`}
              aria-label={page.name}
            >
              <span className="nav-icon">{page.icon}</span>
              <span className="nav-text">{page.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <header className="app-header">
          <h1>CodeQuest: Adaptive Learning</h1>
          <div className="user-stats">
            <span>🔥 Current Streak: {currentStreak} days</span>
            <span>⭐ Points: 0</span>
          </div>
        </header>

        <div className="page-content">
          {renderPage()}
        </div>

        {showBreakReminder && (
          <div className="break-reminder">
            Time for a quick break! Stand up, stretch, or grab some water. 🌿
          </div>
        )}
      </main>
    </div>
  )
}

export default App

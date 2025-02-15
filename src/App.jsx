import { useState } from 'react'
import { FaFire } from 'react-icons/fa'
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
import Navbar from './components/Navbar'
import './styles/Navbar.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MiniTimer from './components/MiniTimer'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [currentStreak, setCurrentStreak] = useState(7)
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
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <div className="app-container">
            <header className="app-header">
              <div className="header-content">
                <h1>CodeQuest</h1>
                <Navbar 
                  currentPage={currentPage} 
                  setCurrentPage={setCurrentPage} 
                  currentStreak={currentStreak}
                />
                <div className="streak-counter">
                  <FaFire className="streak-icon" />
                  <span>{currentStreak}</span>
                </div>
              </div>
            </header>
            
            <div className="main-content">
            {/* <MiniTimer /> */}
              <div className="page-content">
                {renderPage()}
              </div>

              {showBreakReminder && (
                <div className="break-reminder">
                  Time for a quick break! Stand up, stretch, or grab some water. 🌿
                </div>
              )}
            </div>
          </div>
        </main>
        
      </div>
    </Router>
  )
}

export default App

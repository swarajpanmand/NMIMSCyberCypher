import { useState, useEffect } from 'react'

const Wellness = () => {
  const [activeTab, setActiveTab] = useState('focus')
  const [breakTimer, setBreakTimer] = useState(25 * 60) // 25 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [showBreakAlert, setShowBreakAlert] = useState(false)
  const [dailyTip, setDailyTip] = useState('')

  const wellnessTips = {
    focus: [
      {
        title: "Minimize Digital Distractions",
        tips: [
          "Use website blockers during study sessions",
          "Keep phone in another room while coding",
          "Enable 'Do Not Disturb' mode",
          "Take regular screen breaks (20-20-20 rule)"
        ]
      },
      {
        title: "Optimize Your Environment",
        tips: [
          "Find your ideal noise level (silence/music/white noise)",
          "Ensure proper lighting and ergonomic setup",
          "Keep your workspace clean and organized",
          "Use noise-cancelling headphones if needed"
        ]
      }
    ],
    sleep: [
      {
        title: "Better Sleep Habits",
        tips: [
          "Avoid screens 1 hour before bedtime",
          "Maintain a consistent sleep schedule",
          "Create a relaxing bedtime routine",
          "Keep your bedroom cool and dark"
        ]
      },
      {
        title: "Screen Time Management",
        tips: [
          "Use blue light filters in the evening",
          "Take regular breaks from screens",
          "Practice the 20-20-20 rule",
          "Adjust screen brightness based on time of day"
        ]
      }
    ],
    mindfulness: [
      {
        title: "Quick Mindfulness Exercises",
        tips: [
          "Take 3 deep breaths before starting a new task",
          "Practice body scanning during breaks",
          "Use grounding techniques when overwhelmed",
          "Set mindful reminders throughout the day"
        ]
      }
    ]
  }

  const motivationalQuotes = [
    "Every expert was once a beginner. 🌱",
    "Progress over perfection. 🎯",
    "Small steps lead to big changes. ✨",
    "Your neurodiversity is your superpower. 🦸‍♂️",
    "Take breaks to go faster. 🌿"
  ]

  useEffect(() => {
    // Set daily tip
    const randomTip = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setDailyTip(randomTip)

    // Timer countdown
    let interval
    if (isTimerRunning && breakTimer > 0) {
      interval = setInterval(() => {
        setBreakTimer((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false)
            setShowBreakAlert(true)
            return 25 * 60
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isTimerRunning, breakTimer])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="wellness-page">
      {/* Daily Motivation Banner */}
      <div className="motivation-banner">
        <h2>Today's Inspiration</h2>
        <p className="daily-quote">{dailyTip}</p>
      </div>

      {/* Break Timer */}
      <div className="break-timer">
        <h3>Focus Timer</h3>
        <div className="timer-display">
          {formatTime(breakTimer)}
        </div>
        <div className="timer-controls">
          <button 
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`timer-btn ${isTimerRunning ? 'pause' : 'start'}`}
          >
            {isTimerRunning ? 'Pause' : 'Start'} Focus Session
          </button>
          <button 
            onClick={() => {
              setBreakTimer(25 * 60)
              setIsTimerRunning(false)
            }}
            className="timer-btn reset"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Wellness Tabs */}
      <div className="wellness-tabs">
        <button 
          className={`tab-btn ${activeTab === 'focus' ? 'active' : ''}`}
          onClick={() => setActiveTab('focus')}
        >
          Focus Tips 🎯
        </button>
        <button 
          className={`tab-btn ${activeTab === 'sleep' ? 'active' : ''}`}
          onClick={() => setActiveTab('sleep')}
        >
          Sleep Habits 😴
        </button>
        <button 
          className={`tab-btn ${activeTab === 'mindfulness' ? 'active' : ''}`}
          onClick={() => setActiveTab('mindfulness')}
        >
          Mindfulness 🧘‍♂️
        </button>
      </div>

      {/* Tips Content */}
      <div className="tips-content">
        {wellnessTips[activeTab].map((section, index) => (
          <div key={index} className="tip-section">
            <h3>{section.title}</h3>
            <ul>
              {section.tips.map((tip, tipIndex) => (
                <li key={tipIndex}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Break Alert Modal */}
      {showBreakAlert && (
        <div className="break-alert-modal">
          <div className="modal-content">
            <h3>Time for a Break! 🌿</h3>
            <p>Great work! Take a moment to:</p>
            <ul>
              <li>Stand up and stretch</li>
              <li>Rest your eyes</li>
              <li>Take deep breaths</li>
              <li>Grab some water</li>
            </ul>
            <button 
              onClick={() => setShowBreakAlert(false)}
              className="close-btn"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wellness 
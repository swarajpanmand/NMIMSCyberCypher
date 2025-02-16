import { useState, useEffect } from 'react'
import { 
  FaQuoteLeft, 
  FaHeart, 
  FaBookmark, 
  FaShare,
  FaLightbulb,
  FaStar,
  FaUserAstronaut,
  FaPalette,
  FaMicrophone,
  FaChessKnight,
  FaClock,
  FaUserCircle,
  FaUserAlt,
  FaUserNinja,
  FaUserSecret,
  FaUserTie,
  FaUserMd,
  FaUserGraduate,
  FaUserCog
} from 'react-icons/fa';
import FocusTimer from './FocusTimer';

const Wellness = () => {
  const [activeTab, setActiveTab] = useState('focus')
  const [breakTimer, setBreakTimer] = useState(25 * 60) // 25 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [showBreakAlert, setShowBreakAlert] = useState(false)
  const [dailyTip, setDailyTip] = useState('')
  const [activeCategory, setActiveCategory] = useState('all');

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

  const inspirations = [
    {
      id: 1,
      category: 'famous',
      name: "Michael Phelps",
      achievement: "Olympic Swimmer",
      quote: "ADHD can be a great gift. It's something that I've learned to live with and turn into a strength.",
      avatar: <FaUserGraduate className="avatar-icon" />,
      icon: <FaUserAstronaut />,
      tips: ["Found focus in swimming", "Structured routine", "Channeled energy into sport"]
    },
    {
      id: 2,
      category: 'artist',
      name: "Emma Watson",
      achievement: "Actress & Activist",
      quote: "I've learned that my ADHD doesn't define me. It's just part of who I am.",
      avatar: <FaUserSecret className="avatar-icon" />,
      icon: <FaPalette />,
      tips: ["Uses creative outlets", "Embraces uniqueness", "Practices mindfulness"]
    },
    {
      id: 3,
      category: 'entrepreneur',
      name: "Richard Branson",
      achievement: "Virgin Group Founder",
      quote: "ADHD can be a superpower if you learn how to harness it.",
      avatar: <FaUserTie className="avatar-icon" />,
      icon: <FaLightbulb />,
      tips: ["Lists and delegation", "Focuses on strengths", "Embraces different thinking"]
    }
  ];

  const dailyWins = [
    {
      title: "Small Steps Matter",
      description: "Celebrated completing my morning routine without getting distracted!",
      stars: 3
    },
    {
      title: "Focus Victory",
      description: "Finished a task in one sitting using the Pomodoro technique.",
      stars: 4
    }
  ];

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

  // Add an array of available avatars
  const avatarOptions = [
    {
      icon: FaUserNinja,
      label: 'Ninja'
    },
    {
      icon: FaUserAstronaut,
      label: 'Astronaut'
    },
    {
      icon: FaUserSecret,
      label: 'Secret Agent'
    },
    {
      icon: FaUserTie,
      label: 'Professional'
    },
    {
      icon: FaUserMd,
      label: 'Doctor'
    },
    {
      icon: FaUserGraduate,
      label: 'Graduate'
    },
    {
      icon: FaUserCog,
      label: 'Engineer'
    },
    {
      icon: FaUserAlt,
      label: 'Classic'
    },
    {
      icon: FaUserCircle,
      label: 'Circle'
    }
  ];

  // Update the profile section to use the new avatars
  const ProfileAvatar = ({ icon: Icon, selected, onClick }) => (
    <div 
      className={`profile-avatar ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <Icon />
    </div>
  );

  return (
    <div className="wellness-container">
      <div className="wellness-grid">
        {/* Left Column: Inspiration Stories */}
        <div className="wellness-section inspiration-section">
          <div className="section-header">
            <h2>ADHD Success Stories</h2>
            <div className="category-filters">
              <button 
                className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Stories
              </button>
              <button 
                className={`category-btn ${activeCategory === 'famous' ? 'active' : ''}`}
                onClick={() => setActiveCategory('famous')}
              >
                Famous People
              </button>
              <button 
                className={`category-btn ${activeCategory === 'community' ? 'active' : ''}`}
                onClick={() => setActiveCategory('community')}
              >
                Community Heroes
              </button>
            </div>
          </div>

          <div className="inspiration-cards">
            {inspirations.map(inspiration => (
              <div key={inspiration.id} className="inspiration-card">
                <div className="card-header">
                  {inspiration.avatar}
                  <h3>{inspiration.name}</h3>
                  <p className="achievement">{inspiration.achievement}</p>
                </div>
                
                <div className="quote-section">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="quote-text">{inspiration.quote}</p>
                </div>

                <div className="tips-section">
                  <h4>Success Strategies:</h4>
                  <ul>
                    {inspiration.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-actions">
                  <button className="action-btn">
                    <FaHeart /> Inspire
                  </button>
                  <button className="action-btn">
                    <FaBookmark /> Save
                  </button>
                  <button className="action-btn">
                    <FaShare /> Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Focus Timer and Daily Wins */}
        <div className="wellness-sidebar">
          <div className="wellness-section timer-section">
            <FocusTimer />
          </div>
          
          {/* Daily Wins Section */}
          {/* <div className="wellness-section wins-section">
            <h3>Today's Wins 🎉</h3>
            <div className="wins-list">
              {dailyWins.map((win, index) => (
                <div key={index} className="win-card">
                  <h4>{win.title}</h4>
                  <p>{win.description}</p>
                  <div className="stars">
                    {[...Array(win.stars)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="share-win-btn">Share Your Win</button>
          </div> */}

          {/* Quick Tips Section */}
          <div className="wellness-section tips-section">
            <h3>Quick ADHD Tips</h3>
            <div className="tips-list">
              <div className="tip-card">
                <FaLightbulb className="tip-icon" />
                <h4>Body Doubling</h4>
                <p>Work alongside someone to stay focused</p>
              </div>
              <div className="tip-card">
                <FaClock className="tip-icon" />
                <h4>Time Blocking</h4>
                <p>Break your day into manageable chunks</p>
              </div>
              <div className="tip-card">
                <FaHeart className="tip-icon" />
                <h4>Self-Compassion</h4>
                <p>Be kind to yourself, progress over perfection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wellness-page">
        {/* Daily Motivation Banner */}
        <div className="motivation-banner">
          <h2>Today's Inspiration</h2>
          <p className="daily-quote">{dailyTip}</p>
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
    </div>
  )
}

export default Wellness 
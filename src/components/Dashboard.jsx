import { useState } from 'react'
import { 
  FaBookOpen, 
  FaLock, 
  FaCheckCircle, 
  FaRocket,
  FaCode,
  FaBrain,
  FaLightbulb,
  FaPuzzlePiece,
  FaTools,
  FaGraduationCap,
  FaFile,
  FaEnvelope,
  FaHourglassHalf,
  FaCheck,
  FaDownload,
  FaClock,
  FaStar,
  FaTrophy,
  FaMedal,
  FaGem,
  FaCrown,
  FaBolt,
  FaStopwatch,
  FaUnlock,
  FaAward,
  FaCertificate,
  FaFire
} from 'react-icons/fa'

const VideoNode = ({ id, title, completed, current, locked, progress, number, xp, duration, difficulty, skills, requiredLevel }) => {
  const getIcon = () => {
    const icons = {
      file: <FaFile />,
      download: <FaDownload />,
      email: <FaEnvelope />,
      timer: <FaHourglassHalf />,
      check: <FaCheck />,
      clock: <FaClock />,
      star: <FaStar />,
      trophy: <FaTrophy />,
      medal: <FaMedal />,
      gem: <FaGem />,
      crown: <FaCrown />
    };

    if (locked) return <FaLock />;
    if (completed) return <FaCheckCircle />;
    if (current) return <FaRocket />;
    return icons[title.toLowerCase()] || icons.star;
  };

  const getNodeClass = () => {
    let classes = 'video-node';
    if (completed) classes += ' completed';
    if (current) classes += ' current';
    if (locked) classes += ' locked';
    return classes;
  };

  const getStatusText = () => {
    if (locked) return "Locked";
    if (completed) return "Completed";
    if (current) return "In Progress";
    return "Coming Soon";
  };

  const getDifficultyClass = () => {
    const classes = {
      easy: 'difficulty-easy',
      medium: 'difficulty-medium',
      hard: 'difficulty-hard'
    };
    return classes[difficulty] || classes.medium;
  };

  const formatDuration = (mins) => {
    return mins < 60 ? `${mins}m` : `${Math.floor(mins/60)}h ${mins%60}m`;
  };

  return (
    <div className={`video-node ${completed ? 'completed' : ''} 
                               ${current ? 'current' : ''} 
                               ${locked ? 'locked' : ''}`}>
      <div className="node-attributes">
        <span className="attribute">
          <FaBolt className="attribute-icon" />
          {xp} XP
        </span>
        <span className="attribute">
          <FaStopwatch className="attribute-icon" />
          {formatDuration(duration)}
        </span>
        <span className="attribute">
          <FaBrain className="attribute-icon" />
          {skills}
        </span>
      </div>
      
      <div className={`difficulty-badge ${getDifficultyClass()}`}>
        {difficulty === 'easy' ? 'E' : difficulty === 'medium' ? 'M' : 'H'}
      </div>

      <div className="node-icon" data-tooltip={title}>
        {getIcon()}
      </div>
      <div className="node-number">{number}</div>
      
      {progress > 0 && (
        <div className="node-progress">
          {progress}%
        </div>
      )}
      
      {locked && (
        <div className="locked-info">
          <FaUnlock /> Requires Level {requiredLevel}
        </div>
      )}
    </div>
  );
};

const AchievementProgress = ({ title, current, total, icon: Icon, color }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="achievement-item">
      <div className="achievement-header">
        <div className="achievement-icon" style={{ color }}>
          <Icon />
        </div>
        <div className="achievement-info">
          <h4>{title}</h4>
          <span>{current}/{total}</span>
        </div>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ 
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`
          }} 
        />
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeMode, setActiveMode] = useState('focus') // focus, checklist

  const videoNodes = [
    { id: 1, title: 'star', number: '354', completed: true, progress: 100, xp: 100, duration: 30, difficulty: 'easy', skills: 'Basics', requiredLevel: 1 },
    { id: 2, title: 'trophy', number: '355', completed: true, progress: 100, xp: 150, duration: 45, difficulty: 'medium', skills: 'Logic', requiredLevel: 2 },
    { id: 3, title: 'medal', number: '356', completed: true, progress: 100, xp: 200, duration: 60, difficulty: 'medium', skills: 'Problem Solving', requiredLevel: 2 },
    { id: 4, title: 'gem', number: '357', current: true, progress: 45, xp: 300, duration: 90, difficulty: 'hard', skills: 'Advanced', requiredLevel: 3 },
    { id: 5, title: 'crown', number: '358', locked: true, xp: 400, duration: 120, difficulty: 'hard', skills: 'Expert', requiredLevel: 4 },
    { id: 6, title: 'download', number: '359', locked: true },
    { id: 7, title: 'file', number: '360', locked: true },
    { id: 8, title: 'check', number: '353', locked: true },
    { id: 9, title: 'email', number: '352', locked: true },
    { id: 10, title: 'download', number: '351', locked: true },
    { id: 11, title: 'file', number: '350', locked: true },
    { id: 12, title: 'file', number: '349', locked: true },
    { id: 13, title: 'check', number: '348', locked: true },
    { id: 14, title: 'email', number: '347', locked: true },
    { id: 15, title: 'download', number: '346', locked: true },
    { id: 16, title: 'timer', number: '345', locked: true },
    { id: 17, title: 'check', number: '344', locked: true },
    { id: 18, title: 'file', number: '343', locked: true },
  ];

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first coding challenge",
      progress: 100,
      icon: <FaTrophy />,
      completed: true,
      color: "#FFD700",
      position: 'left'
    },
    {
      id: 2,
      title: "Quick Learner",
      description: "Complete 5 challenges in one day",
      progress: 60,
      icon: <FaStar />,
      completed: false,
      color: "#3498db",
      position: 'right'
    },
    {
      id: 3,
      title: "Problem Solver",
      description: "Solve a medium difficulty challenge",
      progress: 30,
      icon: <FaMedal />,
      completed: false,
      color: "#2ecc71",
      position: 'left'
    },
    {
      id: 4,
      title: "Code Master",
      description: "Complete all basic challenges",
      progress: 0,
      icon: <FaCrown />,
      completed: false,
      color: "#9b59b6",
      locked: true,
      position: 'right'
    },
    {
      id: 5,
      title: "Algorithm Ace",
      description: "Solve an advanced algorithm",
      progress: 0,
      icon: <FaGem />,
      completed: false,
      color: "#e74c3c",
      locked: true,
      position: 'left'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {/* Left Sidebar - Progress & Achievements */}
        <aside className="progress-sidebar">
          <div className="profile-summary">
            <div className="avatar-container">
              <div className="avatar">
                <FaBookOpen />
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
          <div className="achievements-section">
            <h2>Achievement Roadmap</h2>
            <div className="achievements-roadmap">
              <div className="rope-path"></div>
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.id} 
                  className={`achievement-item ${achievement.locked ? 'locked' : ''} 
                             ${achievement.completed ? 'completed' : ''} 
                             ${achievement.position}`}
                >
                  <div className="roadmap-marker"></div>
                  <div className="achievement-header">
                    <div 
                      className="achievement-icon"
                      style={{ 
                        backgroundColor: `${achievement.color}20`,
                        color: achievement.color 
                      }}
                    >
                      {achievement.locked ? <FaLock /> : achievement.icon}
                    </div>
                    <div className="achievement-info">
                      <h4>{achievement.title}</h4>
                      <span>{achievement.description}</span>
                    </div>
                    {achievement.completed && (
                      <div className="completion-badge">
                        <FaCheck />
                      </div>
                    )}
                  </div>
                  <div className="progress-container">
                    <div 
                      className="progress-bar"
                      style={{ 
                        width: `${achievement.progress}%`,
                        backgroundColor: achievement.color 
                      }}
                    />
                    <span className="progress-text">{achievement.progress}%</span>
                  </div>
                </div>
              ))}
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

          <div className="learning-roadmap">
            <h2>The Candy Wall</h2>
            <div className="roadmap-path">
              <div className="path-line"></div>
              {videoNodes.map((node) => (
                <VideoNode key={node.id} {...node} />
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
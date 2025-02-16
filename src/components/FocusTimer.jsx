import { useState, useEffect } from 'react';
import { 
  FaClock, 
  FaPlay, 
  FaPause, 
  FaRedo, 
  FaCheck,
  FaMusic,
  FaVolumeMute,
  FaCog,
  FaLeaf
} from 'react-icons/fa';
import { GiWaterDrop, GiCoffeeCup, GiBrain } from 'react-icons/gi';

function FocusTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [breakTime, setBreakTime] = useState(5);
  const [soundOn, setSoundOn] = useState(true);
  const [currentMode, setCurrentMode] = useState('focus'); // focus, break, longBreak

  const presetTimes = [
    { label: 'Quick Focus', time: 15 },
    { label: 'Standard', time: 25 },
    { label: 'Extended', time: 45 }
  ];

  const reminders = [
    { icon: <GiWaterDrop />, text: "Drink water" },
    { icon: <GiCoffeeCup />, text: "Take a break" },
    { icon: <FaLeaf />, text: "Deep breath" },
    { icon: <GiBrain />, text: "Stretch" }
  ];

  // Timer logic and handlers here...

  return (
    <div className="focus-timer-container">
      <div className="timer-section">
        <div className="timer-header">
          <h2>Focus Timer</h2>
          <div className="timer-controls">
            <button 
              className={`sound-toggle ${soundOn ? 'active' : ''}`}
              onClick={() => setSoundOn(!soundOn)}
            >
              {soundOn ? <FaMusic /> : <FaVolumeMute />}
            </button>
            <button 
              className="settings-btn"
              onClick={() => setShowSettings(!showSettings)}
            >
              <FaCog />
            </button>
          </div>
        </div>

        <div className="timer-display">
          <div className="time-circle">
            <div className="time-text">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <div className="mode-label">{currentMode} mode</div>
          </div>
        </div>

        <div className="timer-actions">
          <button 
            className="timer-btn"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? <FaPause /> : <FaPlay />}
          </button>
          <button 
            className="timer-btn"
            onClick={() => {/* reset logic */}}
          >
            <FaRedo />
          </button>
        </div>

        {/* <div className="preset-times">
          {presetTimes.map((preset, index) => (
            <button 
              key={index}
              className={`preset-btn ${minutes === preset.time ? 'active' : ''}`}
              onClick={() => setMinutes(preset.time)}
            >
              {preset.label}
            </button>
          ))}
        </div> */}
      </div>

      <div className="focus-aids">
        <div className="reminders">
          <h3>Quick Reminders</h3>
          <div className="reminder-grid">
            {reminders.map((reminder, index) => (
              <div key={index} className="reminder-card">
                {reminder.icon}
                <span>{reminder.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="focus-tracker">
          <h3>Today's Focus Sessions</h3>
          <div className="session-bubbles">
            {[...Array(5)].map((_, index) => (
              <div 
                key={index} 
                className={`session-bubble ${index < 3 ? 'completed' : ''}`}
              >
                <FaCheck />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="timer-settings">
          <h3>Timer Settings</h3>
          <div className="settings-grid">
            <div className="setting-item">
              <label>Focus Duration</label>
              <input 
                type="range" 
                min="5" 
                max="60" 
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
              />
              <span>{minutes} min</span>
            </div>
            <div className="setting-item">
              <label>Break Duration</label>
              <input 
                type="range" 
                min="5" 
                max="15" 
                value={breakTime}
                onChange={(e) => setBreakTime(Number(e.target.value))}
              />
              <span>{breakTime} min</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FocusTimer; 
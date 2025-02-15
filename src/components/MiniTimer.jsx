import { useState } from 'react';
import { FaClock, FaPlay, FaPause, FaTimes } from 'react-icons/fa';

function MiniTimer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`mini-timer ${isExpanded ? 'expanded' : ''}`}>
      {isExpanded ? (
        <div className="mini-timer-expanded">
          <div className="mini-timer-header">
            <FaClock />
            <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
            <button 
              className="close-btn"
              onClick={() => setIsExpanded(false)}
            >
              <FaTimes />
            </button>
          </div>
          <button 
            className="mini-timer-btn"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      ) : (
        <button 
          className="mini-timer-icon"
          onClick={() => setIsExpanded(true)}
        >
          <FaClock />
        </button>
      )}
    </div>
  );
}

export default MiniTimer; 
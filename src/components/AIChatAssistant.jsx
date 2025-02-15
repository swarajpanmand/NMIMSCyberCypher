import { useState, useRef, useEffect } from 'react'

const AIChatAssistant = () => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hi! I'm your coding assistant. I can help you understand concepts and provide hints without giving away solutions. How can I help you today?",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [responseSpeed, setResponseSpeed] = useState('normal')
  const chatEndRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    // Add user message
    const newMessages = [...messages, {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }]
    setMessages(newMessages)
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      setMessages([...newMessages, {
        type: 'ai',
        content: generateHint(inputMessage),
        timestamp: new Date()
      }])
    }, responseSpeed === 'slow' ? 2000 : 1000)
  }

  const generateHint = (question) => {
    // This is a mock hint generation - in reality, this would call your AI service
    if (question.toLowerCase().includes('array')) {
      return "When working with arrays, consider these approaches:\n1. Can you solve this by iterating through the array?\n2. Would sorting help?\n3. Could a hash map make this more efficient?"
    }
    return "Let's break this down step by step. What specific part are you stuck on?"
  }

  const toggleVoiceInput = () => {
    setIsRecording(!isRecording)
    // Voice recognition implementation would go here
  }

  return (
    <div className="ai-chat-assistant">
      {/* Settings Panel */}
      <div className="chat-settings">
        <h3>Accessibility Settings</h3>
        <div className="settings-controls">
          <div className="setting-item">
            <label>Response Speed:</label>
            <select 
              value={responseSpeed}
              onChange={(e) => setResponseSpeed(e.target.value)}
            >
              <option value="fast">Fast</option>
              <option value="normal">Normal</option>
              <option value="slow">Slow</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Voice Input:</label>
            <button 
              className={`voice-btn ${isRecording ? 'recording' : ''}`}
              onClick={toggleVoiceInput}
            >
              {isRecording ? '🔴 Recording...' : '🎤 Start Voice Input'}
            </button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.type}`}
          >
            <div className="message-content">
              {message.type === 'ai' && <span className="ai-icon">🤖</span>}
              <p>{message.content}</p>
            </div>
            <span className="timestamp">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="chat-input">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Describe what you're stuck on..."
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSendMessage()
            }
          }}
        />
        <div className="input-buttons">
          <button 
            className="send-btn"
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
          >
            Send
          </button>
          <button 
            className="clear-btn"
            onClick={() => setMessages([messages[0]])}
          >
            Clear Chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default AIChatAssistant 
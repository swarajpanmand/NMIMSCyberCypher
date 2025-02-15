import { useState } from 'react'

const LearningModule = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [userCode, setUserCode] = useState('')
  const [aiHelp, setAiHelp] = useState('')
  const [difficulty, setDifficulty] = useState('medium')

  const mockProblem = {
    title: "Array Sum Finder",
    difficulty: "medium",
    description: "Write a function that finds two numbers in an array that add up to a target sum.",
    examples: [
      { input: "[2, 7, 11, 15], target = 9", output: "[0, 1]" },
      { input: "[3, 2, 4], target = 6", output: "[1, 2]" }
    ],
    hints: [
      "Consider using a hash map to store values you've seen",
      "Think about the complement of each number",
      "Try solving with O(n) time complexity"
    ]
  }

  const handleAskAI = () => {
    setAiHelp("Consider using a hash map to store each number as you iterate. For each number, check if its complement (target - current number) exists in the hash map.")
  }

  return (
    <div className="learning-module">
      {/* Problem Header */}
      <div className="problem-header">
        <h2>{mockProblem.title}</h2>
        <div className="difficulty-badge" data-difficulty={difficulty}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </div>
      </div>

      {/* Learning Resources */}
      <div className="learning-resources">
        <div className="resource-tabs">
          <button className="tab active">Problem</button>
          <button className="tab">Visual Aid</button>
          <button className="tab">Audio</button>
        </div>

        {/* Problem Description */}
        <div className="problem-description">
          <p>{mockProblem.description}</p>
          
          <div className="examples">
            <h3>Examples:</h3>
            {mockProblem.examples.map((example, index) => (
              <div key={index} className="example-card">
                <div>Input: {example.input}</div>
                <div>Output: {example.output}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Coding Area */}
      <div className="coding-area">
        <div className="editor-container">
          <div className="editor-header">
            <span>JavaScript</span>
            <button onClick={() => setShowHint(!showHint)} className="hint-btn">
              💡 Get Hint
            </button>
          </div>
          <textarea
            className="code-editor"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Write your solution here..."
          />
        </div>

        {/* Hint Panel */}
        {showHint && (
          <div className="hint-panel">
            <h4>Hints:</h4>
            <ul>
              {mockProblem.hints.map((hint, index) => (
                <li key={index}>{hint}</li>
              ))}
            </ul>
          </div>
        )}

        {/* AI Assistant */}
        <div className="ai-assistant">
          <div className="ai-header">
            <h4>AI Assistant</h4>
            <button onClick={handleAskAI} className="ask-ai-btn">
              🤖 Ask for Help
            </button>
          </div>
          {aiHelp && (
            <div className="ai-response">
              <p>{aiHelp}</p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="run-tests-btn">▶️ Run Tests</button>
        <button className="submit-btn">✅ Submit Solution</button>
      </div>
    </div>
  )
}

export default LearningModule 
import { useState } from 'react'

const CommunityDiscussion = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'general' })
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data for discussions
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "How do you maintain focus during long coding sessions?",
      content: "I'm looking for strategies to stay focused while coding. What works for you?",
      author: "Anonymous Coder",
      category: "study-tips",
      likes: 15,
      replies: 3,
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 2,
      title: "Visual learning resources for algorithms?",
      content: "Can anyone recommend good visual resources for learning algorithms? I find diagrams really helpful!",
      author: "Visual Learner",
      category: "resources",
      likes: 8,
      replies: 5,
      timestamp: new Date(Date.now() - 7200000)
    }
  ])

  const categories = [
    { id: 'all', label: 'All Topics', icon: '📑' },
    { id: 'study-tips', label: 'Study Tips', icon: '💡' },
    { id: 'resources', label: 'Resources', icon: '📚' },
    { id: 'experiences', label: 'Experiences', icon: '🎯' },
    { id: 'general', label: 'General', icon: '💭' }
  ]

  const handleNewPost = (e) => {
    e.preventDefault()
    // Simple AI moderation simulation
    if (moderateContent(newPost.content)) {
      const post = {
        id: discussions.length + 1,
        ...newPost,
        author: "Anonymous User",
        likes: 0,
        replies: 0,
        timestamp: new Date()
      }
      setDiscussions([post, ...discussions])
      setShowNewPostForm(false)
      setNewPost({ title: '', content: '', category: 'general' })
    } else {
      alert("Please ensure your post follows community guidelines.")
    }
  }

  const moderateContent = (content) => {
    // Simple mock AI moderation
    const flaggedWords = ['solution', 'answer', 'solve']
    return !flaggedWords.some(word => content.toLowerCase().includes(word))
  }

  const filteredDiscussions = discussions.filter(discussion => 
    (activeCategory === 'all' || discussion.category === activeCategory) &&
    (discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     discussion.content.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="community-discussion">
      {/* Search and New Post */}
      <div className="community-header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button 
          className="new-post-btn"
          onClick={() => setShowNewPostForm(true)}
        >
          Start New Discussion
        </button>
      </div>

      {/* Categories */}
      <div className="categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>

      {/* New Post Form */}
      {showNewPostForm && (
        <div className="new-post-modal">
          <div className="modal-content">
            <h3>Start New Discussion</h3>
            <form onSubmit={handleNewPost}>
              <input
                type="text"
                placeholder="Discussion Title"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                required
              />
              <textarea
                placeholder="Share your thoughts... (Please avoid sharing direct solutions)"
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                required
              />
              <select
                value={newPost.category}
                onChange={(e) => setNewPost({...newPost, category: e.target.value})}
              >
                {categories.slice(1).map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
              <div className="form-buttons">
                <button type="submit">Post</button>
                <button type="button" onClick={() => setShowNewPostForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Discussions List */}
      <div className="discussions-list">
        {filteredDiscussions.map(discussion => (
          <div key={discussion.id} className="discussion-card">
            <div className="discussion-header">
              <h3>{discussion.title}</h3>
              <span className="category-tag">{categories.find(c => c.id === discussion.category)?.icon}</span>
            </div>
            <p className="discussion-content">{discussion.content}</p>
            <div className="discussion-footer">
              <span className="author">{discussion.author}</span>
              <span className="timestamp">
                {discussion.timestamp.toLocaleString()}
              </span>
              <div className="interactions">
                <button className="like-btn">
                  👍 {discussion.likes}
                </button>
                <span className="replies">
                  💬 {discussion.replies} replies
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommunityDiscussion 
import { useState } from 'react'
import { 
  FaUsers, 
  FaHeart, 
  FaComment, 
  FaShare, 
  FaUserCircle,
  FaSearch,
  FaFilter,
  FaTags,
  FaStar,
  FaBookmark
} from 'react-icons/fa';

const CommunityDiscussion = () => {
  const [activeFilter, setActiveFilter] = useState('all')
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
    (activeFilter === 'all' || discussion.category === activeFilter) &&
    (discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     discussion.content.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="community-container">
      <div className="community-header">
        <h2><FaUsers className="header-icon" /> ADHD Learning Community</h2>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="filters-section">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          <FaFilter /> All Posts
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'popular' ? 'active' : ''}`}
          onClick={() => setActiveFilter('popular')}
        >
          <FaStar /> Popular
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveFilter('saved')}
        >
          <FaBookmark /> Saved
        </button>
      </div>

      <div className="posts-container">
        {filteredDiscussions.map(discussion => (
          <div key={discussion.id} className="post-card">
            <div className="post-header">
              <div className="post-author">
                <div className="author-avatar">{discussion.author.substring(0, 2)}</div>
                <span className="author-name">{discussion.author}</span>
              </div>
              <button className="bookmark-btn">
                <FaBookmark />
              </button>
            </div>

            <h3 className="post-title">{discussion.title}</h3>
            <p className="post-content">{discussion.content}</p>

            <div className="post-tags">
              <FaTags className="tags-icon" />
              <span className="tag">{categories.find(c => c.id === discussion.category)?.label}</span>
            </div>

            <div className="post-actions">
              <button className="action-btn">
                <FaHeart className="action-icon" />
                <span>{discussion.likes}</span>
              </button>
              <button className="action-btn">
                <FaComment className="action-icon" />
                <span>{discussion.replies} replies</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="create-post-btn"
        onClick={() => setShowNewPostForm(true)}
      >
        <span>Start a Discussion</span>
      </button>

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
    </div>
  )
}

export default CommunityDiscussion 
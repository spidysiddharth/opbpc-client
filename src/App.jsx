import React from 'react'
import './App.css'

function App() {
  const [email, setEmail] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Coming Soon</h1>
        <p className="subtitle">We're working hard to bring you something amazing</p>
        
        <div className="features">
          <div className="feature-item">
            <span className="icon">⚡</span>
            <p>Lightning Fast</p>
          </div>
          <div className="feature-item">
            <span className="icon">🔒</span>
            <p>Secure</p>
          </div>
          <div className="feature-item">
            <span className="icon">✨</span>
            <p>Modern</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Notify Me</button>
        </form>

        {submitted && (
          <p className="success-message">✓ Thanks! We'll be in touch soon.</p>
        )}
      </div>

      <footer className="footer">
        <p>&copy; 2026 OPBPC. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

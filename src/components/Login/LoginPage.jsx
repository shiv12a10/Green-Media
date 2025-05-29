import { useState } from 'react'
import './LoginPage.css'

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'SME'
  })

  const [error, setError] = useState('')

  const roles = ['Authorship', 'Publication', 'Team Leader', 'SME']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.role === 'Team Leader') {
      setError('This role is not allowed to login at this time.')
      return
    }
    setError('')
    onLogin(formData.role, formData.username) // Pass the username as email
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user changes role
    if (e.target.name === 'role') {
      setError('')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Article Authorship Portal</h1>
        <p className="login-subtitle">Login to manage your research authorship</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username/Email</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username or email"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Select Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="role-select"
            >
              {roles.map((role) => (
                <option 
                  key={role} 
                  value={role}
                  disabled={role === 'Team Leader'} // Only disable Team Leader role
                >
                  {role} {role === 'Team Leader' ? '(Disabled)' : ''}
                </option>
              ))}
            </select>
          </div>

          {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
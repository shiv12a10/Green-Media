import { useState } from 'react'
import './Dashboard.css'

const Dashboard = ({ userRole, onLogout }) => {
  const [userEmail, setUserEmail] = useState('shivanibrajesh222@gmail.com')
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [bookingForm, setBookingForm] = useState({
    authorName: '',
    designation: '',
    affiliation: '',
    paymentReceived: 0,
    paymentPending: 0
  })

  const handleBookingClick = (article, position) => {
    setSelectedPosition({
      article: article.name,
      position: position.number
    })
    setShowBookingForm(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    setShowBookingForm(false)
  }

  // Define the articles array based on the booked positions data
  const articles = [
    {
      id: 'A001',
      name: 'AI in Healthcare',
      journal: 'Nature',
      availablePositions: '5/7 Available',
      positions: [
        { number: 1, status: 'booked' },
        { number: 2, status: 'available' },
        { number: 3, status: 'available' },
        { number: 4, status: 'booked' },
        { number: 5, status: 'available' },
        { number: 6, status: 'available' },
        { number: 7, status: 'available' }
      ]
    },
    {
      id: 'A002',
      name: 'Quantum Computing Advances',
      journal: 'Science',
      availablePositions: '6/7 Available',
      positions: [
        { number: 1, status: 'available' },
        { number: 2, status: 'available' },
        { number: 3, status: 'booked' },
        { number: 4, status: 'available' },
        { number: 5, status: 'available' },
        { number: 6, status: 'available' },
        { number: 7, status: 'available' }
      ]
    },
    {
      id: 'A003',
      name: 'Climate Modeling',
      journal: 'PNAS',
      availablePositions: '5/7 Available',
      positions: [
        { number: 1, status: 'booked' },
        { number: 2, status: 'booked' },
        { number: 3, status: 'available' },
        { number: 4, status: 'available' },
        { number: 5, status: 'available' },
        { number: 6, status: 'available' },
        { number: 7, status: 'available' }
      ]
    }
  ]

  // Publication role data
  const publicationDetails = [
    {
      date: '2024-01-15',
      articleId: 'A001',
      DCDM: 'DM',
      acceptanceDate: '2024-01-10',
      common1: 'Data 1',
      common2: 'Data 2',
      contactNumber: '+1-234-567-8900',
      emailIds: ['email1@example.com', 'email2@example.com', 'email3@example.com', 'email4@example.com', 'email5@example.com'],
      otherEmailIds: ['other1@example.com', 'other2@example.com'],
      feeJournalName: 'Nature',
      university: 'MIT',
      articleTitle: 'AI in Healthcare',
    },
    {
      date: '2024-01-16',
      articleId: 'A002',
      DCDM: 'DC',
      acceptanceDate: '2024-01-11',
      common1: 'Data 1',
      common2: 'Data 2',
      contactNumber: '+1-234-567-8901',
      emailIds: ['email1@example.com', 'email2@example.com', 'email3@example.com', 'email4@example.com', 'email5@example.com'],
      otherEmailIds: ['other1@example.com', 'other2@example.com'],
      feeJournalName: 'Science',
      university: 'IBM',
      articleTitle: 'Quantum Computing Advances',
    },
    {
      date: '2024-01-17',
      articleId: 'A003',
      DCDM: 'DM',
      acceptanceDate: '2024-01-12',
      common1: 'Data 1',
      common2: 'Data 2',
      contactNumber: '+1-234-567-8902',
      emailIds: ['email1@example.com', 'email2@example.com', 'email3@example.com', 'email4@example.com', 'email5@example.com'],
      otherEmailIds: ['other1@example.com', 'other2@example.com'],
      feeJournalName: 'PNAS',
      university: 'NOAA',
      articleTitle: 'Climate Modeling',
    }
  ]

  const feeDetails = [
    {
      date: '2024-01-15',
      articleId: 'A001',
      paymentConfirmation: 'Confirmed',
      galleryProofSent: '2024-01-12',
      articleReceived: '2024-01-08',
      toAuthorDate: '2024-01-13',
      byAuthorDate: '2024-01-14',
      finalDate: '2024-01-20',
      comment: 'Processing complete',
      remainingFee: 200,
      feeForumFillDate: '2024-01-05',
      charges: 700,
      paymentMode: 'Bank Transfer',
      journalName: 'Nature',
      publicationLink: 'https://example.com/article/A001'
    },
    {
      date: '2024-01-16',
      articleId: 'A002',
      paymentConfirmation: 'Confirmed',
      galleryProofSent: '2024-01-13',
      articleReceived: '2024-01-09',
      toAuthorDate: '2024-01-14',
      byAuthorDate: '2024-01-15',
      finalDate: '2024-01-21',
      comment: 'Processing complete',
      remainingFee: 300,
      feeForumFillDate: '2024-01-06',
      charges: 1100,
      paymentMode: 'Bank Transfer',
      journalName: 'Science',
      publicationLink: 'https://example.com/article/A002'
    },
    {
      date: '2024-01-17',
      articleId: 'A003',
      paymentConfirmation: 'Confirmed',
      galleryProofSent: '2024-01-14',
      articleReceived: '2024-01-10',
      toAuthorDate: '2024-01-15',
      byAuthorDate: '2024-01-16',
      finalDate: '2024-01-22',
      comment: 'Processing complete',
      remainingFee: 250,
      feeForumFillDate: '2024-01-07',
      charges: 950,
      paymentMode: 'Bank Transfer',
      journalName: 'PNAS',
      publicationLink: 'https://example.com/article/A003'
    }
  ]

  const bookedPositions = [
    {
      article: 'AI in Healthcare',
      articleId: 'A001',
      journal: 'Nature',
      position: 1,
      author: 'Dr. Smith',
      designation: 'Professor',
      affiliation: 'MIT',
      payment: {
        received: 500,
        pending: 200,
        total: 700.00
      }
    },
    {
      article: 'AI in Healthcare',
      articleId: 'A001',
      journal: 'Nature',
      position: 4,
      author: 'Dr. Johnson',
      designation: 'Associate Professor',
      affiliation: 'Stanford',
      payment: {
        received: 600,
        pending: 150,
        total: 750.00
      }
    },
    {
      article: 'Quantum Computing Advances',
      articleId: 'A002',
      journal: 'Science',
      position: 3,
      author: 'Dr. Chen',
      designation: 'Research Scientist',
      affiliation: 'IBM',
      payment: {
        received: 800,
        pending: 300,
        total: 1100.00
      }
    },
    {
      article: 'Climate Modeling',
      articleId: 'A003',
      journal: 'PNAS',
      position: 1,
      author: 'Dr. Williams',
      designation: 'Senior Researcher',
      affiliation: 'NOAA',
      payment: {
        received: 700,
        pending: 250,
        total: 950.00
      }
    },
    {
      article: 'Climate Modeling',
      articleId: 'A003',
      journal: 'PNAS',
      position: 2,
      author: 'Dr. Brown',
      designation: 'Climatologist',
      affiliation: 'NASA',
      payment: {
        received: 650,
        pending: 200,
        total: 850.00
      }
    }
  ]

  // Update the table rendering section
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Article Authorship Portal</h1>
        <div className="user-info">
          <span>Welcome, {userEmail}</span>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </header>

      <main className="dashboard-content">
        {showBookingForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Book Authorship Position</h2>
              <div className="article-info">{selectedPosition?.article} - Position {selectedPosition?.position}</div>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Author Name</label>
                  <input
                    type="text"
                    name="authorName"
                    value={bookingForm.authorName}
                    onChange={handleInputChange}
                    placeholder="Enter author name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={bookingForm.designation}
                    onChange={handleInputChange}
                    placeholder="Enter designation"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Affiliation</label>
                  <input
                    type="text"
                    name="affiliation"
                    value={bookingForm.affiliation}
                    onChange={handleInputChange}
                    placeholder="Enter affiliation"
                    required
                  />
                </div>

                <div className="payment-row">
                  <div className="form-group">
                    <label>Payment Received</label>
                    <input
                      type="number"
                      name="paymentReceived"
                      value={bookingForm.paymentReceived}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Payment Pending</label>
                    <input
                      type="number"
                      name="paymentPending"
                      value={bookingForm.paymentPending}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>

                <div className="form-group total-section">
                  <label>Total Payment</label>
                  <div className="total-amount">
                    $0.00
                  </div>
                </div>

                <div className="button-row">
                  <button type="button" className="cancel-btn" onClick={() => setShowBookingForm(false)}>Cancel</button>
                  <button type="submit" className="submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {userRole === 'Publication' && (
          <>
            <div className="table-container">
              <h2>Publication Details</h2>
              <div className="table-responsive">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Article ID</th>
                      <th>Follow(DC/DM)</th>
                      <th>Acceptance Date</th>
                      <th>Common-1</th>
                      <th>Common-2</th>
                      <th>Contact Number</th>
                      <th>First 5 Email IDs</th>
                      <th>Other Email IDs</th>
                      <th>Fee Journal Name</th>
                      <th>University</th>
                      <th>Article Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publicationDetails.map((item, index) => (
                      <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.articleId}</td>
                        <td>{item.DCDM}</td>
                        <td>{item.acceptanceDate}</td>
                        <td>{item.common1}</td>
                        <td>{item.common2}</td>
                        <td>{item.contactNumber}</td>
                        <td>{item.emailIds.join(', ')}</td>
                        <td>{item.otherEmailIds.join(', ')}</td>
                        <td>{item.feeJournalName}</td>
                        <td>{item.university}</td>
                        <td>{item.articleTitle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="table-container">
              <h2>Fee Details</h2>
              <div className="table-responsive">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Article ID</th>
                      <th>Payment Confirmation</th>
                      <th>Gallery Proof/Sent Formatting</th>
                      <th>Article Received</th>
                      <th>To Author Date</th>
                      <th>By Author Date</th>
                      <th>Final Date</th>
                      <th>Comment</th>
                      <th>Remaining Fee</th>
                      <th>Fee Forum Fill Date</th>
                      <th>Charges</th>
                      <th>Payment Mode</th>
                      <th>Journal Name</th>
                      <th>Publication Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeDetails.map((item, index) => (
                      <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.articleId}</td>
                        <td>{item.paymentConfirmation}</td>
                        <td>{item.galleryProofSent}</td>
                        <td>{item.articleReceived}</td>
                        <td>{item.toAuthorDate}</td>
                        <td>{item.byAuthorDate}</td>
                        <td>{item.finalDate}</td>
                        <td>{item.comment}</td>
                        <td>₹{item.remainingFee}</td>
                        <td>{item.feeForumFillDate}</td>
                        <td>₹{item.charges}</td>
                        <td>{item.paymentMode}</td>
                        <td>{item.journalName}</td>
                        <td>
                          <a href={item.publicationLink} target="_blank" rel="noopener noreferrer">View</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {userRole !== 'Publication' && (
          <div className="table-container">
            <h2>Available Articles</h2>
            <p className="subtitle">Click on available positions to book authorship</p>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ARTICLE ID</th>
                    <th>ARTICLE NAME</th>
                    <th>TARGET JOURNAL</th>
                    <th>AVAILABLE POSITIONS</th>
                    <th>AUTHORSHIP POSITIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td>{article.id}</td>
                      <td>{article.name}</td>
                      <td>{article.journal}</td>
                      <td>
                        <span className="available-tag">{article.availablePositions}</span>
                      </td>
                      <td>
                        <div className="positions-grid">
                          {article.positions.map((pos, index) => (
                            <button
                              key={index}
                              className={`position-btn ${pos.status}`}
                              disabled={pos.status === 'booked'}
                              onClick={() => pos.status === 'available' && handleBookingClick(article, pos)}
                            >
                              {pos.status === 'booked' ? `Pos ${pos.number}: Booked` : `Position ${pos.number}`}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {userRole === 'SME' && (
          <div className="table-container">
            <h2>All Booked Positions (Team Leader View)</h2>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ARTICLE</th>
                    <th>POSITION</th>
                    <th>AUTHOR</th>
                    <th>DESIGNATION</th>
                    <th>AFFILIATION</th>
                    <th>PAYMENT</th>
                  </tr>
                </thead>
                <tbody>
                  {bookedPositions.map((position, index) => (
                    <tr key={index}>
                      <td>
                        <div>{position.article}</div>
                        <div className="article-id">{position.articleId} - {position.journal}</div>
                      </td>
                      <td>{position.position}</td>
                      <td>{position.author}</td>
                      <td>{position.designation}</td>
                      <td>{position.affiliation}</td>
                      <td>
                        <div>Received: ${position.payment.received}</div>
                        <div>Pending: ${position.payment.pending}</div>
                        <div className="total">Total: ${position.payment.total.toFixed(2)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard

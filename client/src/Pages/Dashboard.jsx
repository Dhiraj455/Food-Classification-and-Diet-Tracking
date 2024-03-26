import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div style={{display: "block"}}>
      Dashboard <br />
      <button onClick={() => navigate('/addfood')} style={{ padding: "10px" }}>
        Add Food</button> <br />
      <button onClick={() => navigate('/profile')} style={{ padding: "10px" }}>Profile</button> <br />
      <button onClick={() => navigate('/sessions')} style={{ padding: "10px" }}>Sessions</button>
    </div>
  )
}

import React from 'react'

export default function Signup() {
  return (
    <div>
        <h1>Signup</h1>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="email" placeholder="Email" />
            <input type="submit" value="Signup" />
        </form>
    </div>
  )
}

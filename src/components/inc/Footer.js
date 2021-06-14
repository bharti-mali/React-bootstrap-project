import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer className="bg-dark pb-3 pt-3 text-center text-light">
        <p>&copy; Design By <Link to="abc.com">abc.com</Link></p>
      </footer>
    
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='error-page'>
        <div className='center'>
            <Link to="/" className='btn-primary'>Chúc mừng sinh nhật</Link>
            <h1>Mi</h1>
        </div>
    </section>
  )
}

export default ErrorPage

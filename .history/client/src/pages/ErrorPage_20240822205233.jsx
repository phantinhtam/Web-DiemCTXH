import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='error-page'>
        <div className='center'>
            <Link to="/" className='btn-primary'>hChúc mừng sin</Link>
            <h1>Ga Vai Ca Lon</h1>
        </div>
    </section>
  )
}

export default ErrorPage

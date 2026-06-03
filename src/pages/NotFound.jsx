import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container min-h-screen flex items-center justify-center flex-col'>
      <h1 className='text-4xl'>404 - Page not found</h1>
      <div className='mt-4'>
        <Link to='/'>Back to Homepage</Link>
      </div>
    </div>
  )
}

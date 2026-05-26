import { useLocation } from 'react-router-dom'
export default function UserProfile() {
  const { state } = useLocation()
  console.log('USE LOC', useLocation())
  return <div className='container'>Benvenuto, {state.user.username}!</div>
}

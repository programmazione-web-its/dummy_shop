import { NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <nav>
      <ul className='flex gap-6 font-serif text-forest text-2xl'>
        <li>
          <NavLink to='/beauty'>Beauty</NavLink>
        </li>
        <li>
          <NavLink to='/fragrances'>Fragrances</NavLink>
        </li>
        <li>
          <NavLink to='/home-decorations'>Home decorations</NavLink>
        </li>
      </ul>
    </nav>
  )
}

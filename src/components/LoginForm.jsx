import { useNavigate } from 'react-router-dom'

import { useRef, useState } from 'react'

import Button from '../components/Button'

export default function LoginForm() {
  const navigate = useNavigate()

  const usernameRef = useRef()
  const passRef = useRef()

  const [error, setError] = useState(false)

  async function submitForm(e) {
    e.preventDefault()
    const username = usernameRef.current.value
    const password = passRef.current.value

    try {
      const res = await fetch('https://dummyjson.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username, // emilys
          password: password, //emilyspass
        }),
      })

      // if (!res.ok) {
      //   throw new Error('Something went wrong')
      // }

      const data = await res.json()
      navigate('/account/user-profile', { state: { userId: data.id } })
    } catch (error) {
      console.error(error.message)
      setError(true)
    }
  }

  return (
    <>
      <form
        onSubmit={submitForm}
        className='lg:w-1/4 bg-warm-white rounded-md m-auto flex flex-col gap-4 p-4'
      >
        <input
          ref={usernameRef}
          type='text'
          name='username'
          placeholder='username'
        />
        <input
          ref={passRef}
          type='password'
          name='password'
          placeholder='password'
        />
        <Button>Accedi</Button>
      </form>
      {error && (
        <p className='text-red-400 my-3'>Inserisci le credenziali corrette</p>
      )}
    </>
  )
}

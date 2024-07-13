'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { Button } from './ui/button';


const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user ? (
        <>
            <h1>Session exists</h1>
            <p>{JSON.stringify(session)}</p>
            <Button variant={'ghost'} onClick={()=>signOut()} className='rounded-xl bg-green-200 border-solid border-4 border-green-600 hover:bg-green-500'>Signout</Button>
        </>
      ) : (
        <>
            <h1>Session not exists</h1>
            <Button variant={'ghost'} className='bg-orange-300 rounded-xl hover:bg-orange-500' onClick={()=>signIn('google')}>Sign in with Google</Button>
            <Button variant={'ghost'} className='bg-orange-300 rounded-xl hover:bg-orange-500' onClick={()=>signIn('github')}>Sign in with Github</Button>
        </>
      )}
    </div>
  )
}

export default Dashboard
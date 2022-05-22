import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Auth } from '../components/Auth'
import { DashBoard } from '../components/DashBoard'
import { Layout } from '../components/Layout'
import useStore from '../store'
import { supabase } from '../utils/supabase'

const Home: NextPage = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])

  return (
    <Layout title="Dashboard">{!session ? <Auth /> : <DashBoard />}</Layout>
  )
}

export default Home

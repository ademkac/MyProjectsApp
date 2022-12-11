import React, { useEffect, useState } from 'react'
import PageLoading from '../../components/loading/PageLoading'
import HomePage from './Index'

const HomeRouter = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, [1500])
    }, [])
  return (
    <>
      {loading && <PageLoading />}
      {!loading && <HomePage />}
    </>
  )
}

export default HomeRouter

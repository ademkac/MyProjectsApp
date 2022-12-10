import React, { useEffect, useState } from 'react'
import PageLoading from '../../components/loading/PageLoading'

const HomeRouter = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, [1500])
    }, [])
  return (
    <div>
      {loading && <PageLoading />}
      <h1>Begining</h1>
    </div>
  )
}

export default HomeRouter

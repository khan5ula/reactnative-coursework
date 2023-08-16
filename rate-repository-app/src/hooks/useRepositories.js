import { useState, useEffect } from 'react'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const [loading, setLoading] = useState(false)

  const fetchRepositories = async () => {
    setLoading(true)

    try {
      const response = await fetch('http://192.168.1.101:5000/api/repositories')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const json = await response.json()
      setRepositories(json)
    } catch (error) {
      console.error('Error fetching repositories:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories

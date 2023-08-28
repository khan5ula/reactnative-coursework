import { useState } from 'react'
import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')

  return (
    <RepositoryListContainer
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
    />
  )
}

export default RepositoryList

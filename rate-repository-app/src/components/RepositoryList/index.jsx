import { useState } from 'react'
import RepositoryListContainer from './RepositoryListContainer'
import { useDebounce } from 'use-debounce'

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')
  const [searchKeyword, setSearchkeyword] = useState('')
  const [debouncedKeyword] = useDebounce(searchKeyword, 500)

  return (
    <RepositoryListContainer
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
      searchKeyword={searchKeyword}
      setSearchkeyword={setSearchkeyword}
      debouncedKeyword={debouncedKeyword}
    />
  )
}

export default RepositoryList

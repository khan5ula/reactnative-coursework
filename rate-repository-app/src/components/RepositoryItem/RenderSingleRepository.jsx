import { useParams } from 'react-router-native'
import RepositoryItem from '.'
import useRepository from '../../hooks/useRepository'

const RenderSingleRepository = () => {
  const { id } = useParams()
  console.log(`id: ${id}`)
  const { repository } = useRepository(id)

  console.log(`repository: ${JSON.stringify(repository)}`)

  return repository ? (
    <RepositoryItem item={repository} showUrl={true} />
  ) : (
    <></>
  )
}

export default RenderSingleRepository

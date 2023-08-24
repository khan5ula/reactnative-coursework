import { useParams } from 'react-router-native'
import RepositoryItem from '.'
import useRepository from '../../hooks/useRepository'

const RenderSingleRepository = () => {
  const { id } = useParams()
  const { repository } = useRepository(id)

  return repository ? (
    <RepositoryItem item={repository} showUrl={true} />
  ) : (
    <></>
  )
}

export default RenderSingleRepository

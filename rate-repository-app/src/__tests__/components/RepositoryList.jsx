import { render, screen, within } from '@testing-library/react-native'
import { RepositoryListContainer } from '../../components/RepositoryList'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      }

      render(<RepositoryListContainer repositories={repositories} />)
      const repositoryItems = screen.getAllByTestId('repositoryItem')
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems

      /* Check the first repository item */
      expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik')
      expect(firstRepositoryItem).toHaveTextContent(
        'Build forms in React, without the tears'
      )
      expect(firstRepositoryItem).toHaveTextContent('TypeScript')

      let forksCount = within(firstRepositoryItem).getByText('1.6k')
      let starGazersCount = within(firstRepositoryItem).getByText('21.9k')
      let rating = within(firstRepositoryItem).getByText('88')
      let reviews = within(firstRepositoryItem).getByText('3')
      expect(forksCount).toBeTruthy()
      expect(starGazersCount).toBeTruthy()
      expect(rating).toBeTruthy()
      expect(reviews).toBeTruthy()

      /* Check the second repository item */
      expect(secondRepositoryItem).toHaveTextContent(
        'async-library/react-async'
      )
      expect(secondRepositoryItem).toHaveTextContent(
        'Flexible promise-based React data loader'
      )
      expect(secondRepositoryItem).toHaveTextContent('JavaScript')

      forksCount = within(secondRepositoryItem).getByText('69')
      starGazersCount = within(secondRepositoryItem).getByText('1.8k')
      rating = within(secondRepositoryItem).getByText('69')
      reviews = within(secondRepositoryItem).getByText('3')
      expect(forksCount).toBeTruthy()
      expect(starGazersCount).toBeTruthy()
      expect(rating).toBeTruthy()
      expect(reviews).toBeTruthy()
    })
  })
})

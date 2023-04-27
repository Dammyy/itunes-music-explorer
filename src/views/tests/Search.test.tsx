import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import Search from '../Search/Search'

const mockData = [{
  artistName: 'Burna Boy',
  artworkUrl100: 'http://',
  trackName: 'on the low',
  collectionCensoredName: 'African Giant',
},{
  artistName: 'Davido',
  artworkUrl100: 'http://',
  trackName: 'A better Time',
  collectionCensoredName: 'A better Time',
}]

test('Renders with initial state', () => {
  const { getByText } = renderWithProviders(<Search />, {
    preloadedState: {
      search: {
        searchResult: mockData,
        isLoading: false,
        error: undefined
      }
    }
  })
  expect(screen.getByText(/Itunes Music Explorer/i)).toBeInTheDocument()
  expect(screen.getByText(/Burna Boy/i)).toBeInTheDocument()
  expect(screen.queryByText(/No Search Results/i)).not.toBeInTheDocument()
})

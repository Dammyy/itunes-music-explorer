import * as React from 'react'
import { render, screen } from '@testing-library/react'

import Card from '.'

describe('Card Component', () => {
  const data = {
    artistName: 'Rema',
    artworkUrl100: 'http://',
    trackName: 'Holiday',
    collectionCensoredName: 'Roses',
  }

  it('renders card component', () => {
    render(
      <Card
        img={data.artworkUrl100}
        artistName={data.artistName}
        trackName={data.trackName}
        albumName={data.collectionCensoredName}
      />
    )

    expect(screen.getByText('Album - Roses')).toBeInTheDocument()
  })
})

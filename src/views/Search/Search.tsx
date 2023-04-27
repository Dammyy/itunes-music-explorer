import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import InfiniteScroll from 'react-infinite-scroll-component'
import Button from '../Common/Button'
import DetailsCard from '../Common/Card'
import SearchInput from '../Common/Input'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { searchForQuery, SearchStateItem } from './searchSlice'
import { GridItem, CustomBox } from './styles'

const Search = () => {
  const dispatch = useAppDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const [searched, setSearched] = useState(false)
  const [noResults, setNoResults] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchStateItem[]>([])

  const searchState: SearchStateItem[] = useAppSelector(
    (state) => state.search.searchResult
  )
  const isLoading: boolean = useAppSelector((state) => state.search.isLoading)

  const disableSubmit = searchTerm.length < 3

  const onSubmitQuery = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!disableSubmit) {
      dispatch(searchForQuery(searchTerm))
    }
    setSearched(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (searchState.length < 1 && searched && !isLoading) {
      setNoResults(true)
    } else {
      setNoResults(false)
    }
    setSearchResults(searchState.slice(0, 10))
  }, [searchState, searched, isLoading])

  const fetchMoreData = () => {
    setTimeout(() => {
      setSearchResults(searchResults.concat(searchState.slice(0, 10)))
    }, 1500)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Itunes Music Explorer
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <CustomBox
          component="form"
          onSubmit={onSubmitQuery}
          noValidate
          autoComplete="off"

        >
          <SearchInput onInputChange={handleChange} />
          <Button disabled={disableSubmit} text="Search" type="submit"></Button>
        </CustomBox>
        {isLoading && (
          <Typography variant="h3" component="div">
            Loading...
          </Typography>
        )}
        {searchResults.length > 1 && (
          <Box sx={{ flexGrow: 1 }}>
            <InfiniteScroll
              dataLength={searchResults.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <Grid
                data-testid="search-results"
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {searchResults
                  ? searchResults.map((result, index) => (
                    <GridItem item xs={4} sm={4} md={4} key={index}>
                      <DetailsCard
                        img={result.artworkUrl100}
                        artistName={result.artistName}
                        trackName={result.trackName}
                        albumName={result.collectionCensoredName}
                      ></DetailsCard>
                    </GridItem>
                  ))
                  : null}
              </Grid>
            </InfiniteScroll>
          </Box>
        )}
        {noResults && (
          <Typography variant="h4" component="div">
            No Search Results
          </Typography>
        )}
      </main>
    </Box>
  )
}

export default Search

import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// add typings to all your styles

export const GridItem = styled(Grid)({
  display: 'flex',
  'justify-content': 'center',
}) as typeof Grid

export const CustomBox = styled(Box)({
  display: 'flex',
  'justify-content': 'center',
  padding: '20px',
}) as typeof Grid

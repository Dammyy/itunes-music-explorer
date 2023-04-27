import * as React from 'react'
import TextField from '@mui/material/TextField'

type Props = {
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  value?: string
}

const BasicTextField = ({ onInputChange, name, value }: Props) => {
  return (
    <TextField
      id="outlined-basic"
      onChange={onInputChange}
      name={name}
      value={value}
      variant="outlined"
    />
  )
}

export default BasicTextField

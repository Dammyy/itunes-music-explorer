import * as React from 'react'
import Button from '@mui/material/Button'

type Props = {
  text: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

const Btn = ({ text, disabled, type = "button" }: Props) => {
  return (
    <Button disabled={disabled} variant="contained" type={type}>
      {text}
    </Button>
  )
}

export default Btn

import { Button as Button_, ButtonProps } from '@mui/material'

export const Button = (properties: ButtonProps) => {
  return (
    <>
      <Button_ {...properties}>{properties.children}</Button_>
    </>
  )
}

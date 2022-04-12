import { Button as Btn, ButtonProps } from '@mui/material'

export const Button = (props: ButtonProps): JSX.Element => {
  const { children } = props

  return (
    <>
      <Btn {...props}>{children}</Btn>
      <div className="bg-red-500 dark:bg-blue-500">BTN5</div>
    </>
  )
}

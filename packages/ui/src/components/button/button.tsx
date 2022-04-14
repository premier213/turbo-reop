import { Button as Button_, ButtonProps } from '@mui/material'

export const Button = (properties: ButtonProps) => {
  const { children } = properties

  return (
    <>
      <Button_ {...properties}>{children}</Button_>
      <div className="mt-32 bg-red-500 dark:bg-blue-500">BTN5</div>
    </>
  )
}

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

declare module 'react-query/types/react/QueryClientProvider' {
  interface QueryClientProviderProps {
    children?: ReactNode
  }
}
declare module 'react-query/types/react/Hydrate' {
  interface HydrateProps {
    children?: ReactNode
  }
}
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
export type AppPropertiesWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type PropertiesChildren = {
  children: ReactNode
}
export interface Children {
  children?: ReactElement
  page?: ReactElement
}
export type MessageError = {
  [key: string]: string
}
export interface ErrorResponse {
  data: MessageError
}
export interface Error {
  response: ErrorResponse
}
export interface ErrorList {
  code: number
  message: string
}
export interface ContactValues {
  email: string
  subject: string
  message: string
}
export interface FaqProps {
  id: number
  question: string
  answer: string
}

import { Button } from 'ui'
import { Value } from './types'

const HelloWorld = ({ value }: Value) => (
  <>
    <div>{value}</div>
    <h1>Hello There!</h1>
    <label htmlFor="name">
      <input id="name" name="name" type="text" />
    </label>
    <Button variant="contained">hello</Button>
  </>
)

export default HelloWorld

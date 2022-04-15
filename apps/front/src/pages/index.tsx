import { Counter } from '@src/modules/counter'
import { Button } from 'ui'

function Home() {
  return (
    <div>
      <Button variant="contained">hello</Button>
      <Counter />
    </div>
  )
}

export default Home

import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
    <Button  size='md' variant={'primary'} text={'Share Brain'} startIcon={<ShareIcon size='md' />} />
    <br/>
    <Button size='md' variant={'secondary'} text={'Add Content'} startIcon={<PlusIcon size='md' />} />
    </>
  )
}

export default App

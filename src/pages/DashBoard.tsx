import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/ui/SideBar'

function DashBoard() {
  const [modalOpen , setModalOpen] = useState(false)
  return (
    <>
    <div>
      <SideBar/>
    <div className='p-4 ml-72 min-h-screen bg-gray-100 border-l-2 '>
    <CreateContentModal open={modalOpen}  onClose={() => {
      setModalOpen(false)
    }} />
   <div className='flex justify-end gap-4 m-2' >
   <Button  size='sm' variant={'primary'} text={'Share Brain'} startIcon={<ShareIcon size='md' />}  />
   <Button onClick={()=>  setModalOpen(true) } size='md' variant={'secondary'} text={'Add Content'} startIcon={<PlusIcon size='md' />}   />
   </div>
    <div className='flex gap-4'>
    <Card type="twitter" link='https://x.com/Aadhithya_D2003/status/1906969232035725680' 
    title='First Tweet'/>
     <Card type="youtube" link='https://www.youtube.com/watch?v=Ro9i0OrcDgI' 
    title='Youtube Vedio'/>
    </div>
    </div>
    </div>
    </>
  )
}

export default DashBoard

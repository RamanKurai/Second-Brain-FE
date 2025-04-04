import { useEffect, useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/ui/SideBar'
import { useContent } from '../hooks/useContent'
import { useNavigate } from 'react-router-dom'

function DashBoard() {
  const [modalOpen , setModalOpen] = useState(false)
  const {contents , refresh} = useContent();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (!token) {
      navigate("/signin");
    } else {
      refresh();
    }
  }, [modalOpen]);
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
    <div className='flex gap-4 flex-wrap'>
    {contents.map(({type, link, title}) => <Card 
            type={type}
            link={link}
            title={title}
        />)}
    </div>
    </div>
    </div>
    </>
  )
}

export default DashBoard

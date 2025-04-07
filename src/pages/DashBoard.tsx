import { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CreateContentModal } from '../components/ui/CreateContentModal';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { SideBar } from '../components/ui/SideBar';
import { useContent } from '../hooks/useContent';
import { useNavigate } from 'react-router-dom';
import { ShareBrainModel } from '../components/ui/ShareBrainModel';

function DashBoard() {
  const [modalOpen, setModalOpen] = useState(null); 
  const { contents, refresh } = useContent();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      refresh();
    }
  }, []);

  const handleCloseModal = () => {
    setModalOpen(null);
    refresh(); 
  };

  const filteredContent =
    selectedType === "all"
      ? contents
      : contents.filter(content => content.type === selectedType);

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <SideBar selectedType={selectedType} onSelect={setSelectedType} />

        <div className="flex-1 p-4 md:ml-60 bg-gray-100">

          {/* Modals */}
          {modalOpen === 'share' && (
            <ShareBrainModel open={true} onClose={handleCloseModal} />
          )}
          {modalOpen === 'create' && (
            <CreateContentModal open={true} onClose={handleCloseModal} />
          )}

          {/* Top Buttons */}
          <div className="flex justify-end gap-4 mb-4">
            <Button
              onClick={() => setModalOpen('share')}
              size="sm"
              variant="primary"
              text="Share Brain"
              startIcon={<ShareIcon />}
            />
            <Button
              onClick={() => setModalOpen('create')}
              size="md"
              variant="secondary"
              text="Add Content"
              startIcon={<PlusIcon size="md" />}
            />
          </div>

          {/* Content Cards */}
          <div className="flex flex-wrap gap-4">
            {filteredContent.length === 0 ? (
              <div className="text-center text-gray-500 w-full mt-10">
                No content available
              </div>
            ) : (
              filteredContent.map(({ type, link, title, _id }) => (
                <Card key={_id} type={type} link={link} title={title} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;

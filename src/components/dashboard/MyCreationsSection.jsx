import { useState } from "react";
import { Button, Tooltip, Avatar, Modal } from "antd";
import {
  DownloadOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { myCreationData } from "../../data/myCreationData";
import Masonry from "react-masonry-css";
import {
  MdOutlineMoreHoriz,
  MdOutlineRemoveRedEye,
  MdOutlineFavoriteBorder,
  MdOutlineShare,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const MyCreationsSection = () => {
  const navigate = useNavigate();
  const creations = myCreationData;
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (item) => {
    setSelected(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelected(null);
  };

  const handleEdit = (imageId) => {
    closeModal();
    navigate(`/dashboard/edit/${imageId}`);
  };

  return (
    <div className="h-screen bg-gray-50 overflow-y-auto p-8">
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-indigo-900">My Creations</h2>
          <span className="text-gray-500 text-sm">
            {creations.length} items
          </span>
        </div>
        <div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {creations.map((item) => (
              <div key={item.id}>
                <div className="relative group rounded-xl overflow-hidden cursor-pointer mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover rounded-xl transition-transform group-hover:scale-105"
                    style={{ display: "block", width: "100%" }}
                  />
                  <button
                    className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 bg-white/80 hover:bg-white rounded-full p-1 shadow transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(item);
                    }}
                  >
                    <MdOutlineMoreHoriz className="text-xl text-indigo-700" />
                  </button>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
        {creations.length === 0 && (
          <div className="text-center text-gray-400 mt-16 text-lg">
            No creations yet.
          </div>
        )}
        <Modal
          open={modalOpen}
          onCancel={closeModal}
          footer={null}
          width={900}
          centered
          destroyOnClose
        >
          {selected && (
            <div className="flex flex-col md:flex-row gap-0 md:gap-8 p-0 md:p-8">
              {/* Left: Large Image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              {/* Right: Details */}
              <div className="flex-1 flex flex-col p-6 md:p-0 md:pl-4">
                <h2 className="text-2xl font-bold text-indigo-900 mb-2">
                  {selected.title}
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <Avatar
                    size={32}
                    className="bg-indigo-100 text-indigo-700 font-bold"
                  >
                    {selected.author ? selected.author[0] : "U"}
                  </Avatar>
                  <span className="text-sm text-gray-700 font-medium">
                    by {selected.author || "You"}
                  </span>
                </div>
                <span className="text-xs text-gray-400 mb-2">
                  {selected.createdAt}
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <Tooltip title="View">
                    <Button
                      shape="circle"
                      icon={<MdOutlineRemoveRedEye />}
                      className="bg-white text-indigo-900 border-none shadow"
                    />
                  </Tooltip>
                  <Tooltip title="Like">
                    <Button
                      shape="circle"
                      icon={<MdOutlineFavoriteBorder />}
                      className="bg-white text-indigo-900 border-none shadow"
                    />
                  </Tooltip>
                  <Tooltip title="Share">
                    <Button
                      shape="circle"
                      icon={<MdOutlineShare />}
                      className="bg-white text-indigo-900 border-none shadow"
                    />
                  </Tooltip>
                  <span className="text-xs text-gray-500 ml-2">
                    {selected.likes !== undefined ? selected.likes : 0} likes
                  </span>
                </div>
                <p className="text-base text-gray-700 mb-4">
                  {selected.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors"
                    onClick={() => handleEdit(selected.id)}
                  >
                    Edit
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default MyCreationsSection;

import { useState } from "react";
import { Button, Tooltip, Avatar, Modal } from "antd";
import { motion } from "framer-motion";
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

// Animation variants (same as ExploreSection)
const gridVariants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
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
        <motion.div
          className="mb-8 flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-indigo-900">My Creations</h2>
          <span className="text-gray-500 text-sm">
            {creations.length} items
          </span>
        </motion.div>
        <motion.div variants={gridVariants} initial="initial" animate="animate">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {creations.map((item) => (
              <motion.div key={item.id} variants={cardVariants}>
                <div className="relative group rounded-xl overflow-hidden cursor-pointer mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover rounded-xl transition-transform group-hover:scale-105"
                    style={{ display: "block", width: "100%" }}
                  />
                  <motion.button
                    className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 bg-white/80 hover:bg-white rounded-full p-1 shadow transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(item);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MdOutlineMoreHoriz className="text-xl text-indigo-700" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
        {creations.length === 0 && (
          <motion.div
            className="text-center text-gray-400 mt-16 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            No creations yet.
          </motion.div>
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
            <motion.div
              className="flex flex-col md:flex-row gap-0 md:gap-8 p-0 md:p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Left: Large Image */}
              <motion.div
                className="flex-1 flex items-center justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </motion.div>
              {/* Right: Details */}
              <motion.div
                className="flex-1 flex flex-col p-6 md:p-0 md:pl-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.h2
                  className="text-2xl font-bold text-indigo-900 mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {selected.title}
                </motion.h2>
                <motion.div
                  className="flex items-center gap-2 mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Avatar
                    size={32}
                    className="bg-indigo-100 text-indigo-700 font-bold"
                  >
                    {selected.author ? selected.author[0] : "U"}
                  </Avatar>
                  <span className="text-sm text-gray-700 font-medium">
                    by {selected.author || "You"}
                  </span>
                </motion.div>
                <motion.span
                  className="text-xs text-gray-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  {selected.createdAt}
                </motion.span>
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
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
                </motion.div>
                <motion.p
                  className="text-base text-gray-700 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  {selected.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  {selected.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.9 + idx * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                >
                  <motion.button
                    className="bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors"
                    onClick={() => handleEdit(selected.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Share
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default MyCreationsSection;

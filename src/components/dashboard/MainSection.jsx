import ChatSection from "./ChatSection";
import GenerationSection from "./GenerationSection";
import MyCreationsSection from "./MyCreationsSection";
import ExploreSection from "./ExploreSection";
import { AnimatePresence, motion } from "framer-motion";

const sectionVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -24, transition: { duration: 0.2, ease: "easeIn" } },
};

const MainSection = ({ selectedItem }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedItem}
        variants={sectionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {selectedItem === "generate" && <GenerationSection />}
        {selectedItem === "chats" && <ChatSection />}
        {selectedItem === "myCreations" && <MyCreationsSection />}
        {selectedItem === "explore" && <ExploreSection />}
        {/* Add other sections as needed */}
      </motion.div>
    </AnimatePresence>
  );
};

export default MainSection;

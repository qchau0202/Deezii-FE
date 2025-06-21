import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Input, Tooltip } from "antd";
import {
  BsArrowLeft,
  BsStars,
  BsX,
  BsImage,
  BsPaperclip,
} from "react-icons/bs";
import { SendOutlined } from "@ant-design/icons";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";
import { tagOptions } from "../../data/tagData";
import { useGeneration } from "../../contexts/GenerationContext";
import { useNavigate } from "react-router-dom";

// Animation variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

const tagVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

const optionVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.2,
    },
  },
};

const GenerationSection = () => {
  const [selectedTags, setSelectedTags] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [attachments, setAttachments] = useState([]);
  const { lang } = useLanguage();
  const { createGeneration } = useGeneration();
  const navigate = useNavigate();
  const t = languages[lang].dashboard.generation;
  const stepKeys = ["purpose", "target_audience", "industry"];

  const getTagLabel = (tag) => {
    const t_options = t.options || {};
    for (const groupKey in t_options) {
      if (t_options[groupKey] && t_options[groupKey][tag]) {
        return t_options[groupKey][tag];
      }
    }
    // Fallback for tags that might not have a translation (e.g., from older data)
    for (const key in tagOptions) {
      const found = tagOptions[key]?.options?.find((opt) => opt.id === tag);
      if (found) return found.id; // No label available here anymore
    }
    return tag;
  };

  const handleNextStep = () => {
    if (currentStep < stepKeys.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPrompt(true);
    }
  };

  const handleTagSelect = (tag) => {
    const key = stepKeys[currentStep];
    const isMultiSelect = key === "target_audience" || key === "industry";
    const currentSelection = selectedTags[key] || [];

    let newSelection;
    if (isMultiSelect) {
      newSelection = currentSelection.includes(tag)
        ? currentSelection.filter((t) => t !== tag)
        : [...currentSelection, tag];
    } else {
      newSelection = [tag];
    }

    setSelectedTags({ ...selectedTags, [key]: newSelection });
  };

  const handleRemoveTag = (stepKey, tag) => {
    const currentSelection = selectedTags[stepKey] || [];
    const newSelection = currentSelection.filter((t) => t !== tag);
    setSelectedTags({ ...selectedTags, [stepKey]: newSelection });
  };

  const handleBack = () => {
    if (showPrompt) {
      setShowPrompt(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = () => {
    if (prompt.trim() || attachments.length > 0) {
      const finalSelection = stepKeys.reduce((acc, key) => {
        const tags = selectedTags[key] || [];
        if (tags.length > 0) {
          acc[key] = tags.map(getTagLabel);
        }
        return acc;
      }, {});

      createGeneration({
        id: new Date().getTime(),
        prompt,
        tags: finalSelection,
        attachments,
      });
      navigate("/dashboard/chats");
    }
  };

  const handleAddAttachment = (type) => {
    // Create a file input element
    const input = document.createElement("input");
    input.type = "file";
    input.accept = type === "image" ? "image/*" : ".pdf,.doc,.docx,.txt";
    input.multiple = false;

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const newAttachment = {
          type,
          name: file.name,
          size: file.size,
          file: file, // Store the actual file object
        };
        setAttachments([...attachments, newAttachment]);
      }
    };

    input.click();
  };

  const handleRemoveAttachment = (name) => {
    setAttachments(attachments.filter((a) => a.name !== name));
  };

  const key = stepKeys[currentStep];
  const currentOptionsGroup = t.options ? t.options[key] || {} : {};
  const currentSelectionForStep = selectedTags[key] || [];

  const flatSelectedTags = Object.entries(selectedTags).flatMap(([key, tags]) =>
    tags.map((tag) => ({ stepKey: key, tag: tag }))
  );

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gray-50 p-8"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {!showPrompt ? (
            <motion.div
              key="tags"
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div className="mb-8" variants={containerVariants}>
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-2/3"
                  >
                    <h2 className="text-2xl font-semibold text-indigo-900">
                      {t.questions[key]}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {t.step
                        .replace("{current}", currentStep + 1)
                        .replace("{total}", 4)}
                    </p>
                  </motion.div>
                  {currentStep > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <button
                        onClick={handleBack}
                        className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md"
                      >
                        {t.back}
                      </button>
                    </motion.div>
                  )}
                </div>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4 min-h-[2.25rem]"
                  variants={containerVariants}
                >
                  <AnimatePresence>
                    {flatSelectedTags.map(({ stepKey, tag }) => (
                      <motion.div
                        key={tag}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center"
                        variants={tagVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <span>{getTagLabel(tag)}</span>
                        <button
                          onClick={() => handleRemoveTag(stepKey, tag)}
                          className="ml-2 text-indigo-500 hover:text-indigo-800"
                        >
                          <BsX />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {tagOptions[key].options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleTagSelect(option.id)}
                    className={`p-4 bg-white border-2 rounded-lg text-left transition-colors ${
                      currentSelectionForStep.includes(option.id)
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-indigo-200 hover:border-indigo-500"
                    }`}
                    variants={optionVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    custom={index}
                  >
                    <span className="text-indigo-900 font-medium">
                      {currentOptionsGroup[option.id] || option.id}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
              <motion.div
                className="flex justify-end mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <button
                  onClick={handleNextStep}
                  disabled={currentSelectionForStep.length === 0}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                >
                  Next
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="prompt"
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div className="mb-8" variants={containerVariants}>
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-2xl font-semibold text-indigo-900">
                      {t.promptTitle}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {t.step.replace("{current}", 4).replace("{total}", 4)}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <button
                      onClick={handleBack}
                      className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md"
                    >
                      {t.back}
                    </button>
                  </motion.div>
                </div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  <AnimatePresence>
                    {flatSelectedTags.map(({ stepKey, tag }) => (
                      <motion.div
                        key={tag}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center"
                        variants={tagVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <span>{getTagLabel(tag)}</span>
                        <button
                          onClick={() => handleRemoveTag(stepKey, tag)}
                          className="ml-2 text-indigo-500 hover:text-indigo-800"
                        >
                          <BsX />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Input
                  placeholder={t.promptPlaceholder}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onPressEnter={handleGenerate}
                  className="flex-1 border-indigo-200 text-indigo-900 placeholder-gray-400"
                  size="large"
                  prefix={<BsStars className="text-indigo-600 mr-1" />}
                />
                <Tooltip title="Attach Image">
                  <button
                    onClick={() => handleAddAttachment("image")}
                    className="border border-gray-300 text-indigo-600 text-sm px-4 py-2 rounded-md cursor-pointer"
                  >
                    <BsImage />
                  </button>
                </Tooltip>
                <Tooltip title="Attach File">
                  <button
                    onClick={() => handleAddAttachment("file")}
                    className="border border-gray-300 text-indigo-600 text-sm px-4 py-2 rounded-md cursor-pointer"
                  >
                    <BsPaperclip />
                  </button>
                </Tooltip>
              </motion.div>
              <AnimatePresence>
                {attachments.length > 0 && (
                  <motion.div
                    className="mt-4 flex flex-wrap gap-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {attachments.map((file) => (
                      <motion.div
                        key={file.name}
                        className="bg-gray-100 rounded-lg px-3 py-2 text-sm flex items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {file.type === "image" ? (
                          <BsImage className="mr-2 text-indigo-600" />
                        ) : (
                          <BsPaperclip className="mr-2 text-indigo-600" />
                        )}
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900">
                            {file.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                        <button
                          onClick={() => handleRemoveAttachment(file.name)}
                          className="ml-3 text-gray-500 hover:text-red-600 transition-colors"
                        >
                          <BsX />
                        </button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className="flex justify-end mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <button
                  onClick={handleGenerate}
                  className="bg-indigo-600 border-none hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md"
                >
                  {t.generate}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GenerationSection;

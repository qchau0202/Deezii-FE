import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Input, Button, Tooltip } from "antd";
import { BsArrowLeft, BsStars } from "react-icons/bs";
import { SendOutlined } from "@ant-design/icons";
import { MdAttachFile } from "react-icons/md";
import { tagOptions } from "../../data/tagData";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";

const GenerationSection = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState("");
  const { lang } = useLanguage();
  const t = languages[lang].dashboard.generation;

  const getTagLabel = (tag) => {
    // Try to find the label in the parent options
    for (const key in tagOptions) {
      const found = tagOptions[key]?.options?.find((opt) => opt.id === tag);
      if (found) return found.label;
    }
    return tag;
  };

  // Get the question for the current step, inserting parent label if needed
  const getCurrentQuestion = () => {
    const key = currentStep === 0 ? "type" : selectedTags[currentStep - 1];
    // Try to get the localized question from t.questions
    if (t.questions && t.questions[key]) {
      return t.questions[key];
    }
    // fallback to English if not found
    if (languages.en.dashboard.generation.questions[key]) {
      return languages.en.dashboard.generation.questions[key];
    }
    // fallback to tagOptions
    if (tagOptions[key]?.title) {
      return tagOptions[key].title;
    }
    return "";
  };

  const getCurrentOptions = () => {
    if (currentStep === 0) return tagOptions.type;
    const lastTag = selectedTags[currentStep - 1];
    return tagOptions[lastTag] || tagOptions.type; // Fallback to type if no options found
  };

  const handleTagSelect = (tag) => {
    const newTags = [...selectedTags.slice(0, currentStep), tag];
    setSelectedTags(newTags);

    if (currentStep < 2) {
      // 3 steps total
      setCurrentStep(currentStep + 1);
    } else {
      setShowPrompt(true);
    }
  };

  const handleBack = () => {
    if (showPrompt) {
      setShowPrompt(false);
      setCurrentStep(2);
      setSelectedTags(selectedTags.slice(0, 2));
    } else if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      setSelectedTags(selectedTags.slice(0, newStep));
    }
  };

  const handleGenerate = () => {
    if (prompt.trim()) {
      // TODO: Implement generation logic
      console.log("Selected Tags:", selectedTags);
      console.log("Prompt:", prompt);
      setPrompt("");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {!showPrompt ? (
            <div key="tags" className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-indigo-900">
                      {getCurrentQuestion()}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {t.step
                        .replace("{current}", currentStep + 1)
                        .replace("{total}", 3)}
                    </p>
                  </div>
                  {currentStep > 0 && (
                    <Button
                      icon={<BsArrowLeft />}
                      onClick={handleBack}
                      className="flex items-center"
                    >
                      {t.back}
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedTags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      {getTagLabel(tag)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {getCurrentOptions().options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleTagSelect(option.id)}
                    className="p-4 bg-white border-2 border-indigo-200 rounded-lg text-left hover:border-indigo-500 transition-colors"
                  >
                    <span className="text-indigo-900 font-medium">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-indigo-900">
                    {t.promptTitle}
                  </h2>
                  <Button
                    icon={<BsArrowLeft />}
                    onClick={handleBack}
                    className="flex items-center"
                  >
                    {t.back}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedTags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      {getTagLabel(tag)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 p-2">
                <Input
                  placeholder={t.promptPlaceholder}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onPressEnter={handleGenerate}
                  className="flex-1 border-indigo-200 text-indigo-900 placeholder-gray-400"
                  size="large"
                  prefix={<BsStars className="text-indigo-600 mr-1" />}
                  suffix={
                    <Tooltip title={t.uploadTooltip}>
                      <MdAttachFile className="text-gray-400 cursor-pointer hover:text-indigo-600" />
                    </Tooltip>
                  }
                />
                <Button
                  icon={<SendOutlined />}
                  onClick={handleGenerate}
                  className="bg-indigo-600 border-none hover:bg-indigo-700 text-white h-10"
                  size="large"
                >
                  {t.generate}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GenerationSection;

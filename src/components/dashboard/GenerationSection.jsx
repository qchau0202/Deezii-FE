import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Input, Tooltip } from "antd";
import { BsStars, BsX, BsImage, BsPaperclip } from "react-icons/bs";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";
import { tagOptions, stepMetadata } from "../../data/tagData";
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
  const [inputValues, setInputValues] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [attachments, setAttachments] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [showAdvancedConfirmation, setShowAdvancedConfirmation] = useState(false);
  const [userWentThroughAdvanced, setUserWentThroughAdvanced] = useState(false);
  const { lang } = useLanguage();
  const { createGeneration } = useGeneration();
  const navigate = useNavigate();
  const t = languages[lang].dashboard.generation;
  
  // Get step keys from language file
  const allStepKeys = t.steps || [];
  const basicQuestionsCount = 7; // First 7 questions are basic
  
  const getTagLabel = (tag) => {
    const t_options = t.options || {};
    for (const groupKey in t_options) {
      if (t_options[groupKey] && t_options[groupKey][tag]) {
        return t_options[groupKey][tag];
      }
    }
    return tag;
  };

  const isInputStep = (stepKey) => {
    return stepMetadata.inputSteps.includes(stepKey);
  };

  const isMultiSelectStep = (stepKey) => {
    return stepMetadata.multiSelectSteps.includes(stepKey);
  };

  const isOptionalStep = (stepKey) => {
    return stepMetadata.optionalSteps.includes(stepKey);
  };

  // Get the actual last step number for the current path
  const getLastStepNumber = () => {
    if (showReview) {
      // If we're at review step, use the flag to determine path
      return userWentThroughAdvanced ? 
        basicQuestionsCount + 1 + (allStepKeys.length - basicQuestionsCount) + 1 : 
        basicQuestionsCount + 2;
    } else if (currentStep >= basicQuestionsCount) {
      // User is in advanced section
      return basicQuestionsCount + 1 + (allStepKeys.length - basicQuestionsCount) + 1;
    } else {
      // User is in basic section
      return basicQuestionsCount + 2;
    }
  };

  const lastStepNumber = getLastStepNumber();

  const handleNextStep = () => {
    // Check if we're at the end of basic questions (before advanced options)
    if (currentStep === basicQuestionsCount - 1) {
      // Show confirmation for advanced options
      setShowAdvancedConfirmation(true);
    } else if (currentStep < allStepKeys.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Move to review step
      setShowReview(true);
    }
  };

  const handleBack = () => {
    if (showReview) {
      setShowReview(false);
    } else if (showAdvancedConfirmation) {
      // Go back to the last basic step
      setShowAdvancedConfirmation(false);
      setCurrentStep(basicQuestionsCount - 1);
    } else if (currentStep > 0) {
      // Check if we're at the first advanced step (right after confirmation)
      if (currentStep === basicQuestionsCount) {
        // Go back to confirmation step
        setShowAdvancedConfirmation(true);
      } else {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  const handleContinueAdvanced = () => {
    setUserWentThroughAdvanced(true);
    setShowAdvancedConfirmation(false);
    setCurrentStep(basicQuestionsCount); // Always start from first advanced step
  };

  const handleSkipAdvanced = () => {
    // Clear any advanced options that were selected
    const clearedSelectedTags = { ...selectedTags };
    const clearedInputValues = { ...inputValues };
    
    // Remove all advanced options (steps after basicQuestionsCount)
    for (let i = basicQuestionsCount; i < allStepKeys.length; i++) {
      const stepKey = allStepKeys[i];
      delete clearedSelectedTags[stepKey];
      delete clearedInputValues[stepKey];
    }
    
    setSelectedTags(clearedSelectedTags);
    setInputValues(clearedInputValues);
    setUserWentThroughAdvanced(false);
    setShowAdvancedConfirmation(false);
    setShowReview(true);
  };

  const canProceed = () => {
    const currentKey = allStepKeys[currentStep];
    
    // If it's an optional step, user can always proceed (either with content or by skipping)
    if (isOptionalStep(currentKey)) {
      return true;
    }
    
    // For required steps, check if they have content
    if (isInputStep(currentKey)) {
      return inputValues[currentKey] && inputValues[currentKey].trim().length > 0;
    } else {
      const currentSelection = selectedTags[currentKey] || [];
      return currentSelection.length > 0;
    }
  };

  const handleGenerate = () => {
    // Build a prompt that shows all the selected tags
    let finalPrompt = "";
    
    // Create a prompt that lists all the selected tags
    const allSelectedTags = [];
    
    // Add purpose tags
    if (selectedTags.purpose && selectedTags.purpose.length > 0) {
      allSelectedTags.push(...selectedTags.purpose.map(getTagLabel));
    }
    
    // Add target audience tags
    if (selectedTags.target_audience && selectedTags.target_audience.length > 0) {
      allSelectedTags.push(...selectedTags.target_audience.map(getTagLabel));
    }
    
    // Add industry tags
    if (selectedTags.industry && selectedTags.industry.length > 0) {
      allSelectedTags.push(...selectedTags.industry.map(getTagLabel));
    }
    
    // Add CTA action tags
    if (selectedTags.cta_action && selectedTags.cta_action.length > 0) {
      allSelectedTags.push(...selectedTags.cta_action.map(getTagLabel));
    }
    
    // Add emotion priority tags
    if (selectedTags.emotion_priority && selectedTags.emotion_priority.length > 0) {
      allSelectedTags.push(...selectedTags.emotion_priority.map(getTagLabel));
    }
    
    // Add context tags (optional)
    if (selectedTags.context && selectedTags.context.length > 0) {
      allSelectedTags.push(...selectedTags.context.map(getTagLabel));
    }
    
    // Add people/subject tags (optional)
    if (selectedTags.people_subject && selectedTags.people_subject.length > 0) {
      allSelectedTags.push(...selectedTags.people_subject.map(getTagLabel));
    }
    
    // Create the final prompt from all selected tags
    if (allSelectedTags.length > 0) {
      finalPrompt = ""; // No prompt message, only tags will be shown
    } else {
      finalPrompt = ""; // No prompt message even if no tags
    }

    const finalSelection = allStepKeys.reduce((acc, key) => {
      if (isInputStep(key)) {
        // Include input values (green pills) if they have content
        if (inputValues[key] && inputValues[key].trim().length > 0) {
          acc[key] = inputValues[key].trim();
        }
      } else {
        // Include selected tags (blue pills)
        const tags = selectedTags[key] || [];
        if (tags.length > 0) {
          acc[key] = tags.map(getTagLabel);
        }
      }
      return acc;
    }, {});

    createGeneration({
      id: new Date().getTime(),
      prompt: finalPrompt,
      tags: finalSelection,
      attachments,
    });
    navigate("/dashboard/chats");
  };

  const handleTagSelect = (tag) => {
    const key = allStepKeys[currentStep];
    const isMultiSelect = isMultiSelectStep(key);
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

  const handleInputChange = (stepKey, value) => {
    setInputValues({ ...inputValues, [stepKey]: value });
  };

  const handleRemoveTag = (stepKey, tag) => {
    const currentSelection = selectedTags[stepKey] || [];
    const newSelection = currentSelection.filter((t) => t !== tag);
    setSelectedTags({ ...selectedTags, [stepKey]: newSelection });
  };

  const handleAddAttachment = (type) => {
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
          file: file,
        };
        setAttachments([...attachments, newAttachment]);
      }
    };

    input.click();
  };

  const handleRemoveAttachment = (name) => {
    setAttachments(attachments.filter((a) => a.name !== name));
  };

  const renderStepContent = () => {
    // Safety check to prevent out of bounds access
    if (currentStep >= allStepKeys.length) {
      console.error('Current step is out of bounds:', currentStep, 'Total steps:', allStepKeys.length);
      return (
        <motion.div className="text-center text-red-500">
          <p>Error: Step out of bounds. Please refresh the page.</p>
        </motion.div>
      );
    }

    const key = allStepKeys[currentStep];
    const currentOptionsGroup = t.options ? t.options[key] || {} : {};
    const currentSelectionForStep = selectedTags[key] || [];
    const currentInputValue = inputValues[key] || "";

    if (isInputStep(key)) {
      return (
        <motion.div
          className="space-y-3"
          variants={containerVariants}
        >
          <div className="text-center mb-4">
            <h3 className="text-base font-medium text-gray-700 mb-1">
              {t.questions[key]}
            </h3>
            {t.inputPlaceholders && t.inputPlaceholders[key] && (
              <p className="text-xs text-gray-500">
                {t.inputPlaceholders[key]}
              </p>
            )}
          </div>
          <Input.TextArea
            placeholder={t.inputPlaceholders ? t.inputPlaceholders[key] : ""}
            value={currentInputValue}
            onChange={(e) => handleInputChange(key, e.target.value)}
            rows={3}
            className="w-full border-indigo-200 text-indigo-900 placeholder-gray-400"
            size="middle"
          />
        </motion.div>
      );
    }

    // Check if this step has options in tagOptions
    if (!tagOptions[key] || !tagOptions[key].options) {
      console.warn(`No options found for step: ${key}`);
      return (
        <motion.div className="text-center text-gray-500">
          <p>No options available for this step.</p>
        </motion.div>
      );
    }

    return (
      <motion.div
        className="grid grid-cols-2 gap-3"
        variants={containerVariants}
      >
        {tagOptions[key].options.map((option, index) => (
          <motion.button
            key={option.id}
            onClick={() => handleTagSelect(option.id)}
            className={`p-3 bg-white border-2 rounded-lg text-left transition-colors ${
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
            <span className="text-indigo-900 font-medium text-sm">
              {currentOptionsGroup[option.id] || option.id}
            </span>
          </motion.button>
        ))}
      </motion.div>
    );
  };

  const key = allStepKeys[currentStep];
  const flatSelectedTags = Object.entries(selectedTags).flatMap(([key, tags]) =>
    tags.map((tag) => ({ stepKey: key, tag: tag }))
  );

  const flatInputValues = Object.entries(inputValues).map(([key, value]) => ({
    stepKey: key,
    value: value,
  }));

  const isAdvancedStep = currentStep >= basicQuestionsCount; // Steps after basic questions are advanced
  
  // Dynamic step calculation based on user's path
  const getTotalSteps = () => {
    if (showAdvancedConfirmation) {
      // If we're at confirmation step, total is basic questions + confirmation + review
      return basicQuestionsCount + 2; // +2 for confirmation and review steps
    } else if (showReview) {
      // If we're at review step, check if user went through advanced options
      if (userWentThroughAdvanced) {
        // User went through advanced options: basic + confirmation + advanced + review
        return basicQuestionsCount + 1 + (allStepKeys.length - basicQuestionsCount) + 1;
      } else {
        // User skipped advanced options: basic + confirmation + review
        return basicQuestionsCount + 2;
      }
    } else {
      // Regular step - check if we're in advanced section
      if (currentStep >= basicQuestionsCount) {
        // We're in advanced section, so total includes all steps + confirmation + review
        return basicQuestionsCount + 1 + (allStepKeys.length - basicQuestionsCount) + 1;
      } else {
        // We're in basic section, so total is basic + confirmation + review
        return basicQuestionsCount + 2;
      }
    }
  };

  const totalSteps = getTotalSteps();
  
  // Get the current step number accounting for confirmation and review steps
  const getCurrentStepNumber = () => {
    if (showAdvancedConfirmation) {
      return basicQuestionsCount + 1; // Confirmation step
    } else if (showReview) {
      return totalSteps; // Review step is always the last
    } else if (currentStep >= basicQuestionsCount) {
      // Advanced step: basic steps + confirmation + advanced step number
      return basicQuestionsCount + 1 + (currentStep - basicQuestionsCount + 1);
    } else {
      // Basic step
      return currentStep + 1;
    }
  };
  
  const currentStepNumber = getCurrentStepNumber();
  const isLastStep = currentStep === lastStepNumber - 1; // -1 because currentStep is 0-based

  const renderAdvancedConfirmationStep = () => {
    return (
      <motion.div
        key="advanced-confirmation"
        className="bg-white rounded-lg p-6 shadow-lg"
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div className="mb-6" variants={containerVariants}>
          <div className="flex items-center justify-between mb-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="w-2/3"
            >
              <h2 className="text-xl font-semibold text-indigo-900">
                {t.advancedOptionsConfirmation.title}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {t.step.replace("{current}", currentStepNumber).replace("{total}", totalSteps)}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={handleBack}
                className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-md"
              >
                {t.back}
              </button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="space-y-4" variants={containerVariants}>
          <div className="text-center mb-6">
            <h3 className="text-base font-medium text-gray-700 mb-2">
              {t.advancedOptionsConfirmation.subtitle}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {t.advancedOptionsConfirmation.description}
            </p>
            <p className="text-xs text-gray-400">
              {t.advancedOptionsConfirmation.note}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button
            onClick={handleSkipAdvanced}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md text-sm font-medium"
          >
            {t.advancedOptionsConfirmation.skip}
          </button>
          <button
            onClick={handleContinueAdvanced}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-sm font-medium"
          >
            {t.advancedOptionsConfirmation.continue}
          </button>
        </motion.div>
      </motion.div>
    );
  };

  const renderReviewStep = () => {
    return (
      <motion.div
        key="review"
        className="bg-white rounded-lg p-6 shadow-lg"
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div className="mb-6" variants={containerVariants}>
          <div className="flex items-center justify-between mb-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="w-2/3"
            >
              <h2 className="text-xl font-semibold text-indigo-900">
                {t.review.title}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {t.step.replace("{current}", totalSteps).replace("{total}", totalSteps)}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={handleBack}
                className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-md"
              >
                {t.back}
              </button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="space-y-3" variants={containerVariants}>
          <div className="text-center mb-4">
            <h3 className="text-base font-medium text-gray-700 mb-2">
              {t.review.subtitle}
            </h3>
            <p className="text-xs text-gray-500">
              {t.review.description}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-wrap gap-2">
              {flatSelectedTags.map(({ stepKey, tag }) => (
                <span key={tag} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
                  {getTagLabel(tag)}
                </span>
              ))}
              {flatInputValues.map(({ stepKey, value }) => (
                <span key={stepKey} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-end mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button
            onClick={handleGenerate}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md text-sm font-medium"
          >
            {t.generate}
          </button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gray-50 p-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {showReview ? (
            renderReviewStep()
          ) : showAdvancedConfirmation ? (
            renderAdvancedConfirmationStep()
          ) : (
            <motion.div
              key={`step-${currentStep}`}
              className="bg-white rounded-lg p-6 shadow-lg"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div className="mb-6" variants={containerVariants}>
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-2/3"
                  >
                    <h2 className="text-xl font-semibold text-indigo-900">
                      {isAdvancedStep ? t.advancedOptions : t.questions[key]}
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                      {t.step
                        .replace("{current}", currentStepNumber)
                        .replace("{total}", totalSteps)}
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
                        className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-md"
                      >
                        {t.back}
                      </button>
                    </motion.div>
                  )}
                </div>
                <motion.div
                  className="flex flex-wrap gap-2 mb-3 min-h-[1.75rem]"
                  variants={containerVariants}
                >
                  <AnimatePresence>
                    {flatSelectedTags.map(({ stepKey, tag }) => (
                      <motion.div
                        key={tag}
                        className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs flex items-center"
                        variants={tagVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <span>{getTagLabel(tag)}</span>
                        <button
                          onClick={() => handleRemoveTag(stepKey, tag)}
                          className="ml-1.5 text-indigo-500 hover:text-indigo-800"
                        >
                          <BsX />
                        </button>
                      </motion.div>
                    ))}
                    {flatInputValues.map(({ stepKey, value }) => (
                      <motion.div
                        key={stepKey}
                        className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs flex items-center"
                        variants={tagVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <span>{value}</span>
                        <button
                          onClick={() => {
                            const newInputValues = { ...inputValues };
                            delete newInputValues[stepKey];
                            setInputValues(newInputValues);
                          }}
                          className="ml-1.5 text-green-500 hover:text-green-800"
                        >
                          <BsX />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {renderStepContent()}

              <motion.div
                className="flex justify-between mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex space-x-2">
                  {/* Skip button removed - users can skip optional steps by clicking Next */}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleNextStep}
                    disabled={!canProceed()}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {isLastStep ? "Review" : "Next"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GenerationSection;

export const tagOptions = {
  purpose: {
    options: [
      { id: "product_intro" },
      { id: "call_to_action" },
      { id: "knowledge_share" },
      { id: "holiday_celebration" },
      { id: "inspiration" },
      { id: "recruitment" },
      { id: "event_announcement" },
      { id: "brand_recognition" },
      { id: "promote_sales" },
      { id: "other" },
    ],
  },
  target_audience: {
    options: [
      { id: "male" },
      { id: "female" },
      { id: "children" },
      { id: "students" },
      { id: "office_workers" },
      { id: "everyone" },
      { id: "other" },
    ],
  },
  industry: {
    options: [
      { id: "fashion" },
      { id: "beauty" },
      { id: "food_beverage" },
      { id: "education" },
      { id: "spa_services" },
      { id: "event_planning" },
      { id: "technology" },
      { id: "healthcare" },
      { id: "real_estate" },
      { id: "automotive" },
      { id: "travel" },
      { id: "sports" },
      { id: "entertainment" },
      { id: "finance" },
      { id: "other" },
    ],
  },
  cta_action: {
    options: [
      { id: "purchase" },
      { id: "register" },
      { id: "book_appointment" },
      { id: "learn_more" },
      { id: "comment" },
      { id: "share" },
      { id: "download" },
      { id: "contact" },
      { id: "subscribe" },
      { id: "other" },
    ],
  },
  emotion_priority: {
    options: [
      { id: "emotion_70_info_30" },
      { id: "emotion_50_info_50" },
      { id: "emotion_30_info_70" },
    ],
  },
  context: {
    options: [
      { id: "indoor" },
      { id: "outdoor" },
      { id: "party" },
      { id: "office" },
      { id: "work_desk" },
      { id: "supermarket" },
      { id: "bedroom" },
      { id: "kitchen" },
      { id: "garden" },
      { id: "beach" },
      { id: "city" },
      { id: "nature" },
      { id: "other" },
    ],
  },
  people_subject: {
    options: [
      { id: "no_people" },
      { id: "with_people" },
      { id: "male" },
      { id: "female" },
      { id: "children" },
      { id: "group_people" },
      { id: "animals" },
      { id: "other" },
    ],
  },
};

// Step metadata
export const stepMetadata = {
  // Steps that require user input (text fields)
  inputSteps: ["related_event", "main_message", "image_keywords", "avoid_keywords"],
  
  // Steps that allow multiple selections
  multiSelectSteps: ["purpose", "target_audience", "industry", "cta_action", "emotion_priority", "context", "people_subject"],
  
  // Steps that are optional/advanced (can be skipped)
  optionalSteps: ["context", "people_subject", "avoid_keywords"],
  
  // Steps that are required (cannot be skipped)
  requiredSteps: ["purpose", "related_event", "main_message", "target_audience", "industry", "image_keywords", "cta_action", "emotion_priority"],
};

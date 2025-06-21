import { createContext, useContext, useState, useCallback } from "react";

const GenerationContext = createContext();

export const GenerationProvider = ({ children }) => {
  const [generationData, setGenerationData] = useState(null);

  const createGeneration = useCallback((data) => {
    setGenerationData(data);
  }, []);

  const clearGenerationData = useCallback(() => {
    setGenerationData(null);
  }, []);

  return (
    <GenerationContext.Provider
      value={{ generationData, createGeneration, clearGenerationData }}
    >
      {children}
    </GenerationContext.Provider>
  );
};

export const useGeneration = () => {
  return useContext(GenerationContext);
};

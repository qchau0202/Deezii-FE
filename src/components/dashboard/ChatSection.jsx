import { useState, useEffect, useRef } from "react";
import { Input, Button, Tooltip, Spin } from "antd";
import {
  SendOutlined,
  StarFilled,
  CopyOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { BsStars, BsImage, BsPaperclip } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { useGeneration } from "../../contexts/GenerationContext";
import React from "react";

const ChatSection = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const { generationData, clearGenerationData } = useGeneration();
  const chatEndRef = useRef(null);
  const lastProcessedId = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (generationData && generationData.id !== lastProcessedId.current) {
      lastProcessedId.current = generationData.id;
      const newMessage = {
        id: generationData.id,
        sender: "Chou",
        time: "Now",
        content: generationData.prompt,
        tags: generationData.tags,
        attachments: generationData.attachments,
        images: [],
        loading: true,
      };
      setMessages((prev) => [...prev, newMessage]);
      clearGenerationData();

      setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === newMessage.id
              ? {
                  ...msg,
                  loading: false,
                  images: [
                    "https://placehold.co/200x200",
                    "https://placehold.co/200x200",
                  ],
                }
              : msg
          )
        );
      }, 5000);
    }
  }, [generationData, clearGenerationData]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendPrompt = () => {
    if (prompt.trim()) {
      const newMessage = {
        id: new Date().getTime(),
        sender: "Chou",
        time: "Now",
        content: prompt,
        tags: {},
        attachments: [],
        images: [],
        loading: false,
      };
      setMessages([...messages, newMessage]);
      setPrompt("");
    }
  };

  return (
    <div className="h-screen mx-auto px-4 flex flex-col">
      <div className="flex-1 flex flex-col bg-white rounded-lg border border-gray-200 max-h-full overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div>
            <h2 className="text-xl font-semibold text-indigo-900">
              Marketing poster
            </h2>
            <p className="text-sm text-gray-600">Today</p>
          </div>
          <div className="flex items-center space-x-4">
            <StarFilled className="text-gray-300 hover:text-yellow-400 cursor-pointer" />
            <FaShareSquare className="text-gray-500 hover:text-indigo-600 cursor-pointer" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <BsStars className="text-indigo-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-indigo-900">
                      {message.sender}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {message.time}
                    </span>
                  </div>
                </div>
              </div>
              {message.content && (
                <div className="bg-gray-50 p-3 rounded-lg mb-3 border border-gray-100">
                  <div className="flex justify-between">
                    <p className="text-gray-900">{message.content}</p>
                    <Tooltip title="Copy Prompt">
                      <CopyOutlined className="text-gray-400 hover:text-indigo-600 cursor-pointer ml-2" />
                    </Tooltip>
                  </div>
                </div>
              )}
              <div className="mb-3 flex flex-wrap gap-2">
                {message.tags &&
                  Object.entries(message.tags).map(([, values], index) => (
                    <React.Fragment key={index}>
                      {values.map((value) => (
                        <div
                          key={value}
                          className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          {value}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {message.attachments &&
                  message.attachments.map((file) => (
                    <div
                      key={file.name}
                      className="bg-gray-100 rounded-lg px-3 py-1 text-sm flex items-center"
                    >
                      {file.type === "image" ? (
                        <BsImage className="mr-2" />
                      ) : (
                        <BsPaperclip className="mr-2" />
                      )}
                      <span>{file.name}</span>
                    </div>
                  ))}
              </div>
              {message.loading ? (
                <div className="flex justify-center items-center mt-4 p-4 bg-gray-50 rounded-lg">
                  <Spin />
                  <span className="ml-4 text-gray-500">
                    Generating images, please wait...
                  </span>
                </div>
              ) : (
                message.images &&
                message.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {message.images.map((img, idx) => (
                      <div key={idx} className="relative group">
                        <img
                          src={img}
                          alt="Generated"
                          className="w-full object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gray-200 bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                          <div className="flex space-x-2">
                            <button className="cursor-pointer bg-white text-indigo-900 border-none text-sm px-3 py-1 rounded-md hover:bg-gray-50">
                              <Tooltip title="Download">
                                <DownloadOutlined />
                              </Tooltip>
                            </button>
                            <button className="cursor-pointer bg-white text-indigo-900 border-none text-sm px-3 py-1 rounded-md hover:bg-gray-50">
                              <Tooltip title="Copy">
                                <CopyOutlined />
                              </Tooltip>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="flex items-center space-x-2 p-6">
          <Input
            placeholder="Continue the conversation..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onPressEnter={handleSendPrompt}
            className="flex-1 border-indigo-200 text-indigo-900 placeholder-gray-400"
            size="large"
            prefix={<BsStars className="text-indigo-600 mr-1" />}
          />
          <button
            onClick={handleSendPrompt}
            className="bg-indigo-600 border-none hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md flex items-center"
          >
            <SendOutlined className="mr-1" />
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;

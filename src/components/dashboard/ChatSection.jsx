import { useState } from "react";
import { Input, Button, Tooltip } from "antd";
import {
  SendOutlined,
  StarFilled,
  CopyOutlined,
  DownloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { BsStars } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

const ChatSection = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Deezii",
      time: "Today at 7:15 am",
      content: "Create visual for a small business that sells handmade candles",
      specs: "",
      images: [
        "https://placehold.co/150x150",
        "https://placehold.co/150x150",
        "https://placehold.co/150x150",
        "https://placehold.co/150x150",
      ],
      starred: true,
    },
  ]);

  const handleSendPrompt = () => {
    if (prompt.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "Chou",
          time: "Now",
          content: prompt,
          images: [],
          starred: false,
        },
      ]);
      setPrompt("");
    }
  };

  return (
    <div className="flex-1 h-screen mx-auto px-4 py-2 flex flex-col">
      <div className="flex-1 flex flex-col bg-white rounded-lg border border-gray-200 max-h-full overflow-hidden">
        {/* Header section */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div>
            <h2 className="text-xl font-semibold text-indigo-900">
              Marketing poster
            </h2>
            <p className="text-sm text-gray-600">01 May, 12pm (GMT+7)</p>
          </div>
          <div className="flex items-center space-x-4">
            <StarFilled />
            <FaShareSquare />
          </div>
        </div>
        {/* Input section */}
        <div className="flex items-center space-x-2 p-6">
          <Input
            placeholder="Type a prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onPressEnter={handleSendPrompt}
            className="flex-1 border-indigo-200 text-indigo-900 placeholder-gray-400"
            size="large"
            prefix={<BsStars className="text-indigo-600 mr-1" />}
            suffix={
              <Tooltip title="Upload Reference Image">
                <MdAttachFile className="text-gray-400 cursor-pointer hover:text-indigo-600" />
              </Tooltip>
            }
          />
          <Button
            icon={<SendOutlined />}
            onClick={handleSendPrompt}
            className="bg-indigo-600 border-none hover:bg-indigo-700 text-white h-10"
            size="large"
          >
            Generate
          </Button>
        </div>

        {/* Chat section */}
        <div className="flex-1 overflow-y-auto p-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                    <BsStars className="text-indigo-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-indigo-900">
                      {message.sender}
                    </span>
                    <span className="text-xs text-gray-600 ml-2">
                      {message.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg mb-3 border border-gray-100">
                <div className="flex justify-between">
                  <p className="text-gray-900">{message.content}</p>
                  <Tooltip title="Copy Prompt">
                    <CopyOutlined className="text-gray-400 hover:text-indigo-600 cursor-pointer ml-2" />
                  </Tooltip>
                </div>
              </div>
              {message.specs && (
                <p className="text-sm text-gray-600 mb-3 italic">
                  <span className="font-medium">Helper specs:</span>{" "}
                  {message.specs}
                </p>
              )}
              {message.images.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {message.images.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={img}
                        alt="Generated"
                        className="w-full h-44 object-cover rounded-lg shadow-sm"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                        <div className="flex space-x-2">
                          <Button
                            size="small"
                            className="bg-white text-indigo-900 border-none"
                          >
                            <DownloadOutlined />
                          </Button>
                          <Button
                            size="small"
                            className="bg-white text-indigo-900 border-none"
                          >
                            <CopyOutlined />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSection;

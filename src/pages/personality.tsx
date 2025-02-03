"use client";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";

export default function PersonalityPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("personality");
  const [selectedTemplate, setSelectedTemplate] = useState("basic");

  const handleTabClick = (tab: SetStateAction<string>) => {
    if (tab === "knowledge") {
      router.push("/knowledge");
    } else if (tab === "avatar") {
      router.push("/avatar");
    }
    setActiveTab(tab);
  };

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
  };

  const templates = [
    {
      id: "basic",
      title: "Pikachu",
      description: "Choose me if this is your first time!",
    },
    {
      id: "extrovert",
      title: "Extrovert",
      description: "Let's get this party going!",
    },
    {
      id: "introvert",
      title: "Introvert",
      description: "Let's stay in and read a book tonight...",
    },
    {
      id: "custom",
      title: "Custom",
      description: "Build your own personality!",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-16">
          {/* Sidebar */}
          <div className="w-48">
            <div className="text-white mb-6">Basic</div>
            <div className="space-y-4">
              <div
                onClick={() => handleTabClick("personality")}
                className={`flex items-center gap-2 cursor-pointer ${
                  activeTab === "personality"
                    ? "text-[#DCFF1C]"
                    : "text-gray-400 hover:text-[#DCFF1C]"
                } transition-colors`}
              >
                <span>Personality</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-[#1C2B1E] text-[#DCFF1C] rounded">
                  NEW
                </span>
              </div>
              <div
                onClick={() => handleTabClick("knowledge")}
                className={`cursor-pointer ${
                  activeTab === "knowledge"
                    ? "text-[#DCFF1C]"
                    : "text-gray-400 hover:text-[#DCFF1C]"
                } transition-colors`}
              >
                Knowledge
              </div>
              <div
                onClick={() => handleTabClick("avatar")}
                className={`cursor-pointer ${
                  activeTab === "avatar"
                    ? "text-[#DCFF1C]"
                    : "text-gray-400 hover:text-[#DCFF1C]"
                } transition-colors`}
              >
                Avatar
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-gray-200 mb-8">PERSONALITY</h2>

            <div className="space-y-6">
              <h3 className="text-white mb-2">Template</h3>
              <p className="text-gray-500 text-sm">
                Start from a template personality for your Character
              </p>

              <div className="grid grid-cols-2 gap-4">
                {templates.map((template) => (
                  <label key={template.id} className="group cursor-pointer">
                    <input
                      type="radio"
                      name="template"
                      checked={selectedTemplate === template.id}
                      onChange={() => handleTemplateChange(template.id)}
                      className="hidden"
                    />
                    <div
                      className={`bg-[#121212] p-4 rounded-lg border ${
                        selectedTemplate === template.id
                          ? "border-[#DCFF1C]"
                          : "border-transparent"
                      } group-hover:bg-[#1C2B1E] transition-colors`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            selectedTemplate === template.id
                              ? "border-[#DCFF1C]"
                              : "border-gray-600"
                          } flex items-center justify-center`}
                        >
                          {selectedTemplate === template.id && (
                            <div className="w-2 h-2 rounded-full bg-[#DCFF1C]"></div>
                          )}
                        </div>
                        <h4 className="text-white">{template.title}</h4>
                      </div>
                      <p className="text-gray-500 text-sm">
                        {template.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mb-6"></div>
                  </label>
                ))}
                <button className="px-4 py-2 bg-[#DCFF1C] text-black rounded hover:bg-[#DCFF1C]/90 transition-colors">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

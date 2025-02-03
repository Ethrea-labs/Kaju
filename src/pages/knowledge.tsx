import Link from "next/link";
export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-16">
          {/* Sidebar */}
          <div className="w-48">
            <div className="text-white mb-6">Basic</div>
            <div className="space-y-4">
              <Link
                href="/personality"
                className="flex items-center gap-2 text-gray-400 hover:text-[#DCFF1C] transition-colors"
              >
                <span className="text-gray-400">Personality</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-[#1C2B1E] text-[#DCFF1C] rounded">
                  NEW
                </span>
              </Link>

              <div className="text-[#DCFF1C]">Knowledge</div>
              <div className="text-gray-400 hover:text-[#DCFF1C] transition-colors cursor-pointer">
                Avatar
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-gray-200 mb-8">KNOWLEDGE</h2>

            <div className="space-y-8">
              {/* Custom Knowledge Section */}
              <div>
                <h3 className="text-white mb-2">Custom Knowledge</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Link URLs or upload documents to enrich your character agent's
                  knowledge.
                </p>

                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Enter url..."
                    className="flex-1 bg-[#121212] rounded-lg px-4 text-white h-12 border-0 focus:outline-none focus:ring-1 focus:ring-[#DCFF1C] hover:bg-[#1C2B1E] transition-colors"
                  />
                  <button className="px-4 bg-white rounded-lg text-black hover:bg-gray-200 transition-colors">
                    IMPORT
                  </button>
                </div>

                {/* Upload Box */}
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-12 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      ↑
                    </div>
                    <p className="text-gray-400">Drag and Drop here</p>
                    <p className="text-gray-600 text-sm">or</p>
                    <button className="px-4 py-2 bg-[#00ffb4] rounded-lg text-black hover:bg-[#00ffb4]/90 transition-colors">
                      SELECT A FILE
                    </button>
                    <p className="text-gray-600 text-xs mt-4">
                      Supported Formats: PDF, MD, TXT (Max 4.5 MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Lorebook Section */}
              <div className="bg-[#121212] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white flex items-center gap-2">
                    Lorebook
                    <span className="w-4 h-4 rounded-full border border-gray-600 text-gray-600 flex items-center justify-center text-xs">
                      ?
                    </span>
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-6">
                  Lorebook entries act as a knowledge database for your
                  character.
                  <br />
                  You can add as many entries as you need.
                </p>

                {/* Entry */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>ENTRY #1</span>
                    <button className="text-lg">×</button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm block mb-2">
                        Keys
                      </label>
                      <input
                        type="text"
                        value="pikachu"
                        className="w-full bg-[#1C1C1C] rounded-lg px-4 text-white h-12 border-0 focus:outline-none focus:ring-1 focus:ring-[#DCFF1C] hover:bg-[#1C2B1E] transition-colors mb-2"
                      />
                      <input
                        type="text"
                        value="pikachu ai"
                        className="w-full bg-[#1C1C1C] rounded-lg px-4 text-white h-12 border-0 focus:outline-none focus:ring-1 focus:ring-[#DCFF1C] hover:bg-[#1C2B1E] transition-colors"
                      />
                      <button className="w-full h-12 mt-2 border border-dashed border-gray-700 text-gray-700 rounded-lg hover:text-[#DCFF1C] hover:border-[#DCFF1C] transition-colors">
                        +
                      </button>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm block mb-2">
                        Value
                      </label>
                      <textarea
                        className="w-full h-32 bg-[#1C1C1C] rounded-lg p-4 text-white border-0 focus:outline-none focus:ring-1 focus:ring-[#DCFF1C] hover:bg-[#1C2B1E] transition-colors resize-none"
                        defaultValue="Speedverse is a platform to go wild, entertain, and vibe with unstoppable energy."
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full h-12 mt-6 border border-dashed border-gray-700 text-gray-700 rounded-lg hover:text-[#DCFF1C] hover:border-[#DCFF1C] transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

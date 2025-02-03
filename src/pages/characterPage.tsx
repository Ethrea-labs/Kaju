import { useRouter } from "next/navigation";

export default function HoloWorldForm() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-16">
          {/* Sidebar */}
          <div className="w-48">
            <div className="text-[#DCFF1C] font-medium mb-6">Basic</div>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-2 hover:text-[#DCFF1C] transition-colors">
                <span>Personality</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-[#1C2B1E] text-[#DCFF1C] rounded">
                  BETA
                </span>
              </div>
              <div
                onClick={() => router.push("/knowledge")}
                className="hover:text-[#DCFF1C] transition-colors cursor-pointer"
              >
                Knowledge
              </div>
              <div className="hover:text-[#DCFF1C] transition-colors">
                Avatar
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-gray-200 mb-8">BASIC</h2>

            <div className="flex gap-12">
              {/* Avatar Box */}
              <div className="w-[320px] h-[320px] bg-[#121212] rounded-xl p-4">
                <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-[#1C2B1E] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute w-full h-full bg-gradient-to-b from-[#DCFF1C]/10 to-transparent animate-pulse"></div>
                    <div className="w-32 h-32 rounded-full bg-[#DCFF1C]/20"></div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 space-y-8">
                <div className="space-y-2">
                  <label className="block text-gray-500 text-sm">Name</label>
                  <div className="text-gray-600 text-xs">
                    Name for your character
                  </div>
                  <input
                    type="text"
                    defaultValue="Kaju Sama"
                    className="w-full h-12 bg-[#121212] rounded-lg px-4 text-white border-0 focus:outline-none focus:ring-1 focus:ring-[#DCFF1C] hover:bg-[#1C2B1E] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-500 text-sm">
                    Nickname
                  </label>
                  <div className="text-gray-600 text-xs">
                    The name your viewers can tag for conversations/txns
                  </div>
                  <input
                    type="text"
                    defaultValue="Kaju"
                    className="w-full h-12 bg-[#121212] rounded-lg px-4 text-white border-0 focus:outline-none focus:ring-1 focus:ring-[#DCFF1C] hover:bg-[#1C2B1E] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-500 text-sm">
                    Category
                  </label>
                  <div className="text-gray-600 text-xs">
                    Useful for making your character discoverable by others in
                    our platform
                  </div>
                  <div className="flex gap-2">
                    <select className="w-full h-12 bg-[#121212] rounded-lg px-4 text-white border-0 focus:outline-none focus:ring-1 focus:ring-[#DCFF1C] hover:bg-[#1C2B1E] transition-colors appearance-none">
                      <option>Gamer</option>
                      <option>Waifu</option>
                      <option>NSFW</option>
                    </select>
                    <button className="w-12 h-12 bg-[#121212] rounded-lg text-white hover:bg-[#1C2B1E] transition-colors flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-500 text-sm">
                    Short Bio
                  </label>
                  <div className="text-gray-600 text-xs">
                    The description displayed on the bio of your agent
                  </div>
                  <input
                    type="text"
                    defaultValue="ex. A hyperactive sorcerer with a wild grin."
                    className="w-full h-12 bg-[#121212] rounded-lg px-4 text-white border-0 focus:outline-none focus:ring-1 focus:ring-[#DCFF1C] hover:bg-[#1C2B1E] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-500 text-sm">Voice</label>
                  <div className="text-gray-600 text-xs">
                    How your character will sound when they speak
                  </div>
                  <select className="w-full h-12 bg-[#121212] rounded-lg px-4 text-white border-0 focus:outline-none focus:ring-1 focus:ring-[#DCFF1C] hover:bg-[#1C2B1E] transition-colors appearance-none">
                    <option>Select from below</option>
                    <option>Ryan Reynolds</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

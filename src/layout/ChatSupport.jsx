import { useState } from "react";
import { MessageCircle, Send, RotateCcw } from "lucide-react";
export default function ChatSupport() {
  const timeNow = new Date().toLocaleTimeString();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Box invite */}
      {!isOpen && (
        <div className="bg-white p-4 w-[240px] rounded-2xl">
          <p className="text-base text-gray-500">
            Quý phụ huynh cần tìm hiểu gì về Bluesun Acedamy ạ! Em sẵn sàng hỗ
            trợ đây ạ!
          </p>
        </div>
      )}

      {/* Box chat (dùng absolute để trượt không đẩy box khác) */}
      <div
        className={`absolute bottom-20 right-0 w-[340px] bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 transform transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "translate-y-10 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center gap-2 font-semibold text-startBlue">
          <span>🌟</span>
          Trò chuyện cùng Bluesun
        </div>

        {/* Nội dung chat */}
        <div className="px-4 py-3 space-y-2 text-sm max-h-[400px] md:h-[400px] overflow-y-auto">
          <div className="bg-yellow-50 text-gray-800 p-3 rounded-xl">
            <div className="text-[13px] leading-relaxed">
              <span className="font-bold text-startBlue">AI</span> Chào ba/mẹ 👋
              Mình là trợ lý ảo của Bluesun, Học viện Bluesun rất vui được đồng
              hành cùng bạn. Bạn muốn biết gì hôm nay?
            </div>
            <div className="text-[11px] text-right mt-1 text-gray-500">
              {timeNow}
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="border-t px-3 py-2 flex items-center gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-3 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-startBlue"
            placeholder="Type a message..."
          />
          <button className="p-2 text-startBlue hover:text-endBlue transition-transform hover:scale-110">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={toggleChat}
        className="relative w-14 h-14 cursor-pointer bg-startBlue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-startBlue/30 animate-ping z-0" />
        )}
        {isOpen ? (
          <RotateCcw className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, ArrowRight, RefreshCw } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
}

const SUGGESTIONS = [
  "Tell me about Sefed Studio",
  "What are Yared's core services?",
  "Show me some portfolio projects",
  "How can I contact Yared?"
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      text: "Hello! I'm Yata's AI Guide. I can help you explore Yared's portfolio, Sefed Studio, his cinematography gear, and custom development services. Ask me anything!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to bottom of chat only when user has started interacting
  useEffect(() => {
    if ((messages.length > 1 || isLoading) && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      // Build history for Gemini
      // Excluding the welcome message to keep payload focused
      const activeHistory = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.role,
          text: m.text
        }));

      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: activeHistory
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to communicate with AI Assistant.");
      }

      const data = await response.json();
      
      const modelMsg: Message = {
        id: `model-${Date.now()}`,
        role: "model",
        text: data.text || "I didn't receive a response. Please try asking again."
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      console.error("AI Assistant Error:", err);
      setError(err.message || "Something went wrong. Please check your network connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        role: "model",
        text: "Hello! I'm Yata's AI Guide. I can help you explore Yared's portfolio, Sefed Studio, his cinematography gear, and custom development services. Ask me anything!"
      }
    ]);
    setError(null);
  };

  // Safe and elegant text formatter for bold, bullets, links, etc.
  const renderMessageContent = (text: string) => {
    // Escape standard HTML tags
    let formatted = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Formatter for bold text: **text**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');

    // Formatter for markdown links: [text](url)
    formatted = formatted.replace(
      /\[(.*?)\]\((.*?)\)/g, 
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-red-400 hover:text-red-300 underline font-medium transition-colors">$1</a>'
    );

    // Formatter for raw URLs
    formatted = formatted.replace(
      /(?<!href=")(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-red-400 hover:text-red-300 underline font-medium transition-colors">$1</a>'
    );

    // Formatter for bullet points: starting with '* ' or '- '
    const lines = formatted.split("\n");
    const processedLines = lines.map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        return `<li class="ml-4 list-disc pl-1 mb-1.5 text-zinc-300 text-xs md:text-sm">${trimmed.substring(2)}</li>`;
      }
      return line ? `<p class="mb-2 text-zinc-300 leading-relaxed text-xs md:text-sm">${line}</p>` : "";
    });

    return (
      <div 
        className="space-y-1 text-xs md:text-sm"
        dangerouslySetInnerHTML={{ __html: processedLines.join("") }} 
      />
    );
  };

  return (
    <div 
      className="relative rounded-2xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-md flex flex-col justify-between overflow-hidden h-[540px] w-full"
    >
      {/* Header */}
      <div className="p-4 border-b border-white/[0.08] bg-black/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <h4 className="text-sm font-semibold tracking-tight text-white">
            Yata AI Partner Guide
          </h4>
        </div>
        {messages.length > 1 && (
          <button
            onClick={handleReset}
            title="Reset Chat"
            className="w-7 h-7 rounded-lg hover:bg-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
          >
            <RefreshCw size={12} />
          </button>
        )}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
              m.role === "user" 
                ? "bg-red-500/10 text-red-400 border border-red-500/10" 
                : "bg-white/[0.03] text-zinc-400 border border-white/[0.05]"
            }`}>
              {m.role === "user" ? <User size={12} /> : <Bot size={12} />}
            </div>
            
            <div className={`p-3 rounded-xl max-w-[80%] border ${
              m.role === "user"
                ? "bg-red-500/[0.06] border-red-500/10 text-zinc-100 rounded-tr-none"
                : "bg-white/[0.02] border-white/[0.04] text-zinc-300 rounded-tl-none shadow-md"
            }`}>
              {renderMessageContent(m.text)}
            </div>
          </div>
        ))}

        {/* Suggestions Overlay when no history or just started */}
        {messages.length === 1 && !isLoading && (
          <div className="pt-2 pb-1 space-y-2 animate-fade-in">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">Suggested Inquiries</span>
            <div className="grid grid-cols-1 gap-1.5">
              {SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(s)}
                  className="w-full text-left p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.08] text-xs transition-all duration-200 flex items-center justify-between group cursor-pointer focus:outline-none"
                >
                  <span>{s}</span>
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-red-500" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Typing Loader Indicator */}
        {isLoading && (
          <div className="flex gap-2.5 items-center">
            <div className="w-6 h-6 rounded-md bg-white/[0.03] text-zinc-400 border border-white/[0.05] flex items-center justify-center shrink-0">
              <Bot size={12} />
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-zinc-300 rounded-tl-none flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
            </div>
          </div>
        )}

        {/* Error Alert Display */}
        {error && (
          <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-red-400 text-xs text-center space-y-1">
            <p>{error}</p>
            <p className="text-[10px] opacity-70">Please check that the server possesses the GEMINI_API_KEY environment configuration.</p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Footer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputValue);
        }}
        className="p-3.5 border-t border-white/[0.08] bg-black/50 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          placeholder="Ask Sefed AI about services, gear, or projects..."
          className="flex-1 bg-white/[0.04] border border-white/[0.08] focus:border-red-500/40 focus:bg-white/[0.06] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none transition-all duration-200"
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all focus:outline-none focus:ring-0 cursor-pointer ${
            inputValue.trim() && !isLoading
              ? "bg-red-500 text-white hover:bg-red-600 shadow-md"
              : "bg-white/[0.02] text-zinc-600 border border-white/[0.04]"
          }`}
        >
          <Send size={13} className={inputValue.trim() && !isLoading ? "translate-x-0.5" : ""} />
        </button>
      </form>
    </div>
  );
}

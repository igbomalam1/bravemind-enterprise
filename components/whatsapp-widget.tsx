"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (!message.trim()) return

    const encodedMessage = encodeURIComponent(`Hello Bravemind Enterprise!\n\n${message}`)

    window.open(`https://wa.me/2347033963154?text=${encodedMessage}`, "_blank")
    setMessage("")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      <div
        className={cn(
          "absolute bottom-16 right-0 w-80 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
        )}
      >
        {/* Header */}
        <div className="bg-[#25D366] p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-sm">Chat with us</h3>
            <p className="text-xs text-white/80">Typically replies within minutes</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-4 bg-muted/50">
          {/* Welcome Message */}
          <div className="bg-card p-3 rounded-lg rounded-tl-none shadow-sm mb-4 max-w-[85%]">
            <p className="text-sm text-foreground">
              Hello! 👋 Welcome to Bravemind Enterprise. How can we help you today?
            </p>
            <p className="text-xs text-muted-foreground mt-1">Just now</p>
          </div>

          {/* Input Area */}
          <div className="flex gap-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="min-h-[80px] resize-none bg-card border-border"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
            />
          </div>
          <Button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-full mt-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
          >
            <Send className="w-4 h-4 mr-2" />
            Send via WhatsApp
          </Button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg flex items-center justify-center transition-all duration-300",
          !isOpen && "animate-pulse",
        )}
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </div>
  )
}

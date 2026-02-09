import { useState, useRef, useEffect } from 'react'
import './App.css'
import VPOperationsContent from './components/VPOperationsContent'
import VendorSummaryContent from './components/VendorSummaryContent'
import CFOContent from './components/CFOContent'
import TypewriterText from './components/TypewriterText'

const VIEWS = {
  vp: {
    id: 'vp',
    subtitle: 'VP Operations · Delivery Intelligence',
    accent: '#06b6d4',
    accentEnd: '#0891b2',
    BotContent: VPOperationsContent,
  },
  vendor: {
    id: 'vendor',
    subtitle: 'COO View · Vendor Intelligence',
    accent: '#4f8cff',
    accentEnd: '#2563eb',
    BotContent: VendorSummaryContent,
  },
  cfo: {
    id: 'cfo',
    subtitle: 'CFO View · Financial Intelligence',
    accent: '#8b5cf6',
    accentEnd: '#6d28d9',
    BotContent: CFOContent,
  },
}

function detectView(text) {
  const t = text.trim().toLowerCase()
  if (!t) return null
  if (/\bvendor\b/.test(t) || /\bcoo\b/.test(t)) return 'vendor'
  if (/\bfinancial\b/.test(t) || /\brevenue\b/.test(t) || /\bprofit\b/.test(t) || /\bcash\s*flow\b/.test(t) || /\bcfo\b/.test(t)) return 'cfo'
  if (/\bdelivery\b/.test(t) || /\boperations\b/.test(t) || /\bsla\b/.test(t) || /\bescalation\b/.test(t)) return 'vp'
  return null
}

const PLACEHOLDER = 'Ask about delivery performance, vendor summary, or financial performance…'
const PROCESSING_DURATION_MS = 1400

function ProcessingBubble() {
  return (
    <div className="msg-row msg-row-bot">
      <div className="avatar avatar-bot" aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
        </svg>
      </div>
      <div className="msg bot processing-bubble">
        <span className="processing-text">Processing your request</span>
        <span className="processing-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </span>
      </div>
    </div>
  )
}

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const chatEndRef = useRef(null)
  const lastBot = [...messages].reverse().find((m) => m.role === 'bot')
  const lastView = lastBot ? lastBot.view : null
  const config = lastView ? VIEWS[lastView] : VIEWS.vp

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', config.accent)
    document.documentElement.style.setProperty('--accent-end', config.accentEnd)
  }, [config.accent, config.accentEnd])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isProcessing])

  function handleSend(e) {
    e?.preventDefault()
    const text = input.trim()
    if (!text) return
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setIsProcessing(true)

    const view = detectView(text) || 'vp'
    const viewConfig = VIEWS[view]

    setTimeout(() => {
      setIsProcessing(false)
      setMessages((prev) => [
        ...prev,
        { role: 'bot', view, BotContent: viewConfig.BotContent, subtitle: viewConfig.subtitle },
      ])
    }, PROCESSING_DURATION_MS)
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Insights Sphere</h1>
          <span className="header-subtitle">
            {lastView ? VIEWS[lastView].subtitle : 'Ask about delivery, vendor, or financial insights'}
          </span>
        </div>
      </header>

      <div className="chat">
        {messages.length === 0 && (
          <div className="welcome-start">
            <div className="welcome-hero">
              <img src="/insights-sphere-logo.png" alt="Insights Sphere" className="welcome-image" />
            </div>
            <p className="welcome-prompt">Ask me anything. Try:</p>
            <ul className="welcome-list">
              <li>Show me delivery performance for the last 3 years</li>
              <li>Show me my vendor summary based on the past 2 years of data</li>
              <li>Show me our financial performance for the last 3 years</li>
            </ul>
          </div>
        )}
        {messages.map((m, i) =>
          m.role === 'user' ? (
            <div key={i} className="msg-row msg-row-user">
              <div className="msg user">
                <TypewriterText text={m.text} />
              </div>
            </div>
          ) : (
            <div key={i} className="msg-row msg-row-bot">
              <div className="msg bot msg-reveal">
                <m.BotContent />
              </div>
            </div>
          )
        )}
        {isProcessing && <ProcessingBubble />}
        <div ref={chatEndRef} />
      </div>

      <footer className="footer">
        <form className="footer-form" onSubmit={handleSend}>
          <input
            type="text"
            placeholder={PLACEHOLDER}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend(e)}
            aria-label="Chat input"
          />
          <button type="submit">Send</button>
        </form>
      </footer>
    </div>
  )
}

export default App

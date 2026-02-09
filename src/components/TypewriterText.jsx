import { useState, useEffect } from 'react'

const CHAR_DELAY_MS = 18

export default function TypewriterText({ text }) {
  const [visibleLength, setVisibleLength] = useState(0)

  useEffect(() => {
    if (visibleLength >= text.length) return
    const t = setTimeout(() => setVisibleLength((n) => Math.min(n + 1, text.length)), CHAR_DELAY_MS)
    return () => clearTimeout(t)
  }, [text.length, visibleLength])

  return <>{text.slice(0, visibleLength)}</>
}

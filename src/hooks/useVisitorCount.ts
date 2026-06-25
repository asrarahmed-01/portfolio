import { useEffect, useState } from 'react'

/**
 * Visitor counter using localStorage for persistence.
 * For production, swap the localStorage logic with a real API call
 * (e.g. a Vercel Edge Function, Supabase, or a free counter service like api.countapi.xyz)
 */
export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null)
  const [isNew, setIsNew] = useState(false)

  useEffect(() => {
    const STORAGE_KEY = 'portfolio-visitor-count'
    const VISITOR_KEY = 'portfolio-visited'

    // Simulate fetch from a counter backend
    // TODO: Replace with real API call:
    // const res = await fetch('https://api.countapi.xyz/hit/yournamespace/visits')
    // const data = await res.json()
    // setCount(data.value)

    const stored = parseInt(localStorage.getItem(STORAGE_KEY) ?? '0', 10)
    const hasVisited = localStorage.getItem(VISITOR_KEY)

    if (!hasVisited) {
      const newCount = stored + 1
      localStorage.setItem(STORAGE_KEY, String(newCount))
      localStorage.setItem(VISITOR_KEY, 'true')
      setCount(newCount)
      setIsNew(true)
    } else {
      setCount(stored)
    }
  }, [])

  return { count, isNew }
}

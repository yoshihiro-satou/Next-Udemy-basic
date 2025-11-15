'use client'
import { useState } from 'react'
export default function CliientComponent() {
  const[ count, setCount ] = useState(0)
  console.log('Client')
  return (
    <div>
      クライアント
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  )
}

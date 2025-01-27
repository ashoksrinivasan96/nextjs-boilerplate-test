"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ApiButton() {
  const [response, setResponse] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/sampleRoute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "Hello from the client!" }),
      })
      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      console.error("Error:", error)
      setResponse("An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Make API Call"}
      </Button>
      {response && <pre className="bg-gray-100 p-4 rounded-md overflow-auto max-w-md">{response}</pre>}
    </div>
  )
}


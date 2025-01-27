import ApiButton from "./components/ApiButton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">API Test Page</h1>
      <ApiButton />
    </main>
  )
}


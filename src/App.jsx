import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-center container bg-red-500'>
        
        Click on the Vite and React logos to learn more
      </div>
      <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
    </div>
      </>
  )
}

export default App

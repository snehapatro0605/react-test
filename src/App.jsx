import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <p class="text-blue-500">Integrating tailwindcss to react project</p>

      <div class="flex gap-5 max-w-sm bg-white rounded-xl mt-8">
        <Card title="Europe" imageUrl="https://images.pexels.com/photos/4061248/pexels-photo-4061248.jpeg"/>
        <Card title="Dog" imageUrl="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg"/>
        <Card />
      </div>
    </div>
    </>
  )
}

export default App

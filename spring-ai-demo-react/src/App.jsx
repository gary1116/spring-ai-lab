import { useState } from 'react'
import './App.css'

function App() {

  const [activeTab, setActiveTab] = useState('image');

  const handleClick=(activeTab)=>{


  }

  return (
    <div className='min-h-screen flex flex-col items-center'>
    <div className='flex gap-2 m-2 bg-blue-600 text-white rounded-lg'>
      <button className='text-2xl font-mono m-2 cursor-pointer hover:border-cyan-950 border-blue-400 border-3 p-2 rounded-lg' onClick={() => setActiveTab('image')}>
        Image Generator</button>
      <button className='text-2xl font-mono m-2 cursor-pointer border-blue-400 hover:border-cyan-950 border-3 p-2 rounded-lg' onClick={() => setActiveTab('chat')}>
        Chat</button>
      <button className='text-2xl font-mono m-2 cursor-pointer border-blue-400 hover:border-cyan-950 border-3 p-2 rounded-lg' onClick={() => setActiveTab('recipe')}>
        Recipe Generator</button>
    </div>
    <div>
      {activeTab === 'image' && <h3>Image Generator</h3>}
      {activeTab === 'chat' && <h3>Chat</h3>}
      {activeTab === 'recipe' && <h3>Recipe Generator</h3>}

    </div>
    </div>
  )
}

export default App

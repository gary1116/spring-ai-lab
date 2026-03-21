import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ImageGenerator from './ImageGenerator';
import Chat from './Chat';
import RecipeGenerator from './RecipeGenerator';
import Home from './Home';

const MainDashboard = () => {

  return (
    <Router>

      <div className='min-h-screen flex flex-col items-center'>

        {/* Navbar */}
        <div className='flex gap-4 m-4 bg-blue-600 p-3 rounded-lg'>

          <NavLink 
            to="/image-generator" 
            className={({ isActive }) =>
    `text-lg font-mono p-2 rounded-lg transition border-2 
    ${isActive   ? 'bg-cyan-400 text-gray-500 border-gray-900'   : 'hover:bg-blue-700'}`
  }
          >
            Image Generator
          </NavLink>

          <NavLink 
            to="/chat" 
            className={({ isActive }) =>
    `text-lg font-mono p-2 rounded-lg transition border-2 
    ${isActive   ? 'border-black bg-lime-500 text-emerald-800'   : 'hover:bg-blue-700'}`
  }
          >
            Chat
          </NavLink>

          <NavLink 
            to="/recipe-generator" 
            className={({ isActive }) =>
    `text-lg font-mono p-2 rounded-lg transition border-2 
    ${isActive   ? 'border-black bg-amber-500 text-fuchsia-700'   : 'hover:bg-blue-700'}`
  }
          >
            Recipe Generator
          </NavLink>

        </div>

        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/image-generator' element={<ImageGenerator />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/recipe-generator' element={<RecipeGenerator />} />
        </Routes>

      </div>

    </Router>
  );
}

export default MainDashboard;
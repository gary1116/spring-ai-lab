import axios from 'axios';
import { useState } from 'react'

const RecipeGenerator = () => {

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    try {
      setLoader(true)
      setError('');
      setResponse('');
      const Response = await axios.get('http://localhost:8080/recipe-creator',
        { params: { ingredient: prompt } }
      )
      setResponse(Response.data);
    } catch (error) {
      setError(
        error.response?.data || 'An Error Occurred while connecting with API'
      )
      console.error('Error Message' + error)
    } finally {
      setLoader(false)
    }
  }

  return (
    <div className='flex gap-5 flex-col items-center justify-center flex-1 w-full px-4'>

      {loader &&
        <h1 className='animate-pulse text-xl text-amber-600'>Thinking 🤔</h1>
      }

      {error &&
        <h1 className='text-amber-600'>{error}</h1>
      }


      {!loader && response ?
        <div className="m-4 p-2 border-2 rounded-lg bg-gray-300 border-black max-h-[400px] overflow-y-auto">
          <h1 className='text-2xl text-amber-900 whitespace-pre-wrap text-left leading-relaxed'>{response}</h1>
        </div> :
        <div></div>

      }

      <div className=" items-center justify-center gap-2 flex w-full">
        <input type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Ask a Question'
          className='border-3 rounded-lg p-2 border-gray-500 w-3/4'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClick();
            }
          }}
        />
        <button className='cursor-pointer m-2 border-2 rounded-lg p-2 bg-blue-500 text-white' onClick={() => handleClick()}>Enter</button>
      </div>
    </div>
  )
}

export default RecipeGenerator

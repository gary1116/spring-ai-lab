import {useState} from 'react';
import axios from 'axios';


const ImageGenerator = () => {
    const [prompt,setPrompt]=useState('');
    const [imageUrl,setImageUrl]=useState('');

    const handleClick=async ()=>{
        try{
        const response = await axios.get('http://localhost:8080/generate-image', {
        params: { prompt }});
        console.log(response.data);
        setImageUrl(response.data);

        }catch(error){
            console.error('Error generating image',error);
        }

    }

  return (

    <div className="flex gap-5 flex-col items-center justify-center flex-1 w-full px-4">

    {imageUrl&&<div className="border w-1/2 h-1/2"><img src={imageUrl} alt={`Generated ${prompt}`}/></div>}
    <div className=" items-center justify-center gap-2 flex w-full">
    <input type="text"
    value={prompt}
    onChange={(e)=>setPrompt(e.target.value)}
    placeholder='please Enter a prompt for image generation'
    className='border-3 rounded-lg p-2 border-gray-500 w-3/4' 
    />
    <button className='cursor-pointer' onClick={()=>handleClick()}>Enter</button>
    </div>
    </div>
  )
}

export default ImageGenerator

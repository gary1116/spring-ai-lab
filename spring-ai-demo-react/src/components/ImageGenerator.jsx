import { useState } from 'react';
import axios from 'axios';


const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');


    const handleClick = async () => {
        try {
            setLoader(true);
            const response = await axios.get('http://localhost:8080/generate-image', {
                params: { prompt }
            });
            console.log(response.data);
            setImageUrl(response.data);
        } catch (error) {
            console.error('Error generating image', error);
            setError(
                error.response?.data || 'Something went wrong while generating the image.'
            );
        } finally {
            setLoader(false);
        }

    }

    return (

        <div className="flex gap-5 flex-col items-center justify-center flex-1 w-full px-4">

            {loader && (
                <div className="text-lg font-semibold text-blue-600 animate-pulse">
                    Generating image through animate-pulse...
                </div>
            )}

            {error && (
                <div className="w-1/2 rounded-lg border border-red-500 bg-red-100 text-red-700 p-3 text-center">
                    {error}
                </div>
            )}

            {imageUrl && !loader && (
                <div className="border w-1/2 h-1/2 p-2 rounded-lg">
                    <img
                        src={imageUrl}
                        alt={`Generated ${prompt}`}
                        className="rounded-lg w-full"
                    />
                </div>
            )}
            <div className=" items-center justify-center gap-2 flex w-full">
                <input type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder='please Enter a prompt for image generation'
                    className='border-3 rounded-lg p-2 border-gray-500 w-3/4'
                />
                <button className='cursor-pointer m-2 border-2 rounded-lg p-2 bg-blue-500 text-white' onClick={() => handleClick()}>Enter</button>
            </div>
        </div>
    )
}

export default ImageGenerator

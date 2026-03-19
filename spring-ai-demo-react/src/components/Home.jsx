import React from 'react'

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-1 w-full px-4">

      <div className="max-w-2xl border border-gray-400 rounded-xl p-6 bg-cyan-600 shadow-lg text-center">

        <h1 className="text-3xl font-bold mb-4">
          Welcome to Spring AI Lab 🚀
        </h1>

        <p className="text-lg leading-relaxed text-gray-100">
          Hello there! This is <span className="font-semibold text-white">Spring AI Lab</span>, 
          a project showcasing multiple AI-powered functionalities built using Spring Boot and React.
          <br /><br />
          You can explore features like generating images from text prompts, chatting with AI, 
          and creating recipes based on ingredients.
          <br /><br />
          Go ahead and click one of the options above to try it out!
        </p>

      </div>

    </div>
  )
}

export default Home
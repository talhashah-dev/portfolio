import React from 'react'

function Projects() {
  return (
    <div className="flex flex-wrap justify-around gap-y-10">

      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 shadow-2xl hover:shadow-indigo-500/50 transition-all">
        <img class="w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.photographylife.com%2Fwp-content%2Fuploads%2F2014%2F09%2FNikon-D750-Image-Samples-2.jpg&f=1&nofb=1&ipt=7521329afac7a10e9f5979f76ec2578c323c16a1c572149427dc40225ebf8b56&ipo=images" alt="Sunset in the mountains" />
        <div class="px-4">
          <div class="font-bold text-xl mb-1 mt-1 text-black">Chat App</div>
          <p class="text-gray-700 text-base">
            Chatify a secure and fun place to hoagout with your friends!
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">react</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">firebase</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">tailwand</span>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 shadow-2xl hover:shadow-indigo-500/50 transition-all">
        <img class="w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.photographylife.com%2Fwp-content%2Fuploads%2F2014%2F09%2FNikon-D750-Image-Samples-2.jpg&f=1&nofb=1&ipt=7521329afac7a10e9f5979f76ec2578c323c16a1c572149427dc40225ebf8b56&ipo=images" alt="Sunset in the mountains" />
        <div class="px-4">
          <div class="font-bold text-xl mb-1 mt-1 text-black">Blog App</div>
          <p class="text-gray-700 text-base">
            Write your thoughts and publish them online on a secure and easy-to-use platform.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">html</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">css</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">javascript</span>
        </div>
      </div>

    </div>
  )
}

export default Projects
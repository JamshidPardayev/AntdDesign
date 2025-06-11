import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
  return (
    <div>
      <div className="flex p-4 gap-4 flex-wrap">
        <Link
          to={"/"}
          className="h-[50px] border border-violet-700 text-gray-700 bg-violet-300 hover:bg-violet-400 duration-300 hover:text-white font-bold text-center content-center rounded-[10px] w-[150px] shadow-[0px_0px_2px_2px_#8a2be2]"
        >
          Back Home
        </Link>
        <Link
          to={"/component"}
          className="h-[50px] border border-violet-700 text-gray-700 bg-violet-300 hover:bg-violet-400 duration-300 hover:text-white font-bold text-center content-center rounded-[10px] w-[150px] shadow-[0px_0px_2px_2px_#8a2be2]"
        >
          Antd Component
        </Link>
      </div>
    </div>
  )
}

export default MyPage

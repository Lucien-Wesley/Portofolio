import React from 'react'

const Etude = ({etude, formation,annee}) => {
  return (
    <div className='p-2 flex flex-row gap-2 items-center w-full'>
        <div className="h-10 w-10 bg-red-300"></div>
        <div className="w-full">
            <div className="font-bold text-lg">{etude}</div>
            <div className="flex flex-row justify-between"><div className="">{formation}</div><div className="">{annee}</div></div>
        </div>
    </div>
  )
}

export default Etude
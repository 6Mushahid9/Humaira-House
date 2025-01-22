import React from 'react'

const Gift = () => {
  return (
    <div className="hero bg-base-200 min-h-max py-10">
        <div className="hero-content flex-col lg:flex-row-reverse text-[#eae6e8]">
            <img
            src="/gift2.jpg"
            className="sm:max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-2xl md:text-5xl font-bold">The Perfect Gift: A Bouquet of Elegance</h1>
            <p className="py-6">
                Looking for a unique and meaningful gift? Introducing our special bouquet gift concept, where we craft a beautiful bouquet made of luxurious abayas or hijabs for those who will wear them for their first time.
            </p>
            <button className="btn bg-[#642b3a] text-white">Order Your Bouquet Now</button>
            </div>
        </div>
    </div>
  )
}

export default Gift

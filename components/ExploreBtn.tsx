'use client'

import Image from "next/image"

const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mx-auto mt-7" onClick={()=> console.log("click me")}>
        <a href="#events">
            explore Events
            <Image src='/icons/arrow-down.svg' alt='arrow-down' width={24} height={24}/>
        </a>
    </button>
  )
}

export default ExploreBtn
import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='border-2 border-red-500 padding-container
      max-container w-full pb-24'>
      <Image
        src='/camp.svg' alt='map' width={50} height={50}
      />
      </div>
    </section>
  )
}

export default Guide
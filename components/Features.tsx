import Image from 'next/image'
import React from 'react'
import { FEATURES } from '@/constants'

const Features = () => {
  return (
    <section className='flex-col flexCenter
    overflow-hidden bg-feature-bg bg-center no-repeat py-24'>
      <div className='max-container padding-container relative w-full
      flex justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src='/phone.png'
            alt='phone'
            width={440}
            height={1000}
            className='feature-phone'
            />
        </div>

        <div className='z-20 flex flex-col w-full lg:w-[60%]'>
          <div className='relative'>
            <Image
              className='left-[0px] top-[-30px] w-10 lg:w-[50px]'
              src='/camp.svg'
              alt='camp'
              width={50}
              height={50}
            />
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20
          lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeatureItem 
              title={feature.title}
              key={feature.title}
              icon={feature.icon}
              description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
}
const FeatureItem = ({ title, description, icon }: FeatureItem) => {
  return (
    <li className='flex flex-1 w-full flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-purple-50'>
        <Image
          src={icon}
          alt='map'
          width={28}
          height={28}
        />
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
        {title}
      </h2>
      <p className='regular-16 mt-5 bg-white/80'>
        {description}
      </p>
    </li>
  )
}

export default Features
import { PEOPLE_URL } from '@/constants'
import Image from "next/image";

interface TourProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const TourSite = ({ backgroundImage, title, subtitle, peopleJoined }: TourProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} 
    bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between
      p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-purple-50 p-4">
            <Image 
              src='/folded-map.svg'
              alt='map'
              height={28}
              width={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-20 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>

        </div>

      </div>
    </div>
  )
}

const Tour = () => {
  return (
    <section className='border border-green-500 2xl:max-container
    relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start
      justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <TourSite 
          backgroundImage='bg-bg-img-1'
          title='Mata Jitu Waterfall'  
          subtitle='Sumbawa, Labuan Aji'  
          peopleJoined='60+ Joined'  
        />
        <TourSite 
          backgroundImage='bg-bg-img-2'
          title='Takat Sagele'  
          subtitle='Sumbawa, Labuan Aji'  
          peopleJoined='70+ Joined'
        />
      </div>
    </section>
  )
}

export default Tour
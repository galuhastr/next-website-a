import Features from '@/components/Features'
import GetApp from '@/components/GetApp'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'
import Tour from '@/components/Tour'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <Tour />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}

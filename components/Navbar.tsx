import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexbetween max-container
    padding-container relative z-30 py-5">
    <Link href="/">
        <Image src="/trip-logo.svg" alt="logo" width={74} height={24}/>
    </Link>
    </nav>
  )
}

export default Navbar
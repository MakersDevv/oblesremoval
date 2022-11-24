import Link from "next/link";

export default function NavBar(){
  return (
    <nav>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About Us</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </nav>
  )
}
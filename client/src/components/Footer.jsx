import React from 'react'
import { Instagram, Youtube, Facebook } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#642b3a] text-[#eae6e8] rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Youtube />
          <Facebook />
          <Instagram />
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Humaira House</p>
        <p>Designed and Developed by MUSAHID KHISAL ANSARI</p>
      </aside>
  </footer>
  )
}

export default Footer
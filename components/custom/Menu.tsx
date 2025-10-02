'use client'
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
    const [selected, setSelected] = useState("Home");
    const [links, setLinks] = useState([
    {
        name: "Home",
        href: "/",
    },
    
    {
        name: "All posts",
        href: "/all-posts",
    },
    
    {
        name: "Write",
        href: "/write",
    },
    ])

  return (
    <div className="flex flex-row gap-4 items-center justify-center bg-blue-100 border border-blue-300 rounded-full px-3 py-1">
      {
        links.map((link, index) => (
          <Link 
          href={link.href} 
          className={`px-6 py-2 ${selected === link.name ? "bg-black text-white rounded-full" : ""}`} 
          onClick={() => setSelected(link.name)}
          key={index}
          >{link.name}</Link>
        ))
      }
      
    </div>
  );
}
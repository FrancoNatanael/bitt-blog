"use client";
import Link from "next/link";
import { Ref, useRef, useState } from "react";
import { motion } from "motion/react";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

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
  ]);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  } as Position);

  return (
    <div
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex flex-row gap-4 items-center justify-center bg-blue-100 border border-blue-300 rounded-full px-3"
    >
      {links.map((link, index) => (
        <Tab
          key={index}
          link={link}
          onClick={setSelected}
          setPosition={setPosition}
        >
          {link.name}
        </Tab>
      ))}
      <Cursor position={position}></Cursor>
    </div>
  );
}

const Tab = ({
  children,
  onClick,
  link,
  setPosition,
}: {
  children: any;
  onClick: (name: string) => void;
  link: { name: string; href: string };
  setPosition: (position: Position) => void;
}) => {
  const ref: Ref<HTMLAnchorElement> = useRef(null);

  return (
    <Link
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      href={link.href}
      className="relative z-10 block cursor-pointer px-3 py-1 text-xs text-white mix-blend-difference md:px-5 md:py-2 md:text-base"
      onClick={() => onClick(link.name)}
    >
      {children}
    </Link>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-0 h-5 rounded-full bg-[var(--blue-900)] md:h-8"
    ></motion.div>
  );
};

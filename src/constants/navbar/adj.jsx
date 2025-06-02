// code till proper fixing of 3 converting of Navbar, visible , footer

"use client";


import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import React, { useState } from "react";
import { Navbar } from "../../components/Navbar"

export const NavbarUI = ({ children, className, isFooter }) => {
  {
    /*  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

*/
  }
  return (
    <motion.div
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      // className={["sticky inset-x-0 top-20 z-40 w-full", className]
      className={[
        "inset-x-0 z-40 w-full",
        isFooter ? "fixed bottom-0" : "sticky top-20",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible, isFooter }) => {
  // Layout logic
  let animate = {};
  let navBodyClass = "";
  let style = {};
  if (isFooter) {
    // Footer: horizontal row, not fixed to top, no full height, no fixed position
    // animate = {
    //   top: "auto",
    //   left: "0",
    //   position: "relative",
    //   width: "100%",
    //   height: "auto",
    //   borderRadius: "0",
    //   background: "transparent",
    //   boxShadow: "none",
    //   y: 0,
    // };
    // navBodyClass =
    //   "flex flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-2";
    // style = { minWidth: "800px" };
    animate = {
      top: "auto",
      bottom: 0,
      position: "fixed",
      width: "100%",
      height: "auto",
      borderRadius: "0",
      background: "var(--footer-bg)",
      boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      y: 0,
    };
    navBodyClass =
      "flex flex-row items-center justify-between w-full px-4 py-3";
  } else if (visible) {
    // Sidebar/dashboard
    animate = {
      left: 0,
      top: 0,
      backdropFilter: "blur(10px)",
      position: "fixed",
      width: "15vw",
      height: "100vh",
      borderRadius: "1.5rem",
      boxShadow:
        "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
      y: 0,
    };
    navBodyClass =
      "fixed left-0 top-0 z-[60] flex flex-col gap-6 items-start justify-start rounded-3xl bg-transparent p-6 shadow-xl h-screen transition-all";
    style = {};
  } else {
    // Default top navbar
    animate = {
      top: "5px",
      position: "relative",
      width: "100%",
      height: "auto",
      borderRadius: "9999px",
      boxShadow: "none",
      background: "transparent",
      y: 0,
    };
    navBodyClass =
      "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent";
    style = { minWidth: "800px" };
  }
  return (
    <motion.div
      animate={animate}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 25,
      }}
      style={style}
      className={[navBodyClass, className].filter(Boolean).join(" ")}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  visible,
  isFooter,
  onItemClick,
}) => {
  const [hovered, setHovered] = useState(null);

  let navItemsClass = "";
  if (isFooter) {
    // navItemsClass = "flex flex-row items-center justify-center gap-6 w-full";
    navItemsClass = "flex flex-row items-center justify-center gap-4";
  } else if (visible) {
    navItemsClass = "flex flex-col items-start gap-5 py-4 px-2 rounded-2xl";
  } else {
    navItemsClass =
      "hidden lg:flex flex-row flex-1 items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800";
  }

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={[navItemsClass, className].filter(Boolean).join(" ")}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={[
            "relative px-4 py-2 text-neutral-600 dark:text-neutral-300 transition-all",
            visible && !isFooter
              ? "w-full rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800"
              : // : "",
              isFooter
              ? "text-sm hover:text-blue-500"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          key={`link-${idx}`}
          href={item.link}
        >
          {/* {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className={[
                "absolute inset-0 h-full w-full rounded-full",
                visible && !isFooter
                  ? "bg-gray-100 dark:bg-neutral-800"
                  : "bg-gray-100 dark:bg-neutral-800",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          )} */}
          {hovered === idx && !isFooter && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "20px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={[
        "relative z-50 mx-auto bg-red-500 flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparen px-0 py-2 lg:hidden",
        visible ? "bg-white/80 dark:bg-neutral-950/80" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={[
        "flex lg:hidden w-full flex-row px-5 items-center justify-between",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={[
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">Startup</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={[baseStyles, variantStyles[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
};

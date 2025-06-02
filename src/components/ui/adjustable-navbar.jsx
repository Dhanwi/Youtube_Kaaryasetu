// "use client";
// import { IconMenu2, IconX } from "@tabler/icons-react";
// import { motion, AnimatePresence } from "motion/react";

// import React, { useState } from "react";

// export const NavbarUI = ({ children, className, isFooter }) => {
//   {
//     /*  const ref = useRef(null);
//   const { scrollY } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const [visible, setVisible] = useState(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (latest > 60) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   });

// */
//   }
//   return (
//     <motion.div
//       // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
//       // className={["sticky inset-x-0 top-20 z-40 w-full", className]
//       className={[
//         "inset-x-0 z-40 w-full",
//         isFooter ? "fixed bottom-0" : "sticky top-20",
//         className,
//       ]
//         .filter(Boolean)
//         .join(" ")}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export const NavBody = ({ children, className, visible, isFooter }) => {
//   // Layout logic
//   let animate = {};
//   let navBodyClass = "";
//   let style = {};
//   if (isFooter) {
//     // Footer: horizontal row, not fixed to top, no full height, no fixed position
//     // animate = {
//     //   top: "auto",
//     //   left: "0",
//     //   position: "relative",
//     //   width: "100%",
//     //   height: "auto",
//     //   borderRadius: "0",
//     //   background: "transparent",
//     //   boxShadow: "none",
//     //   y: 0,
//     // };
//     // navBodyClass =
//     //   "flex flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-2";
//     // style = { minWidth: "800px" };
//     animate = {
//       top: "auto",
//       bottom: 0,
//       position: "fixed",
//       width: "100%",
//       height: "auto",
//       borderRadius: "0",
//       background: "var(--footer-bg)",
//       boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
//       y: 0,
//     };
//     navBodyClass =
//       "flex flex-row items-center justify-between w-full px-4 py-3";
//   } else if (visible) {
//     // Sidebar/dashboard with neon/black theme and animated border
//     animate = {
//       left: 0,
//       top: 0,
//       backdropFilter: "blur(10px)",
//       position: "fixed",
//       width: "12vw",
//       height: "100vh",
//       borderRadius: "1.5rem",
//       boxShadow:
//         "0 0 40px 1px #00fff7, 0 0 8px 8px #0ff, 0 0 0 5px #222a35, 0 0 8px 2px #0ff, 0 0 32px 30px #000 inset",
//       y: 0,
//     };
//     navBodyClass = [
//       "fixed left-0 top-0 z-[60] flex flex-col gap-6 items-start justify-start p-6 h-screen transition-all",
//       "bg-gradient-to-b from-black via-[#0f2027] to-[#232526]",
//       "border-[3px] border-solid border-transparent rounded-3xl",
//       "neon-animated-border",
//     ].join(" ");
//     style = {
//       "--neon-border": "linear-gradient(120deg, #00fff7, #ff00ea, #00fff7 80%)",
//       boxShadow:
//         "0 0 40px 4px #00fff7, 0 0 80px 8px #0ff, 0 0 0 4px #222a35, 0 0 8px 2px #0ff, 0 0 32px 8px #000 inset",
//       borderImage: "linear-gradient(120deg, #00fff7, #ff00ea, #00fff7 80%) 1",
//       animation: "neon-border-move 2s linear infinite",
//     };
//     // Neon animated border keyframes (inject into global CSS if not present)
//   } else {
//     // Default top navbar
//     animate = {
//       top: "5px",
//       position: "relative",
//       width: "100%",
//       height: "auto",
//       borderRadius: "9999px",
//       boxShadow: "none",
//       background: "transparent",
//       y: 0,
//     };
//     navBodyClass =
//       "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent";
//     style = { minWidth: "800px" };
//   }
//   return (
//     <motion.div
//       animate={animate}
//       transition={{
//         type: "spring",
//         stiffness: 150,
//         damping: 25,
//       }}
//       style={style}
//       className={[navBodyClass, className].filter(Boolean).join(" ")}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export const NavItems = ({
//   items,
//   className,
//   visible,
//   isFooter,
//   onItemClick,
// }) => {
//   const [hovered, setHovered] = useState(null);

//   let navItemsClass = "";
//   if (isFooter) {
//     // navItemsClass = "flex flex-row items-center justify-center gap-6 w-full";
//     navItemsClass = "flex flex-row items-center justify-center gap-4";
//   } else if (visible) {
//     navItemsClass = "flex flex-col items-start gap-5 py-4 px-2 rounded-2xl";
//   } else {
//     navItemsClass =
//       "hidden lg:flex flex-row flex-1 items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800";
//   }

//   return (
//     <motion.div
//       onMouseLeave={() => setHovered(null)}
//       className={[navItemsClass, className].filter(Boolean).join(" ")}
//     >
//       {items.map((item, idx) => (
//         <a
//           onMouseEnter={() => setHovered(idx)}
//           onClick={onItemClick}
//           className={[
//             "relative px-4 py-2 text-neutral-600 dark:text-neutral-300 transition-all",
//             visible && !isFooter
//               ? "w-full rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800"
//               : // : "",
//               isFooter
//               ? "text-sm hover:text-blue-500"
//               : "",
//           ]
//             .filter(Boolean)
//             .join(" ")}
//           key={`link-${idx}`}
//           href={item.link}
//         >
//           {/* {hovered === idx && (
//             <motion.div
//               layoutId="hovered"
//               className={[
//                 "absolute inset-0 h-full w-full rounded-full",
//                 visible && !isFooter
//                   ? "bg-gray-100 dark:bg-neutral-800"
//                   : "bg-gray-100 dark:bg-neutral-800",
//               ]
//                 .filter(Boolean)
//                 .join(" ")}
//             />
//           )} */}
//           {hovered === idx && !isFooter && (
//             <motion.div
//               layoutId="hovered"
//               className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
//             />
//           )}
//           <span className="relative z-20">{item.name}</span>
//         </a>
//       ))}
//     </motion.div>
//   );
// };

// export const NavbarLogo = () => {
//   return (
//     <a
//       href="#"
//       className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
//     >
//       <img
//         src="https://assets.aceternity.com/logo-dark.png"
//         alt="logo"
//         width={30}
//         height={30}
//       />
//       <span className="font-medium text-black dark:text-white">Startup</span>
//     </a>
//   );
// };

// export const NavbarButton = ({
//   href,
//   as: Tag = "a",
//   children,
//   className,
//   variant = "primary",
//   ...props
// }) => {
//   const baseStyles =
//     "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

//   const variantStyles = {
//     primary:
//       "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//     secondary: "bg-transparent shadow-none dark:text-white",
//     dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//     gradient:
//       "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
//   };

//   return (
//     <Tag
//       href={href || undefined}
//       className={[baseStyles, variantStyles[variant], className]
//         .filter(Boolean)
//         .join(" ")}
//       {...props}
//     >
//       {children}
//     </Tag>
//   );
// };

"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence } from "motion/react";

// Neon color palette
const NEON_COLORS = {
  blue: "#00f7ff",
  pink: "#ff00ea",
  orange: "#ff7b00",
  purple: "#b300ff",
  cyan: "#00ffc8",
};

export const NavbarUI = ({ children, className, isFooter }) => {
  return (
    <motion.div
      className={[
        "inset-x-0 z-50 w-full",
        isFooter ? "fixed bottom-0" : "sticky top-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        background: isFooter
          ? "linear-gradient(to top, rgba(10, 10, 25, 0.95), rgba(5, 5, 15, 0.9))"
          : "transparent",
      }}
    >
      {children}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible, isFooter }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const bodyRef = useRef(null);

  // Track cursor position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (bodyRef.current) {
      bodyRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (bodyRef.current) {
        bodyRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Calculate distance from cursor to center for glow effect
  const getGlowIntensity = () => {
    if (!bodyRef.current || !visible) return 0;

    const rect = bodyRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(cursorPos.x - centerX, 2) + Math.pow(cursorPos.y - centerY, 2)
    );

    // Normalize distance to 0-1 range (closer = more intense)
    const maxDistance = Math.max(rect.width, rect.height) / 2;
    return Math.max(0, 1 - distance / maxDistance);
  };

  // Layout logic
  let animate = {};
  let navBodyClass = "";
  let style = {};
  const glowIntensity = getGlowIntensity();

  if (isFooter) {
    // Footer with neon top border
    animate = {
      top: "auto",
      bottom: 0,
      position: "fixed",
      width: "100%",
      height: "auto",
      borderRadius: "0",
      y: 0,
    };
    navBodyClass = [
      "flex flex-row items-center justify-between w-full px-4 py-3",
      "border-t-2 border-transparent",
    ].join(" ");
    style = {
      borderImage: "linear-gradient(90deg, #00f7ff, #ff00ea, #00f7ff) 1",
      boxShadow: `0 -4px 20px rgba(0, 247, 255, 0.3), 0 -2px 10px rgba(255, 0, 234, 0.2)`,
    };
  } else if (visible) {
    // Sidebar/dashboard with neon effects
    animate = {
      left: 0,
      top: 0,
      backdropFilter: "blur(10px)",
      position: "fixed",
      width: "15vw",
      height: "100vh",
      borderRadius: "1.5rem",
      y: 0,
    };
    navBodyClass = [
      "fixed left-0 top-0 z-[60] flex flex-col gap-6 items-start justify-start p-6 h-screen transition-all",
      "bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2a] to-[#151530]",
      "border-[3px] border-solid border-transparent rounded-3xl",
    ].join(" ");
    style = {
      boxShadow: `
        0 0 30px rgba(0, 247, 255, ${0.2 + glowIntensity * 0.3}), 
        0 0 60px rgba(255, 0, 234, ${0.1 + glowIntensity * 0.2}),
        inset 0 0 20px rgba(0, 0, 0, 0.7)
      `,
      borderImage: `
        linear-gradient(
          135deg, 
          ${NEON_COLORS.blue}, 
          ${NEON_COLORS.pink}, 
          ${NEON_COLORS.orange}
        ) 1
      `,
    };
  } else {
    // Default top navbar with subtle glow
    animate = {
      top: "5px",
      position: "relative",
      width: "100%",
      height: "auto",
      borderRadius: "9999px",
      background: "rgba(10, 10, 25, 0.8)",
      y: 0,
    };
    navBodyClass = [
      "relative z-[60] w-full flex flex-row",
      "items-center justify-between self-start rounded-b-3xl rounded-t-0",
      "px-8 py-2 backdrop-blur-md",
    ].join(" ");
    style = {
      minWidth: "800px",
      boxShadow: "0 4px 20px rgba(0, 247, 255, 0.15)",
    };
  }

  return (
    <motion.div
      ref={bodyRef}
      animate={animate}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 25,
      }}
      style={style}
      className={[navBodyClass, className].filter(Boolean).join(" ")}
      whileHover={{
        boxShadow: visible
          ? `0 0 40px rgba(0, 247, 255, ${0.3 + glowIntensity * 0.4}), 
             0 0 80px rgba(255, 0, 234, ${0.2 + glowIntensity * 0.3})`
          : "0 4px 30px rgba(0, 247, 255, 0.3)",
      }}
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
  const [ripples, setRipples] = useState([]);

  // Create ripple effect on hover
  const createRipple = (e, idx) => {
    setHovered(idx);

    if (!visible && !isFooter) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();

      const ripple = {
        id: Date.now(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        color:
          Object.values(NEON_COLORS)[idx % Object.keys(NEON_COLORS).length],
      };

      setRipples([...ripples, ripple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 1000);
    }
  };

  let navItemsClass = "";
  if (isFooter) {
    navItemsClass = "flex flex-row items-center justify-center gap-6 w-full";
  } else if (visible) {
    navItemsClass =
      "flex flex-col items-start gap-4 py-4 px-2 rounded-2xl w-full";
  } else {
    navItemsClass =
      "flex flex-row flex-1 items-center justify-center space-x-4";
  }

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={[navItemsClass, className].filter(Boolean).join(" ")}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          className={[
            "relative px-4 py-2 transition-all overflow-hidden",
            visible && !isFooter ? "w-full rounded-xl group" : "rounded-full",
            isFooter ? "text-sm" : "",
          ].join(" ")}
          onMouseEnter={(e) => createRipple(e, idx)}
          onClick={onItemClick}
        >
          {/* Neon hover effect for sidebar items */}
          {visible && !isFooter && (
            <motion.div
              className="absolute inset-0 h-full w-full rounded-xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: hovered === idx ? 0.3 : 0,
                background: `linear-gradient(90deg, ${NEON_COLORS.blue}, ${NEON_COLORS.purple})`,
              }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Ripple effect for top navbar */}
          {!visible &&
            !isFooter &&
            ripples.map(
              (ripple) =>
                ripple && (
                  <motion.span
                    key={ripple.id}
                    className="absolute rounded-full bg-current"
                    initial={{
                      width: 0,
                      height: 0,
                      opacity: 0.7,
                      left: ripple.x,
                      top: ripple.y,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                    animate={{
                      width: 200,
                      height: 200,
                      opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    style={{ color: ripple.color }}
                  />
                )
            )}

          {/* Neon text effect */}
          <motion.span
            className="relative z-20 font-medium"
            animate={{
              color:
                hovered === idx
                  ? Object.values(NEON_COLORS)[
                      idx % Object.keys(NEON_COLORS).length
                    ]
                  : isFooter
                  ? "#e0e0ff"
                  : "#ffffff",
              textShadow:
                hovered === idx
                  ? `0 0 10px ${
                      Object.values(NEON_COLORS)[
                        idx % Object.keys(NEON_COLORS).length
                      ]
                    }, 
                   0 0 20px rgba(255, 255, 255, 0.5)`
                  : "none",
            }}
            transition={{ duration: 0.2 }}
          >
            {item.name}
            {hovered === idx && !isFooter && !visible && (
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-current"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: `0 0 8px currentColor`,
                }}
              />
            )}
          </motion.span>

          {/* Floating particles for sidebar hover */}
          {visible && !isFooter && hovered === idx && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  initial={{
                    width: 4,
                    height: 4,
                    opacity: 0,
                    x: "50%",
                    y: "50%",
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: `calc(50% + ${Math.random() * 60 - 30}px)`,
                    y: `calc(50% + ${Math.random() * 60 - 30}px)`,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                  style={{
                    background:
                      Object.values(NEON_COLORS)[
                        (idx + i) % Object.keys(NEON_COLORS).length
                      ],
                    boxShadow: `0 0 8px currentColor`,
                  }}
                />
              ))}
            </>
          )}
        </a>
      ))}
    </motion.div>
  );
};

export const NavbarButton = ({
  children,
  variant = "primary",
  className,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Color palette for new button styles
  const palette = {
    primary: {
      bg: "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500",
      border: "border-2 border-cyan-400",
      text: "text-white",
      shadow: "shadow-[0_0_1px_rgba(0,247,255,0.9)]",
      // This value of `shadow`:

      // - It sets the CSS `box-shadow` property to:
      //   `0 0 20px rgba(0,247,255,0.4)`
      // - This means:
      //   - **0**: Horizontal offset (no shift left/right)
      //   - **0**: Vertical offset (no shift up/down)
      //   - **20px**: Blur radius (how "spread out" the shadow is)
      //   - **rgba(0,247,255,0.4)**: Shadow color (cyan, 40% opacity)

      hoverBg: "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400",
      hoverBorder: "border-cyan-300",
      hoverText: "text-white",
    },
    secondary: {
      bg: "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400",
      border: "border-2 border-pink-400",
      text: "text-white",
      shadow: "shadow-[0_0_1px_rgba(255,0,234,0.3)]",
      hoverBg: "bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-300",
      hoverBorder: "border-pink-300",
      hoverText: "text-white",
    },
    "footer-primary": {
      bg: "bg-gradient-to-r from-cyan-700 via-blue-700 to-purple-700",
      border: "border-2 border-cyan-600",
      text: "text-white",
      shadow: "shadow-[0_0_10px_rgba(0,247,255,0.3)]",
      hoverBg: "bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600",
      hoverBorder: "border-cyan-400",
      hoverText: "text-white",
    },
    "footer-secondary": {
      bg: "bg-gradient-to-r from-pink-700 via-fuchsia-700 to-orange-700",
      border: "border-2 border-pink-600",
      text: "text-white",
      shadow: "shadow-[0_0_10px_rgba(255,0,234,0.2)]",
      hoverBg: "bg-gradient-to-r from-pink-600 via-fuchsia-600 to-orange-600",
      hoverBorder: "border-pink-400",
      hoverText: "text-white",
    },
  };

  const style = palette[variant] || palette.primary;

  return (
    <motion.button
      className={[
        "px-5 py-1 rounded-full font-semibold transition-all duration-200 relative overflow-hidden",
        style.bg,
        style.border,
        style.text,
        style.shadow,
        className,
      ].join(" ")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      animate={{
        boxShadow: isHovered
          ? `0 0 30px 4px ${
              variant.includes("primary")
                ? "rgba(0,247,255,0.7)"
                : "rgba(255,0,234,0.5)"
            }`
          : style.shadow,
        scale: isHovered ? 1.06 : 1,
      }}
      transition={{ duration: 0.22 }}
    >
      {/* Animated background on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          style={{
            background: variant.includes("primary")
              ? "linear-gradient(90deg, rgba(0,247,255,0.5), rgba(0,199,255,0.3))"
              : "linear-gradient(90deg, rgba(255,0,234,0.5), rgba(255,100,200,0.3))",
          }}
        />
      )}

      {/* Pulsing effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        style={{
          boxShadow: variant.includes("primary")
            ? "0 0 0 10px rgba(0, 247, 255, 0.18)"
            : "0 0 0 10px rgba(255, 0, 234, 0.15)",
        }}
      />

      <span
        className="relative z-10 tracking-wide"
        style={{ letterSpacing: "0.02em" }}
      >
        {children}
      </span>
    </motion.button>
  );
};

export const NavbarLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-7 h-7 rounded-lg flex items-center justify-center"
        animate={{
          background: isHovered
            ? `linear-gradient(135deg, ${NEON_COLORS.blue}, ${NEON_COLORS.purple})`
            : "rgba(20, 20, 40, 0.8)",
          boxShadow: isHovered
            ? `0 0 20px ${NEON_COLORS.blue}, 0 0 40px rgba(255, 0, 234, 0.5)`
            : "0 0 10px rgba(0, 247, 255, 0.3)",
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isHovered ? "#ffffff" : "#00f7ff"}
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      </motion.div>

      <motion.span
        className="text-xl font-bold"
        animate={{
          color: isHovered ? "#ffffff" : "#00f7ff",
          textShadow: isHovered
            ? `0 0 15px ${NEON_COLORS.blue}, 0 0 30px rgba(255, 0, 234, 0.5)`
            : `0 0 10px rgba(0, 247, 255, 0.5)`,
        }}
        transition={{ duration: 0.3 }}
      >
        NEON DASH
      </motion.span>
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

"use client";
import { useState, useRef, useEffect } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
  NavbarLogo,
  NavbarUI,
  NavBody,
  NavItems,
} from "./ui/adjustable-navbar.jsx";

export function Navbar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const navItems2 = [
    { name: "Dashboard", link: "#dashboard" },
    { name: "Settings", link: "#settings" },
    { name: "Profile", link: "#profile" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isFooter, setIsFooter] = useState(false);
  // const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // if (!navRef.current) return;
      // const scrollY = window.scrollY;
      // setVisible(scrollY > 60);
      // // Check if at bottom of page
      // const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      // setIsFooter(atBottom);

      // Check if at bottom of page (with 50px threshold)
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const atBottom = scrollBottom >= docHeight - 50;

      setIsFooter(atBottom);

      // Only show special navbar when not at bottom
      setVisible(!atBottom && window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerItems = [
    { name: "Privacy", link: "#privacy" },
    { name: "Terms", link: "#terms" },
    { name: "Help", link: "#help" },
  ];

  // Determine which nav items to show
  // let currentNavItems = navItems;
  // if (isFooter) {
  //   currentNavItems = footerItems;
  // } else if (visible) {
  //   currentNavItems = navItems2;
  // }
  const currentNavItems = isFooter
    ? footerItems
    : visible
    ? navItems2
    : navItems;

  // Determine navbar position/style
  // const navbarClass = isFooter
  //   ? "fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg"
  //   : "relative w-full";

  return (
    // <div className={navbarClass} ref={navRef}>
    <div>
      {/* <NavbarUI visible={visible} isFooter={isFooter}>
        // Desktop Navigation 
        <NavBody visible={visible} isFooter={isFooter}>
          <NavbarLogo />
          <NavItems
            items={currentNavItems}
            visible={visible}
            isFooter={isFooter}
          />
          <div
            className={
              visible || isFooter
                ? "flex flex-col gap-4 w-full"
                : "flex items-center gap-4"
            }
          >
            <NavbarButton
              variant="secondary"
              className={visible || isFooter ? "w-full" : ""}
            >
              Login
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className={visible || isFooter ? "w-full" : ""}
            >
              Book a call
            </NavbarButton>
          </div>
        </NavBody> */}
      <NavbarUI isFooter={isFooter}>
        {/* Desktop Navigation */}
        <NavBody visible={visible} isFooter={isFooter}>
          <NavbarLogo />
          <NavItems
            items={currentNavItems}
            visible={visible}
            isFooter={isFooter}
          />
          <div
            className={
              visible
                ? "flex flex-col gap-2 w-full"
                : isFooter
                ? "flex gap-2"
                : "flex items-center gap-3"
            }
          >
            <NavbarButton
              variant="secondary"
              className={visible ? "w-full" : ""}
            >
              Login
            </NavbarButton>
            <NavbarButton variant="primary" className={visible ? "w-full" : ""}>
              Book a call
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavbarUI>
      <DummyContent />
      {/* Navbar */}
      {/* </div> */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Check the navbar at the top of the container
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as{" "}
        <span className="font-medium">Sticky</span>. Keep in mind that this
        component is <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

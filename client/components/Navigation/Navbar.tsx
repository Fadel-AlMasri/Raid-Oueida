"use client";
import { useState, useEffect } from "react";
import { MenuBurger, MenuClose, Language } from "@/components/icons";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

const links = [
  {
    id: 1,
    link: "Home",
    link_fr: "Accueil",
    href: "hero",
  },
  {
    id: 2,
    link: "About",
    link_fr: "À propos",
    href: "about",
  },
  {
    id: 3,
    link: "Artwork",
    link_fr: "Ouvrages d'art",
    href: "artwork",
  },
  {
    id: 4,
    link: "Exhibition",
    link_fr: "Exposition",
    href: "exhibition",
  },
  {
    id: 5,
    link: "Newspaper",
    link_fr: "Journal",
    href: "newspaper",
  },
  {
    id: 6,
    link: "Contact",
    link_fr: "Contact",
    href: "contact",
  },
];

const Navbar = () => {
  const t = useTranslations("Hero");

  const router = useRouter();

  const [lang, setLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [background, setBackground] = useState(0);
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll");
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
      const sectionEls = document.querySelectorAll(".section");

      sectionEls.forEach((sectionEl) => {
        if (
          window.scrollY >=
          sectionEl.offsetTop - sectionEl.clientHeight / 4
        ) {
          setCurrentSection(sectionEl.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/en") {
      router.replace(`/fr`);
    } else {
      router.replace(`/en`);
    }
  };

  return (
    <nav
      className={`fillPrimary fixed right-0 left-0 top-0 duration-500 flex justify-between items-center z-10 md:px-16 px-4 ${
        scrolled ? "h-[50px]" : "h-[80px]"
      }`}
    >
      <div className="max-w-[1440px] w-full mx-auto lg:px-16 flex justify-between">
        <h1 className="onPrimary LogoMobile md:LogoDesktop cursor-pointer">
          <a href="#hero">RIAD OUEIDA</a>
        </h1>
        <ul
          className={
            "hidden md:flex md:flex-row md:w-8/12 w-full md:justify-end md:items-center md:gap-10 z-20"
          }
        >
          {links.map(({ link, href, link_fr, id }, index) => (
            <li
              onClick={() => setBackground(index)}
              key={index}
              className={clsx(
                "onPrimary cursor-pointer",
                currentSection === href
                  ? "labelLargeBold duration-500"
                  : "labelLargeLight duration-500"
              )}
            >
              <a href={`#${href}`}>{pathname === "/en" ? link : link_fr}</a>
            </li>
          ))}
          <li
            className="onPrimary flex gap-1 items-center cursor-pointer w-12"
            onClick={handleClick}
          >
            <Language />

            <p className="labelLargeLight">
              {pathname !== "/en" ? "En" : "Fr"}
            </p>
          </li>
        </ul>

        {/* transition-all duration-500 ease-in-out  */}
        <ul
          className={clsx(
            "transition-all duration-500 ease-in-out  h-screen flex flex-col absolute bottom-0 top-0 right-0 pl-10 md:hidden z-10 surfacePrimary",
            clicked ? "left-0" : "left-[100%]"
          )}
        >
          {links.map(({ link, href }, index) => (
            <li
              key={index}
              className={clsx(
                "onPrimary pt-14 ",
                currentSection === href
                  ? "labelLargeBold duration-500"
                  : "labelLargeLight duration-500"
              )}
              onClick={() => {
                setClicked(!clicked);
                setBackground(index);
              }}
            >
              <a href={`#${href}`}>{link}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 md:hidden">
          <div
            className="onPrimary flex gap-1 items-center cursor-pointer w-12 justify-end "
            onClick={handleClick}
          >
            <Language />

            <p className="labelLargeLight">
              {pathname !== "/en" ? "En" : "Fr"}
            </p>
          </div>
          <div
            className="cursor-pointer pr-4 z-10 z-20 my-auto"
            onClick={() => setClicked(!clicked)}
          >
            {!clicked ? <MenuBurger /> : <MenuClose />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import {
    AlternateEmail,
    Construction,
    Home,
    HomeFilled,
    HomeMax,
    HomeMaxRounded,
    HomeMini,
    HomeRounded,
    HomeSharp,
    Person,
    TripOrigin,
    Work,
    WorkHistory,
} from "@mui/icons-material";
import { navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";


function Bottombar() {
    const activeSection = useActiveSection(navLinks.map((l) => l.id));

    return (
        <nav
            className={`fixed max-w-full sm:hidden py-1.5  bottom-0 left-0 right-0 z-50 transition-all duration-300 
        
        bg-white  shadow-xl shadow-amber-600 dark:bg-[#1a1814]/90 backdrop-blur-md  border-b border-amber-200/50 dark:border-amber-900/30"
          : "bg-transparent"
      `}>
            <div className="  h-16 overflow-x-scroll scrollbar-none overflow-y-clip  justify-around">
                {/* Desktop nav */}
                <ul className="flex justify-evenly">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`ubuntu-regular text-sm  py-1 my-2 flex flex-col 
                        
                                    justify-start items-center
                                     transition-all duration-200  ${activeSection === link.id
                                        ? "text-amber-600"
                                        : "text-gray-700 dark:text-gray-300"
                                    } `}>
                                {link.label == "Home" && <HomeFilled fontSize="medium" />}
                                {link.label == "About" && <Person fontSize="medium" />}
                                {link.label == "Skills" && <Construction fontSize="medium" />}
                                {link.label == "Experience" && <Work fontSize="medium" />}
                                {link.label == "Contact" && (
                                    <AlternateEmail fontSize="medium" />
                                )}
                                <span className="text-xs pt-1">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Bottombar;

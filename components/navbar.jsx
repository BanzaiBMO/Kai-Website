"use client";

import Link from "next/link";

import DropDown from "./dropdown";
import DropDownItem from "./dropdown-item";

import { usePathname } from "next/navigation";


// onMouseEnter={dropBox}      vs      onMouseEnter={dropBox()}
// Im called when mouse enters.        Im called immediately. wtf
export default function NavBar() {
    const pathname = usePathname();


    return (
        <nav>
            <ul>
                {pathname !== "/" && (
                    <li>
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                )}

                {pathname !== "/about" && (
                    <li>
                        <Link className="nav-link" href="/about">About</Link>
                    </li>
                )}

                {pathname !== "/projects" && (
                    <li className="content">
                        <DropDown 
                        buttonText="Projects" content={
                            <>
                                <DropDownItem >
                                    <Link className="dropdown-link" href="/projects/japanese">Japanese</Link>
                                </DropDownItem>
                                <DropDownItem>
                                    <Link className="dropdown-link" href="/projects/art">Art</Link>
                                </DropDownItem>
                                <DropDownItem>
                                    <Link className="dropdown-link" href="/projects/programming">Programming</Link>
                                </DropDownItem>
                                <DropDownItem>
                                    <Link className="dropdown-link" href="/projects/electronics">Electronics</Link>
                                </DropDownItem>
                                <DropDownItem>
                                    <Link className="dropdown-link" href="/projects/3d_design">3D Design</Link>
                                </DropDownItem>
                            </>       
                        }/>
                    </li>
                )}

                {pathname !== "/resume" && (
                    <li>
                        <Link className="nav-link" href="/resume">Resume</Link>
                    </li>
                )}

                {pathname !== "/contact" && (
                    <li>
                        <Link className="nav-link" href="/contact">Contact</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

 //   <Link href="/projects">Projects</Link>
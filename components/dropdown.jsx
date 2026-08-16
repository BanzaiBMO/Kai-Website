import { useState, useEffect, useRef } from "react";
import DropDownButton from "./dropdown-button";
import DropDownContent from "./dropdown-content";

export default function DropDown({ buttonText, content }) {
    const [open, setOpen] = useState(false);

    const dropDownRef = useRef();

    const toggleDropDown = () => {
        setOpen((open) => !open);
    };

    useEffect(() => {
        const handler = (event) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    }, [dropDownRef]);

    return (
        <div className="dropdown" ref={dropDownRef}>
            <DropDownButton toggle={toggleDropDown} open={open}>
                {buttonText}
            </DropDownButton>

            <DropDownContent open={open}>
                {content}
            </DropDownContent>
        </div>
    );
}
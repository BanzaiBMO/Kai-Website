import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

export default function DropDownButton({children, open, toggle}) {
    return(
        <div className=
            {`dropdown-button ${open ? "button-open" : null}`}
            onClick={toggle}>
            {children}
            <span className="toggle-icon">
                {!open ? <FaChevronDown/> : <FaChevronUp/>}
            </span>
        </div>
    );
}
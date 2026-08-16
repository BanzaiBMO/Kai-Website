export default function DropDownContent({children, open}) {
    return(
        <div className={`dropdown-content
        ${open ? "content-open" : null}`}>
            {children}
        </div>
    );
}
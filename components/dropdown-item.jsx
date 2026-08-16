export default function DropDownItem({children, onClick}) {
    return(
        <div className="dropdown-item" onClick={onClick}>
            {children}
        </div>
    );
}
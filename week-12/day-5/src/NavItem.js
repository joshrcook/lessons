// function NavItem(props) {
//     return (
//         <a href="#" className="nav-item">
//             <div className="nav-start">
//                 <div className="nav-icon"></div>
//                 <div className="nav-title">Home</div>
//             </div>
//             <div>
//                 <div className="nav-number">12</div>
//             </div>
//         </a>
//     );
// }

// const NavItem = (props) => (
//     <a href="#" className="nav-item">
//         <div className="nav-start">
//             <div className="nav-icon"></div>
//             <div className="nav-title">Home</div>
//         </div>
//         <div>
//             <div className="nav-number">12</div>
//         </div>
//     </a>
// );

const NavItem = (props) => {

    return (
        <a href="#" className="nav-item">
            <div className="nav-start">
                <div className="nav-icon" style={{
                    borderColor: props.color
                }}></div>
                <div className="nav-title">{props.children}</div>
            </div>
            <div>
                <div className="nav-number">{props.number}</div>
            </div>
        </a>
    );
}



export default NavItem;
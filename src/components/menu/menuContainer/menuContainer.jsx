import "./menuContainer.scss";
import { MenuLogo } from "../menuLogo/menuLogo";


export const MenuContainer = ({children}) => {
    return(
        <div className="menu-container">
            <MenuLogo/>
        </div>
    )
}
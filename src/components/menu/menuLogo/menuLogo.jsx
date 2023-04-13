import './menuLogo.scss'
import { Link } from 'react-router-dom'


export const MenuLogo = () => {


    return (
        
        <div className="menu-logo-container">
            <Link to={"/"} onClick={
                () => {}
            }>
                <h1 className="menu-logo home">
                    Covid19 Statistics
                </h1>
            </Link>
        </div>
        
    )
}
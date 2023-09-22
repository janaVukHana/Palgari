import './Hamburger.css'
import { useStateContext } from '../context/ContextProvider';

export default function Hamburger() {

    const {showMenu, setShowMenu} = useStateContext()

    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    
    return (
        <button className={`Hamburger ${showMenu ? 'active':'non-active'}`} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}
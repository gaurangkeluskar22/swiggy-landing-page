import Logo from '../../assets/logo.png'
import './NavBar.css'

const NavBar = () => {
    return(
        <div className='navbar'>
        <div className='flex justify-between align-center navbar-wrapper'>
            <img src={Logo} className='w-40'/>
            <ul>
                <li>Swiggy Corporate</li>
                <li>Partner with us</li>
                <li className='px-5 py-3 rounded-xl border-white border-1'>Get the App</li>
                <li className='bg-black px-10 py-3 rounded-2xl'>Sign in</li>
            </ul>
        </div>
        </div>
    )
}

export default NavBar
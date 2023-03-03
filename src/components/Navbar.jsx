import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import { setOpenCart } from '../feature/CartSlice'

export const Navbar = () => {
    const dispatch = useDispatch()
    const [ nav, setNav ] = useState(false);
    const { cartTotalQuantity } = useSelector(state => state.cart)


    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true,
        }))
    }
    
    const onNavScroll = () => {
        if(window.scrollY > 30) {
            setNav(true);
        } else {
            setNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, [])

    return(
        <div>
            <header className={
                !nav ? 'absolute top-7 left-0 right-0 opacity-100 z-50' 
                : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
            }>
                <nav className='flex items-center justify-between nike-container'>
                    <div className='flex items-center'>
                        <img 
                        src={logo} 
                        alt='logo/img' 
                        className={`w-16 h-auto ${nav && 'filter brightness-0'}`} 
                        />
                    </div>

                    <ul className='flex items-center justify-center gap-2'>
                        <li className='grid items-center'>
                            <MagnifyingGlassIcon className={`icon-style ${nav && 'text-slate-900 transition-all duration-300'}`}/>
                        </li>

                        <li className='grid items-center'>
                            <HeartIcon className={`icon-style ${nav && 'text-slate-900 transition-all duration-300'}`} />
                        </li>

                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToggle}
                            className='border-none outline-none active:scale-110 transition-all duration-300 relative'
                            >
                                <ShoppingBagIcon className={`icon-style ${nav && 'text-slate-900 transition-all duration-300'}`} />

                                <div className={`absolute top-4 right-0 w-4 h-4 text-[0.65rem] leading-tight 
                                font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 
                                transition-all duration-300 ${nav ? 'bg-slate-900 text-slate-100 shadow-slate-900' 
                                : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}
                                >
                                    {cartTotalQuantity}
                                </div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
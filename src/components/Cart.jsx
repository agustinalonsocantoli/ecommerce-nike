import { CartCount } from "./Cart/CartCount";
import { CartEmpty } from "./Cart/CartEmpty";
import { CartItem } from "./Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { setCloseCart, setClearCartItems, setGetTotal } from "../feature/CartSlice";
import { useEffect } from "react";

export const Cart = () => {
    const dispatch = useDispatch()
    const { cartState } = useSelector(state => state.cart)
    const { itemCart } = useSelector(state => state.cart)
    const { cartTotalAmount } = useSelector(state => state.cart)
    const { cartTotalQuantity } = useSelector(state => state.cart)

    const onCartToggle = () => {
        dispatch(setCloseCart({
            cartState: false,
        }))
    }

    const onClearCartItems = () => {
        dispatch(setClearCartItems())
    }

    useEffect(() => {
        dispatch(setGetTotal())

    }, [dispatch, itemCart])


    return(
        <div>
            {cartState && <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]`}>
                <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
                    <CartCount onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} cartTotalQuantity={cartTotalQuantity}/>

                    {itemCart.length === 0 ? <CartEmpty onCartToggle={onCartToggle}/> 
                    : 
                    <div>
                        <div className="flex justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll 
                        h-[80vh] scroll-smooth scroll-hidden py-3"
                        >
                            {itemCart.map((item, index) => (
                                <CartItem key={index} item={item} />
                            ))}
                        </div>

                        <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                            <div className="flex items-center justify-between">
                                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                                    ${cartTotalAmount}
                                </h1>
                            </div>

                            <div className="grid items-center gap-2">
                                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                                
                                <button type="button" className="button-theme bg-theme-cart text-white">
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                    
                </div>
            </div>}
        </div>
    );
}
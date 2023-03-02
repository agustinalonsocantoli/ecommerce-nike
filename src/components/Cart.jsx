import { CartCount } from "./Cart/CartCount";
import { CartEmpty } from "./Cart/CartEmpty";
import { CartItem } from "./Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { setCloseCart } from "../feature/CartSlice";

export const Cart = () => {
    const dispatch = useDispatch()
    const { cartState } = useSelector(state => state.cart)

    const onCartToggle = () => {
        dispatch(setCloseCart({
            cartState: false,
        }))
    }


    return(
        <div>
            {cartState && <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]`}>
                <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
                    <CartCount onCartToggle={onCartToggle} />
                    <CartEmpty />
                    <CartItem />
                </div>
            </div>}
        </div>
    );
}
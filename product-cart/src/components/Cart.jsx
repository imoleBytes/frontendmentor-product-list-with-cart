import CarbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg";
import RemoveIcon from "../assets/images/icon-remove-item.svg";

export default function Cart(){
    return (
        <div className="cart">
            <CartItem />
            <CartItem />
            <CartItem />
            <div>
                <p>Order Total</p>
                <p>$46.50</p>
            </div>
            <div className="carbon-neutral">
                <p><img src={CarbonNeutralIcon} className="tree-icon"/> This is a <b>carbon-neutral</b> delivery</p>
            </div>
            <button className="btn-confirm-order">Confirm Order</button>
        </div>
    )
}

const CartItem = () => {
    return (
        <div className="cart-item">
            <div>
                <h5>Classic Tiramisu</h5>
                <p>
                    <span className="cart-item-quanity"> 1x</span>
                    <span className="cart-item-price"> @ $5.50</span>
                    <span className="cart-item-amount"> $5.50</span>
                </p>
            </div>
            <img src={RemoveIcon} className="remove-icon"/>
        </div>
    )
}
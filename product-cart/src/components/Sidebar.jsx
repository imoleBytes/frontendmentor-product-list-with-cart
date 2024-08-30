import Cart from "./Cart";


export default function SideBar() {
    return (
        <aside>
            <h2 className="total-quantity">Your Cart (7)</h2>
            <Cart />
        </aside>
    )    
}

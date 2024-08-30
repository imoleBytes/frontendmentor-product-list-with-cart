// import img from "../assets/images/image-waffle-desktop.jpg"
import AddToCartIcon from "../assets/images/icon-add-to-cart.svg";

export const ProductCard = ({ product }) => {
    return (
        <article className="product-card">
            <div className="product-img">
                <img src={`src/${product.image.desktop}`} alt={product.name} />
            </div>
            <button className="btn-add-to-cart"><img src={AddToCartIcon} alt="add to cart icon"/><span>Add to Cart</span></button>
            <div className="product-details">
                <p className="product-category">{product.category}</p>
                <p className="product-name">{product.name}</p>
                <p className="price">${product.price}</p>
            </div>
        </article>
    )
}

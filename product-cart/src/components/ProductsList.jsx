import { ProductCard } from "./ProductCard"
import data from "../data.json"

export const ProductsList = () => {
    // console.log(data)
    return (
        <div className="product-list">
            {data.map(product => <ProductCard key={product.name} product={product} />)}
        </div>
    )
}

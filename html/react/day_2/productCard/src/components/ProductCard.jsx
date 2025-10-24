import "./ProductCard.css"

function ProductCard({ name, price, image, inStock=true }) {
    return (
        <div className="product-card">
            <div className={`card-image-container ${inStock && `grey-style`}`}>
                <img src= {image} alt="" className="product-image" />
            </div>
            
            <div className="card-content">
                <div className="product-name">{name}</div>
                <div className="product-price">{price}</div>
                {inStock? <div style={{backgroundColor: "green"}}>In Stock</div> : <div style={{backgroundColor: "red"}}>Out of Stock</div>}
            </div>
            
        </div>
    )
}

export default ProductCard

export default function SingleBook({ product, setCart }) {
    return (
        <div className="product">
            <div className="card">
                <img src={product.img} alt="booksimage" />
                <div className="product-description">
                    <p className="P-name">{product.name}</p>
                    <p className="B-desc"><i>{product.description}</i></p>
                </div>
                <div className="CartPrice">
                    <button>ADD TO CART</button>
                    <p className="B-price">Rs.{product.price}</p>
                </div>
            </div>
        </div>
    )
}

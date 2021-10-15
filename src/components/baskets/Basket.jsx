const Basket = ({products}) => {
    const Display = ({productName}) => <li> {productName} </li>

    return(
        <ul className="previousSearch">
            {products.map((productName,i) => (
                <Display key={i} productName={productName}/>
            ))}
        </ul>
    )
}
export default Basket;
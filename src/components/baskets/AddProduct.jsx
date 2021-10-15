const AddProduct = ({submitHandler, newProduct, handleAdd}) => {
    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter product:" onChange={newProduct}/>
            <button type="button" onClick={handleAdd}> Add Product </button>
        </form>
    )
    }
    export default AddProduct; 
function Product(props){ //{data:{}}
    return (
        <div className="w-25 shadow-lg mx-auto bg-primary">
            <p className="fs-1">{props.data.pid}</p>
            <p className="fs-1">{props.data.name}</p>
            <p className="fs-1">{props.data.price}</p>
        </div>
    )
}

export default Product;
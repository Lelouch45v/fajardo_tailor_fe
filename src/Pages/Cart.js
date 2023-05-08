function Cart() {
    return (
        <div>

                <div className="small-container cart-page">
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img src="images/Grey_Canadian.jpg"/>
                                            <div>
                                                <p> Grey Bed Sheet</p>
                                                    <small>Price:$5.00</small>
                                            </div>
                                    </div>  
                                </td>
                                <td> <input type="number" value="1"/> </td>
                                <td>$5.00</td>
                            </tr>
                        </table>
                </div>

            

        </div>
    );
}

export default Cart;
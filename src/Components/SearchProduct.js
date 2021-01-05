import React, { useState} from 'react'

export default function SearchProduct() {

    const [productList, setProductList] = useState(['P1001', 'P1002', 'P1003', 'P1004'])
    const [productList1, setProductList1] = useState({ ProductId: 'P1001', ProducType: 'Electric', ProductSize: 'Small', ProductDescription: '92 Inch Ditital Flat Screen TV'})

    return (
        <div>
            
            {productList.map((p) => (
                <h3> {p}</h3>
            ))};
            
        </div>
    )
}

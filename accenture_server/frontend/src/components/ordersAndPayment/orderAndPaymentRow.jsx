import React from 'react';

const OrderAndPaymentRow = ({name, total, amount, remaining}) => {
	return(
	    <tr>
            <td>{name}</td>
            <td>{total}</td>
            <td> {amount}</td>
            <td> {remaining}</td>
        </tr>)
}


export default OrderAndPaymentRow;
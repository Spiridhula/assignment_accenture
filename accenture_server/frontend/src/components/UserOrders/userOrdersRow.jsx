import React from 'react';

const UserOrdersRow = ({name,drink,size}) =>{
	return(
		<tr>
		<td>{name}</td>
		<td>{drink}</td>
		<td>{size}</td>

		</tr>
		)
}

export default UserOrdersRow;
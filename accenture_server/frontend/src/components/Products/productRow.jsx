import React from 'react';

const ProductRow = ({name, small, medium, large, huge, mega, ultra}) => { 
	
	return(
     <tr>
     <td>{name}</td>
     <td>{small ? small : '-'}</td>
     <td> {medium ? medium : '-'}</td>
     <td> {large ? large : '-'}</td>
     <td> {huge ? huge : '-'} </td>
     <td> {mega ? mega : '-'} </td>
     <td> {ultra ? ultra : '-'} </td>
     </tr>	 
     )
}

export default ProductRow;
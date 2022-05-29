
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import { Box, Button } from '@mui/material';
import { onRemoveFromCart } from '../redux/actions';
import {useDispatch} from "react-redux"



function CartPage()
{
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(onRemoveFromCart(id))
  }

  const cartList = useSelector((state) => state.cartList);
  const { cartItems } = cartList;
    return (
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableBody>
              {cartItems.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="tr" scope="row"><img width={80} height={80} src={row.image}></img></TableCell>
                  <TableCell component="tr" scope="row">{row.title}</TableCell>
                  <TableCell>Rs:{row.price}</TableCell>
                  <TableCell align='right'><Button sx={{backgroundColor:"black"}} variant="contained" onClick={() => handleRemove(row.id)}>Remove</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}
export default CartPage;
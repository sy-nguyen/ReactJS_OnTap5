import React from 'react'
import {Container, Table} from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'
import Item from '../item/Item.js'
import { deleteItem} from '../../redux/listSlice'
import Add from '../add/Add.js'
import { addNewItem } from '../../redux/listSlice.js'

export default function ToDoList() {
    const dispatch = useDispatch()
    const {list} = useSelector(state => state.list)
    const handle_del = (id) =>{
        dispatch(deleteItem(id))
    }
    const handle_add = (text) =>{
        dispatch(addNewItem(text))
    }
  return (
    <div>{/*  */}
        <Container>
            <h1>To Do List</h1>
            <Add handle_add={handle_add}/>
            <Table hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Checks</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index) => (
                        <Item key={index} item={item} handle_del={handle_del}/>
                    ))
                }
             </tbody>
             </Table>
        </Container>
    </div>
  )
}

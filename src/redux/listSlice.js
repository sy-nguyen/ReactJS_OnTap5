import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list: JSON.parse(localStorage.getItem('list')) || [
        { id: 1, name: "Ngủ", checked: false },
        { id: 2, name: "Ăn", checked: false },
        { id: 3, name: "học", checked: true },
      ],
      status: "start",
      error: ""
}

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        fetchList: (state) => {
            state.status = "succeeded"
        },
        deleteItem: (state, actions) => {
            state.list = state.list.filter(item => item.id !==actions.payload)
            localStorage.setItem('list', JSON.stringify(state.list));
        },
        addNewItem: (state, actions) => {
            state.list.push({id: state.list.length<1?1:(Math.max(...state.list.map(item =>item.id))+1), name:actions.payload, checked:false});
            localStorage.setItem('list', JSON.stringify(state.list));
        }
    }
})

export const {fetchList, deleteItem, addNewItem} = listSlice.actions;
export default listSlice.reducer
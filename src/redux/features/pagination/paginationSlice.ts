import { createSlice } from "@reduxjs/toolkit";


const initialState = {
page:0,
limit:6

}


const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPage:(state, action)=>{
            state.page=action.payload
        },
        setLimit:(state, action)=>{
            state.limit=action.payload
        },
     
    }
})


export const {setPage, setLimit} = paginationSlice.actions
export default paginationSlice.reducer
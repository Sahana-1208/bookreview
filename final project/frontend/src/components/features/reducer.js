import {createSlice} from '@reduxjs/toolkit';

export const userslice=createSlice({
    name: "user",
    initialState:{
        value:{
            email:"Default",
            password:"",
            isSideEnabled:false
        }
    },
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        logout:(state,action)=>{
            state.value={email:"",password:""}
        },
        toggleSide:(state,action)=>{
            state.isSideEnabled=action.payload;
        }
    }
});
export const {login,logout,toggleSide}=userslice.actions;
export default userslice.reducer;
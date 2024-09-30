import { createSlice } from "@reduxjs/toolkit";
const cart=createSlice({
  name: "cart",
  initialState:{
    item:[],
    totalprice:0
  } ,


  
  reducers:{
    addItemTocart:(state,action)=>{
      const existItem=state.item.find((item)=> item.id==action.payload.id)
      if(existItem){
        existItem.quantity+=1
      }
      else{
        state.item.push({...action.payload,quantity:1})
      }
    },
   calculateTotalprice: (state)=>{
    let total=0
    state.item.forEach((item)=>{
      total+= item.price*item.quantity
    })
    state.totalprice=total
   },
   removeItemFromCart:(state,action)=>{
    state.item=state.item.filter((item)=> item.id !=action.payload.id)

    
   },
   increment:(state,action)=>{
    const existIten=state.item.find((item)=> item.id===action.payload.id)
    if(existIten){
      existIten.quantity +=1
    }
   
   },

   decrement:(state,action)=>{
    const existIten=state.item.find((item)=> item.id===action.payload.id)
    if(existIten.quantity>1){
      existIten.quantity -=1
    }
  //  decrement:(state,action)=>{
  //   if(state.item.quantity>1){
  //     state.item.quantity -=1
  //   }
   }
   
   

  }
})
export const{addItemTocart,calculateTotalprice,removeItemFromCart,increment, decrement}=cart.actions
export default cart.reducer
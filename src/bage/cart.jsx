import { useDispatch, useSelector } from "react-redux"
import Pricecart from "../Componantes/Pricecart"
import{calculateTotalprice, removeItemFromCart,increment, decrement}from "../redux/reduce/cart"
import toast,{Toaster} from "react-hot-toast"

function Cart(){
     const dispatch=useDispatch()
    const allitems = useSelector((state)=> state.cart.item)
   const handaleRemove=(data)=>{
    dispatch(removeItemFromCart(data))
    dispatch(calculateTotalprice())
    toast.success("Item has been Remove",{
      position:"top-right"
    })
    

    

   }
   const handleIncrement=((id)=>{
    dispatch(increment(id))
    dispatch(calculateTotalprice())

  })

  const handledecrement=((id)=>{
    dispatch(decrement(id))
    dispatch(calculateTotalprice())


  })

    return <div>
    <h1>This is home cart</h1>
    <div className="flex gap-8 justify-center"></div>
    <div className="mr-32 mb-20"></div>
    


  {
  
  allitems.length > 0 ?  allitems.map((item)=>{
        return <div className=" flex mt-3 gap-10  border-2 border-gray-500 px-4 sm:justify-between py-5 sm:w-[600px] h-[170px] w-[350px] sm:h-[250px] ml-5 sm:ml-28 rounded">
            <img className="sm:w-[200px] w-[120px] sm:h-[150px] rounded " src={item.image}/>
            <div >
            <p className="w-[150px]">{item.title}</p>
            <h1 className=" mt-0 text-1xl font-bold">${item.price}</h1>
            <button onClick={()=>handleIncrement(item)} className="bg-gray-600 text-white text-2xl px-3 py-1 rounded-full m-4 text-center">+</button>
            <span className="text-3xl">{item.quantity}</span>
            <button onClick={()=>handledecrement(item)} className="bg-gray-600 text-white text-2xl px-3 py-1 rounded-full m-4 text-center">-</button>

            </div>
            
            <button onClick={()=> handaleRemove(item)} className="text-2xl top-0 font-bold sm:ml-28">X</button>

        </div>
    })
    :
    <p>there is not you data </p>

 }

<div>
 
</div>
<Pricecart/>
<Toaster/>
</div>

}
export default Cart
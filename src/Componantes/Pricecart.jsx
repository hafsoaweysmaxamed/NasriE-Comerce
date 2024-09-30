 import { useSelector } from "react-redux"
 function Pricecart(){
       const price=useSelector((state)=> state.cart.totalprice)
    //    const totalquantity=useSelector((state)=> state.cart.totalprice)
    return <div>
        <div className="w-[300px] fixed right-20 h-[300px] top-14  p-4 border-2 border-gray-400">
        <h1>Total Quantaty</h1>
        <h1 className="font-bold"></h1>
        <h1 className="mt-6">Total price</h1>
        <h1 className="font-bold">${price}</h1>
        <button className="bg-black px-24 py-2 mt-10 text-white">pay Now</button>
         </div>
    </div>
}



export default Pricecart




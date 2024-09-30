import {  Link } from "react-router-dom"
import { useSelector } from "react-redux"
function Header({search}){
    const NumberOfItem=useSelector((state)=> state.cart.item)
    return <div className=" bg-secondrycolor gap-[15px] text-white flex sm:justify-between sm:py-5 sm:px-5">
    <h1 className="sm:text-4xl  text-2xl font-bold mt-1 sm:mt-0">Nasri E-Comerse</h1>
    <ul className="sm:flex  hidden  sm:gap-[50px] gap-10 mt-3 text-1xl sm:text-2xl">
     <li>Home</li> 
     <li>About</li>
     <li>Service</li> 
     <li>Blog</li>
    </ul>
    <form>
    <input onChange={search} className="sm:w-[400px] ml-11  w-[250px ] mt-2 sm:ml-[10px]  sm:h-[40px] text-black "  type="text"placeholder="search item"/>
    </form>
<Link to="/cart">
<i class="fa-solid fa-cart-shopping mr[70px] mt-3  ml-5    "  >  {NumberOfItem.length}</i>
</Link>
    </div>
}
export default Header
import axios from "axios"
import Product from "./Product"
import { useEffect,useState } from "react"
import { ClipLoader } from "react-spinners"
import Header from "./Header"
function ProductList(){
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const[searchItem,setSearchItem]=useState("")
    const handleSearch=(event)=>{
        setSearchItem(event.target.value)
    }
    const getAllProducts=()=>{
        axios.get("https://fakestoreapi.com/products").then((Response)=>{
            setData(Response.data)
            setLoading(false)

        }).catch((error)=>{
            console.log(error)
        })
    }
  useEffect(()=>{
    getAllProducts()
  },[])
  return <div>
    <Header search={handleSearch}/>
  {loading==true ? <ClipLoader className=" ml-[500px] items-center" loading={loading}/> : <div className="grid grid-cols-[160px_160px]   sm:grid-cols-[300px_300px_300px_300px] sm:gap-5 gap-6   justify-center">
    {
        data.filter((SearchProduct)=>{
            return searchItem.toLowerCase()== "" ? SearchProduct :
            SearchProduct.title.toLowerCase().includes(searchItem.toLowerCase())

        }).map((item)=>{
            return <Product items={item}/>
        })
    }
  </div>
}
  </div>
}
export default ProductList
import axios from "axios";
import { router,useEffect,useState } from "../lib";
const addproduct=()=>{
    const [products,setProducts] = useState([]);
    useEffect(function(){
    axios.get(`http://localhost:3000/products/`)
    .then(function(dataAxios){
        setProducts(dataAxios.data)
    })
    },[])
    const updateproduct=function(){
        const name=document.querySelector('#name').value
        const price=document.querySelector('#price').value
        const image=document.querySelector('#image').value
        const declaration=document.querySelector('#description').value
        axios.post(`http://localhost:3000/products`,{
            ...products,
            name,
            price,
            image,
            declaration
        }).then(function(){
            router.navigate("/admin")
        })
    }
        useEffect(function(){
    document.querySelector('#update-form').onsubmit = function(e){
        e.preventDefault()
        updateproduct()
    }
        })
    
    
    return/*html*/`
    <form id="update-form" >
    <div class="w-[600px] mt-4 mb-4 m-auto">
    <div class="mb-5">
    <label
      for="name"
      class="mb-3 block text-base font-medium text-[#07074D]"
    >
     Name
    </label>
    <input
      type="text"
      name="name"
      id="name"
      value=""
      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    />
  </div>
  <div class="mb-5">
    <label
      for="price"
      class="mb-3 block text-base font-medium text-[#07074D]"
    >
      price
    </label>
    <input
      type="price"
      name="price"
      id="price"
      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    />
  </div>
  <div class="mb-5">
    <label
      for="image"
      class="mb-3 block text-base font-medium text-[#07074D]"
    >
      image
    </label>
    <input
      type="text"
      name="image"
      id="image"
      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    />
    <img src="" class="w-20 mt-4">
  </div>
  <div class="mb-5">
    <label
      for="description"
      class="mb-3 block text-base font-medium text-[#07074D]"
    >
    description
    </label>
    <textarea
      rows="4"
      name="description"
      id="description"
      class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    ></textarea>
  </div>
  <div>
    <button
    type="submit"
      class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
    >
      Submit
    </button>
  </div>
  </div>
  </form>
    `
}
export default addproduct
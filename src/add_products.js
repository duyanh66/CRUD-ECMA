import axios from "axios"
import { router, useEffect, useState } from "../lib"

const addproduct = () => {
  const [products, setProducts] = useState([])
  useEffect(function () {
    axios.get(`http://localhost:3000/products`)
      .then(function (dataAxios) {
        setData(dataAxios.data)
      })
  }, [])

  const addprd = function () {
    const name = document.querySelector("#name").value
    const price = document.querySelector("#price").value
    const image = document.querySelector("#image").value
    const description = document.querySelector("#description").value
    axios.post(`http://localhost:3000/products`, {
      ...products,
      name,
      price,
      image,
      description
    }).then(function () {
      router.navigate("/admin")
    })
  }

  useEffect(function () {
    document.querySelector('#form_sm').onsubmit = function (e) {
      e.preventDefault()
      addprd()
    }
  })
  return/*html*/`
    <div class="flex items-center justify-center p-12">
  <div class="mx-auto w-full max-w-[550px]">
    <form id="form_sm">
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
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          price
        </label>
        <input
          type="number"
          id="price"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="subject"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          image
        </label>
        <input
          type="text"
          id="image"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
        description
        </label>
        <textarea
          rows="4"
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
    </form>
  </div>
</div>
    `
}
export default addproduct
import { useState, useEffect } from "../lib"
import axios from "axios"

const admin = () => {
    const [data, setData] = useState([])
    useEffect(function () {
        axios.get(`http://localhost:3000/products`)
            .then(function (dataAsios) {
                setData(dataAsios.data)
            })
    }, [])


    const delete_prd = function (id) {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE"
        }).then(() => location.reload())
    }

    useEffect(() => {
        const btn_delete = document.querySelectorAll(".btn_delete")
        btn_delete.forEach((bt) => {
            bt.addEventListener("click", function () {
                const id = bt.dataset.id
                delete_prd(id)
            })
        })
    })
    return /*html*/`
    <h1 class="font-bold text-center">ADMIN</h1>
    <a href="/admin/add_products"> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Add New</button></a>
    ${data.map(function (products, index) {
        return /*html*/`
        <table class="min-w-full border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Stt</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Prince</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Image</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Action</th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold"></span>${index + 1}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold"></span> ${products.name} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold"></span> ${products.price}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold"></span> <img src="${products.image}" class="w-20"></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button data-id="${(products.id)}" class="btn_delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
				
		</tbody>
	</table>
        `
    })}
    `
}
export default admin 
import { render, router } from "../lib"
import './style/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import admin from "./admin"
import add_products from "./add_products"

// DOM declaration
var app = document.querySelector('#app')

router.on('/', function () {
    render(() => /*html*/`
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        
    </form>
    <a href="admin"><button type="submit" class="btn btn-primary">Submit</button></a>
    `, app)
})
// thêm router
router.on("admin", function () {
    render(admin, app)
})
router.on("/admin/add_products", function () {
    render(add_products, app)
})
router.resolve()




import React from "react";
import { Routes, Route } from "react-router";
import useScrollRestore from "../hooks/useScrollRestore";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import User from "../pages/User";
import { Main } from "../pages/Main";
import { Search } from "../pages/Search";
import { MyProducts } from "../pages/MyProducts";
import { CreateProduct } from "../pages/CreateProduct";
import { Producer } from "../pages/Producer";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { Buyer } from "../pages/Buyer";


const RouterRoutes = () => {
	useScrollRestore();

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/main" element={<Main />}>
					<Route path="search" element={<Search />} />
					<Route path="my-products" element={<MyProducts />} />
					<Route path="my-products/new/:user_id" element={<CreateProduct />} />
					<Route path="producer/:id" element={<Producer />} />
					<Route path="buyer/:producer_id" element={<Buyer />} />
				</Route>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/user" element={<User />} />
				<Route path="/all-products" element={<AllProducts />} />
				<Route
					path="/product-details/:productId"
					element={<ProductDetails />}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
};

export default RouterRoutes;

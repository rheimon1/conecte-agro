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


const RouterRoutes = () => {
	useScrollRestore();

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/main" element={<Main />}>
					<Route path="search" element={<Search />} />
					<Route path="my-products" element={<MyProducts />} />
					<Route path="my-products/new" element={<CreateProduct />} />
				</Route>
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

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
import { Map } from "../pages/Map";
import { Marker } from "../pages/Map/Marker";



const RouterRoutes = () => {
	useScrollRestore();

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/main" element={<Main />}>
					<Route path="" element={
						<Map>
						</Map>
					} />
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

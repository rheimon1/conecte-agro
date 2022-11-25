import { CommonProvider } from "./contexts/common/commonContext";
import { CartProvider } from "./contexts/cart/cartContext";
import ProductContext from "./contexts/product/productContext";
import Header from "./components/common/Header";
import RouterRoutes from "./routes/RouterRoutes";
import Footer from "./components/common/Footer";
import BackTop from "./components/common/BackTop";

const App = () => {
	return (
		<>
					<ProductContext.Provider>
						{/* <Header /> */}
						<RouterRoutes />
						<BackTop />
					</ProductContext.Provider>
		</>
	);
};

export default App;

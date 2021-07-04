import './styles/App.scss';
import { Main } from './components/Main';
import { Header } from './components/Header/Header';
import { Footer } from './components/Homepage/Footer'
import { AuthForm } from './components/AuthForm/AuthForm';
import { CartModal } from './components/CartModal/CartModal';
import { AuthProvider } from './components/Context/AuthContext';
import { CartProvider } from './components/Context/CartContext';
import { ProductProvider } from './components/Context/ProductContext';
import { CartModalProvider } from './components/Context/CartModalContext';
import { BreadcrumbsProvider } from './components/Context/BreadCrumbsContext';
import { CategoriesModal } from './components/CategoriesModal/CategoriesModal';
import { CategoriesProvider } from './components/Context/CategoriesModalContext';
import { CategoryProvider } from './components/Context/CategoryContext'
function App() {
	return (
		<>
			<AuthProvider>
				<ProductProvider>
					<CartProvider>
						<CartModalProvider>
							<CategoriesProvider>
								<CategoryProvider>
									<BreadcrumbsProvider>
										<AuthForm />
										<CategoriesModal />
										<CartModal />
										<div className="container container__center container__flex">
											<Header />
											<Main />
										</div>
										{/* <Footer /> */}
									</BreadcrumbsProvider>
								</CategoryProvider>
							</CategoriesProvider>
						</CartModalProvider>
					</CartProvider>
				</ProductProvider>
			</AuthProvider>
		</>
	);
}

export default App;

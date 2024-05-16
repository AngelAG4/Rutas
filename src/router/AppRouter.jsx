import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';
import Perfil from '../pages/Perfil';
import Compras from '../pages/Compras';


import Favoritos from '../pages/Favoritos';


export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='perfil'
						element={
							<PrivateRoute>
								<Perfil />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route
						path='compras'
						element={
							<PrivateRoute>
								<Compras />
							</PrivateRoute>
						}
					/>
					<Route
						path='compras'
						element={
							<PrivateRoute>
								<Compras />
							</PrivateRoute>
						}
					/>
			</Routes>
			
		</>
	);
};

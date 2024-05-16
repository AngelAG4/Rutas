import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
						<nav>
							<Link to='/perfil'>Perfil</Link>
							<Link to='/compras'>Compras</Link>
							<Link to='/favoritos'>Favoritos</Link>
						</nav>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
						{/* Nuevos botones de rutas públicas */}
						<Link to='/ruta1'>Ruta 1</Link>
						<Link to='/ruta2'>Ruta 2</Link>
						<Link to='/ruta3'>Ruta 3</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './logo.png'
import Home from './Pages/Home'
import Forms from './Pages/Forms'
import Files from './Pages/Files'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import StdFile from './Components/StdFile';



function App() {
  return (
		<div className='App'>
			<Router>
				<a href='/'>
					<img
						src={logo}
						className='logo'
						alt=''
					/>
				</a>
				<Routes>
					<Route
						exact
						path='/'
						element={<Home />}
					/>
					<Route
						exact
						path='/form'
						element={<Forms />}
					/>
					<Route
						exact
						path='/files'
						element={<Files />}
					/>
					<Route
						exact
						path='/signup'
						element={<SignUp />}
					/>
					<Route
						exact
						path='/login'
						element={<Login />}
					/>
					<Route
						exact
						path='/stdfile'
						element={<StdFile />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

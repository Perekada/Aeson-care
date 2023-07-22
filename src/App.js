import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './logo.png'
import Home from './Pages/Home'
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
				{/* <button onClick={e => {window.localStorage.clear('student')}}>Clear</button> */}
				<Routes>
					<Route
						exact
						path='/'
						element={<Home />}
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

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import StdFile from './Components/StdFile';
import Navbar from './Components/Navbar';
import SendEmail from './Components/sendEmail';
import Report from './Components/Report';


function App() {
  return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>

				{/* <button onClick={e => {window.localStorage.clear('student')}}>Clear</button> */}
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
					<Route
						exact
						path='/sendemail'
						element={<SendEmail />}
					/>
					<Route
						exact
						path='/report'
						element={<Report />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

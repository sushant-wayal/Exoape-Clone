import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { 
	Route,
	RouterProvider, 
	createBrowserRouter, 
	createRoutesFromElements 
} from 'react-router-dom'

import {
	Home,
	News,
	Studio,
	Work,
	Contact,
	Story
} from "./Components"

const router = createBrowserRouter (
	createRoutesFromElements(
		<Route path="/" element={<App/>}>
			<Route path="" element={<Home/>}/>
			<Route path="/studio" element={<Studio/>}/>
			<Route path="/work" element={<Work/>}/>
			<Route path="/news" element={<News/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/story" element={<Story/>}/>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>,
)

import LocomotiveScroll from "locomotive-scroll"
import { Outlet } from "react-router-dom";
import { MouseFollower, Navbar, OurStory } from "./Components";
import { MouseFollowerProvider } from "./Context/MouseFollower";
import { useEffect, useState } from "react";
import gsap from "gsap";

const App = () => {
	const [content, setContent] = useState("");
	const appear = () => {
		gsap.to("#mouseFollower", {
			height: 80,
			width: 80,
			duration: 0.3,
		});
	};
	
	const disappear = () => {
		gsap.to("#mouseFollower", {
			height: 0,
			width: 0,
			duration: 0.3,
		});
	};

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
		})
	})

	return (
		<MouseFollowerProvider value={{ content, setContent, appear, disappear}}>
			<div className="w-lvw h-lvh" data-scroll-container>
				<MouseFollower/>
				<Navbar/>
				<Outlet/>
				<OurStory/>
			</div>
		</MouseFollowerProvider>
	)
}

export default App

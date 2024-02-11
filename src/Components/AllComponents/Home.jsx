import { HomeNews, HomeWork, Intro, ReelArea } from ".."

const Home = () => {
	return (
		<div className="overflow-x-hidden">
			<Intro/>
			<HomeWork/>
			<ReelArea/>
			<HomeNews/>
		</div>
	)
}

export default Home

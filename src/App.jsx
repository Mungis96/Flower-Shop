import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import Hero from "./components/Hero";
import Title from "./components/Title";

export default function App() {
	return (
		<>
			<TopBanner />
			<Header />
			<Hero />
			<Title
				text1={"Shop"}
				text2={" By category"}
				showLink={false}
			/>
		</>
	);
}

import React from "react";
import './App.css'
import Image_1 from "./assets/image_1.jpg";
import Image_4 from "./assets/image_4.jpg";
import Image_3 from './assets/image_3.jpg'
import Main from "./components/Main";
import Slider from "./components/Slider";
import Navbar from './components/Navbar'

const navbarLinks = [
	{ url: "#", title: "Home" },
	{ url: "#", title: "Journey" },
	{ url: "#", title: "Rewards" },
];


const App = () => {
	return (
		<div className="App">
			<Navbar navbarLinks={navbarLinks} />
			<Main imageSrc={Image_1} />
			<Slider
				imageSrc={Image_4}
				title={"Be an Explorer"}
				subtitle={
					"Our Platform offer a wide variety of travel locations!"
				}
			/>
			<Slider
				imageSrc={Image_3}
				title={"Wonderful memories for you lifetime!"}
				subtitle={"Your dreamland is onyl a few clicks away!"}
				flipped={true}
			/>
		</div>
	);
}; 

export default App;

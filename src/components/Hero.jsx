import Button from "./Button";
import "./component-style/Hero.css";
<<<<<<< HEAD
export default function Hero(){
    const name = 'white-btn'
    return(
        <>
        <div className="light-bg">
            <div className="wrapper hero">
<div className="hero-mid">
    <h1 className="main-title">Plants are our Passion</h1>
    <p className="slogan">Even if you don’t have a green thumb, you can still have a green home.
    </p>
<Button colorName={"white-btn"}>Get planting</Button>
</div>
            </div>
        </div>
        <div className="green-bg dark-line">

        </div>
        </>
    )
}
=======

export default function Hero() {
	return (
		<>
			<div className="light-bg">
				<div className="wrapper hero">
					<div className="hero-mid">
						<h1 className="main-title">Plants are our Passion</h1>
						<p className="slogan">
							Even if you don’t have a green thumb, you can still have a green
							home.
						</p>
						<Button colorName={"white-btn"}>Get planting</Button>
					</div>
				</div>
			</div>
			<div className="dark-bg dark-line"></div>
		</>
	);
}
>>>>>>> 90fcd68f98b580523591d696b5ea22456ac27e4a

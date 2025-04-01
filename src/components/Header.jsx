import "./component-style/Header.css";
import Logo from "../assets/img/Logo.svg";

export default function Header() {
	return <div className="header-bg">
				<div className="wrapper">
					<a href="#"><img src={Logo} alt="Logo" /></a>
				</div>
			</div>;
}

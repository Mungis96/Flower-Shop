<<<<<<< HEAD
import './component-style/Button.css'
export default function Button({colorName, children ='Shop now', href='#', ...props}){
    return(
    <a className = {`button ${colorName}`}href={href}>{children}</a>
    );
}
=======
import "./component-style/Button.css";
export default function Button({
	colorName,
	children = "SHOP NOW",
	href = "#",
	...props
}) {
	return (
		<a
			className={`button ${colorName}`}
			href={href}
		>
			{children}
		</a>
	);
}
>>>>>>> 90fcd68f98b580523591d696b5ea22456ac27e4a

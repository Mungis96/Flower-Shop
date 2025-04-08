import './component-style/Button.css'
export default function Button({colorName, children ='Shop now', href='#', ...props}){
    return(
    <a className = {`button ${colorName}`}href={href}>{children}</a>
    );
}

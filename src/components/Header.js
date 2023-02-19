import logo from "../assets/nba-logo.png"
const Header = () =>{
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h1 className="first-title">NBA</h1>
            <h2 className="second-title">NBA Legends</h2>
        </div>
    )
}

export default Header
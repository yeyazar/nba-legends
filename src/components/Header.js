import logo from "../assets/nba-logo.png"
const Header = () =>{
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h2 className="title">NBA Legends</h2>
        </div>
    )
}

export default Header
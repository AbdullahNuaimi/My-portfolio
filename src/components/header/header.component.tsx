import "./header.css";
const Header = () =>{
    return(
        <div className="head flex w-full h-16 bg-orange-500 fixed top-0 rounded-b-xl shadow-lg">
        <ul>
          <li className="bg-green-700">
            <a href="#Home">Home</a>
          </li>
        </ul>
        <ul>
          <li >
            <a href="#About">About</a>
          </li>
        </ul>
        <ul>
          <li >
            <a href="#Portfolio">Portfolio</a>
          </li>
        </ul>
        <ul>
          <li >
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    )
}


export default Header;
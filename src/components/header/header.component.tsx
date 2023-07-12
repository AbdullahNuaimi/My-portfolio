import "./header.css";
const Header = () =>{
    return(
        <div className="head flex w-full h-12 bg-orange-500 fixed top-0">
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
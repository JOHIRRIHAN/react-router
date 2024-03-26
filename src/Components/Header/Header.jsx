import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <h2>Navbar</h2>
        <nav style={{padding: "20px", justifyContent: 'space-evenly', alignItems: 'center', display: 'flex', fontSize: '20px', border: '2px solid skyblue'}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">contact</Link>
            
        </nav>
    </div>
  )
}

export default Header
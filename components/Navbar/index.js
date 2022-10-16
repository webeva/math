import style from "./style.module.css"

export default function Navbar() {
  return (
    <nav className={style.nav}>
        <a style={{fontSize:"1.3rem", fontWeight:"bold"}}>ASI Research</a>
        <div className={style.navLinks}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/data">Data</a></li>
            <li><a href="/analysis">Analysis</a></li>
            <li><a href="/more">More</a></li>
          </ul>
        </div>
      </nav>
  )
}

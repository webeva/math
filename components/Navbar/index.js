import style from "./style.module.css"
import Link from "next/link"
export default function Navbar() {
  return (
    <nav className={style.nav}>
        <a style={{fontSize:"1.3rem", fontWeight:"bold"}}>ASI Research</a>
        <div className={style.navLinks}>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/research"><a>Research</a></Link></li>
            <li><Link href="/data"><a>Data</a></Link></li>
            <li><Link href="/analysis"><a>Analysis</a></Link></li>
            <li><Link href="/more"><a>More</a></Link></li>
          </ul>
        </div>
      </nav>
  )
}

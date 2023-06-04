import { Link } from "react-router-dom"
import style from "./Landing.module.css"
const Landing = ()=>{
    return(
    <div className={style.divreset}>
        <h1>vista Landing</h1>
        <p></p>
        <Link className={style.links} to="/home">Home</Link>
    </div>
    )
}
export default Landing;
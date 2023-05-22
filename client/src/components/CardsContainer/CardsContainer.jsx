import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./CardsContainer.module.css"

export default function CardsContainer({ onClose}){

    const countries = useSelector(state => state.countries); //trae los countries




    return (
        <div className={style.container}>
            {countries.map(countrie => {
                return <Card
                    key={countrie.id}
                    id={countrie.id}
                    flags={countrie.flags}
                    name={countrie.name}
                    continents={countrie.continents}
                    onClose={onClose}
                />
            })}
        </div>
    )
}
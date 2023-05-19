import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./CardsContainer.module.css"

export default function CardsContainer(){

    const countries = useSelector(state => state.countries); //trae los countries


    // useEffect(() => {
    //     const fetchActivities = async () => {
    //         const id = countries.map(countries => countries.id).join(',');
    //         const response = await fetch(`http://localhost:3001/countries/${id}`);
    //         const data = await response.json();
    //         const activitiesById = {};
    //         data.forEach(countrie => {
    //             activitiesById[countrie.id] = countrie.activities;
    //         });
    //         setActivities(activitiesById);
    //     };
    //     fetchActivities();
    // }, [countries]);



    return (
        <div className={style.container}>
            {countries.map(countrie => {
                return <Card
                    key={countrie.id}
                    id={countrie.id}
                    flags={countrie.flags}
                    name={countrie.name}
                    continents={countrie.continents}
                />
            })}
        </div>
    )
}
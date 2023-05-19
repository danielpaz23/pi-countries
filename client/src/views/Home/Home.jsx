import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getCountries } from "../../redux/actions.js";



const Home = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])
    return (
        <>
            <h1>vista Home</h1>
            <CardsContainer/>
        </>
    )
}
export default Home;
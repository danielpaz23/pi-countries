import { useState } from "react";
import axios from "axios";
const Form = () => {

    const [form,setForm]= useState({
        name:"",
    difficulty:"",
    season:"",
    countries:"",
})
const [errors, setErrors]=useState({
    name:"",
    difficulty:"",
    season:"",
    countries:"",
})
const changeHandler= (event)=>{
    const property= event.target.name;
    const value= event.target.value;
    // validate({...form, [property]:value})
    setForm({...form, [property]:value})
}

// crear validate con todas las restrigciones necesarias;
// agregar que la dificultad sea selectiva de 1 a 5
// countries tiene que ser un array y especificar que son el id del pais
// selecionar la temporada por nombre

// search bar conectar el back con el front
// 
// boton de filter y order completos,
//  paginado completo

const submitHandler=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:3001/activities/", form)
    .then(res=> alert(res))
    .catch(err=>alert(err))
}

return (
    <form onSubmit={submitHandler}>
        <div>
            <label>Name</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
        </div>

        <div>
            <label>difficulty</label>
            <input type="text" value={form.difficulty} onChange={changeHandler} name="difficulty"/>
        </div>
        
        <div>
            <label>season: </label>
            <input type="text" value={form.season} onChange={changeHandler} name="season"/>
        </div>
        <div>
            <label>countries: </label>
            <input type="text" value={form.countries} onChange={changeHandler} name="countries"/>
        </div>
        <button type="submit">SUBMIT</button>
    </form>
)
}
export default Form;
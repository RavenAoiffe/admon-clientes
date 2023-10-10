import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Errores from "../components/Errores";


export async function action({request}){

    const formData = await request.formData();
    const datos = Object.fromEntries(formData)
    
    const email = formData.get('email');

    const errores  = [];
    if(Object.values(datos).includes('')){
        errores.push('todos los campos son obligatorios')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)){
        errores.push('El email no es válido')
    }

    if(Object.keys(errores).length){
       return errores;
    }

    return null;
}
const NuevoCliente = () => {

    const errores = useActionData()
    const navigate = useNavigate()

    //console.log(errores)
    return(
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

            <button className="bg-blue-800 text-white px-3 y-1 font-bold uppercase mt-6"
            onClick={()=>navigate(-1)}> 
                Volver
            </button>

            <div className="bg-white shadow rounded-md  md:w-3/4 mx-auto px-5 py-10 mt-10">     
                {errores?.length && errores.map((error, i) => <Errores key={i}>{error}</Errores>)}
                
                <Form
                    noValidate
                    method="POST"       
                >
                    <Formulario/>
                    <input type="submit" 
                    className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-lg text-white"
                    value="Registrar cliente" />
                </Form>
            </div>
        </>
    )
}

export default NuevoCliente;
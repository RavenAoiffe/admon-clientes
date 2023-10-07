import { useNavigate, Form } from "react-router-dom";
import Formulario from "../components/Formulario";


export function action(){
    console.log('submit al formulario...')
}
const NuevoCliente = () => {

    const navigate = useNavigate()


    return(
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

            <button className="bg-blue-800 text-white px-3 y-1 font-bold uppercase mt-6"
            onClick={()=>navigate(-1)}> 
                Volver
            </button>

            <div className="bg-white shadow rounded-md  md:w-3/4 mx-auto px-5 py-10 mt-10">     
                <Form
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
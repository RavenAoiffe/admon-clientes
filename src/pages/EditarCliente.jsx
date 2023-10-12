import { Form, useNavigate, useLoaderData, useActionData, redirect } from 'react-router-dom';
import {obtenerCliente, actualizarCliente} from '../data/clientes'
import Formulario from '../components/Formulario';
import Errores from '../components/Errores';

export async function loader({params}){
    const cliente = await obtenerCliente(params.clienteid);

    if(Object.values(cliente).length === 0){
        throw new Response('',{
            status: 404,
            statusText: "No hay resultados"
        })
    }
    //console.log(cliente)
    return cliente
}

export async function action({params, request}){
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

    //actualizar el cliente
    await actualizarCliente(params.clienteid, datos)

    return redirect('/');
}


const EditarCliente = () => {
    const cliente = useLoaderData()
    const navigate = useNavigate()
    const errores = useActionData()
    return (
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
                    <Formulario
                        cliente={cliente}
                    />
                    <input type="submit" 
                    className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-lg text-white"
                    value="Guardar cambios" />
                </Form>
            </div>
        </>
    );
}

export default EditarCliente;

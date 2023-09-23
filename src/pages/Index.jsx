export function loader()
{
    //funcion que se va a ejectutar cuando un componente cambie
    return 'Desde Loader';
}


const NuevoCliente = () => {

    return(
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administrador de clientes</p>
        </>
    )
}

export default NuevoCliente;
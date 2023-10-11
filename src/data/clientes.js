export async function obtenerClientes(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const result = await respuesta.json();

    return result;
}


export async function agregarCliente(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}
export async function obtenerClientes(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const result = await respuesta.json();

    return result;
}
const Cliente = ({cliente}) => {
    const {nombre,empresa,email,telefono,id} = cliente;
    
    return(
        <>
            <tr className="p-6">
                <td>{nombre}</td>
            </tr>
        </>
    )
}

export default Cliente;

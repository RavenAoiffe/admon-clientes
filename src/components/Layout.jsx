import { Outlet, Link, useLocation } from "react-router-dom";


const Layout = () => {

    const location = useLocation();

    return(
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
                <div className="mt-10">
                    <Link 
                        className={`${location.pathname === '/' ? 'text-blue-200' : 'text-white'} text-2xl block mt-2 hover:text-blue-500 text-white`} 
                        to="/">Clientes</Link>
                    <Link
                        className={`${location.pathname === '/Nuevo' ? 'text-blue-200' : 'text-white'} text-2xl block mt-2 hover:text-blue-500 text-white`} 
                     to="/Nuevo">Nuevo cliente</Link>
                </div>
            </aside>

            <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;
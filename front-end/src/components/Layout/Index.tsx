import { useState } from 'react';
import Logo from '../../assets/Logo_Slogan.png';
import Cadastro from '../CadatroEdicaoUsuario';

export default function Layout({children}: {children: React.ReactElement | null}) 
{    
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div className="flex flex-col h-screen">
            {openModal&& <Cadastro/>}
            <div className="shadow-xl h-[100px] flex justify-between">
                <img src={Logo} className="h-full pl-5"></img>
                <div className="flex justify-center items-center pr-16">
                    <button 
                        onClick={() => setOpenModal(!openModal)}
                        className="transition-all duration-1000 ease hover:bg-center bg-[0%_-35%] bg-repeat-x p-2 rounded-3xl text-2xl font-['Helvetica'] antialiased bg-[url('https://web.archive.org/web/20160312084140im_/http://splatoon.nintendo.com/assets/img/nav-bg-fill-blue.png?1443460871')]"
                        >
                        Cadastrar
                    </button>
                </div>
            </div>

            <div className="h-full flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}
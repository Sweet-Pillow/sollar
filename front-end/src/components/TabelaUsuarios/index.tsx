import { useEffect, useState } from "react"
import { API } from "../../services/api";
import Dropdown from "../Dropdown";

export default function TabelaUsuario(){

    const [usuarios, setUsuarios] = useState<Array<Object>>([]);
    const [acao, setAcao] = useState<string>();

    useEffect(() => {
        PegarTodosUsuarios();
    },[]);

    useEffect(() => {
        console.log(acao)
    },[acao])

    async function PegarTodosUsuarios(){
        const request = await API.get('api/Usuario')
        setUsuarios(request.data);
    }

    function InfoTable() {
        return (
        <>
            {usuarios.map(item => {
                return (
                    <tr className="grid sm:grid-cols-5 grid-cols-1 grid-rows-1 odd:bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out hover:ease-in" key={item.id}>
                        <h1 className="p-5 text-center">
                            {item.primeiroNome}
                        </h1>
                        <h1 className="p-5 text-slate-600 text-center">
                            {item.cpf}
                        </h1>
                        <h1 className="p-5 text-slate-600 text-center">
                            {item.email}
                        </h1>
                        <h1 className="p-5 text-slate-600 text-center">
                            {item.telefone}
                        </h1>
                        <div className="flex justify-end items-center pr-8">
                            <Dropdown acoes={setAcao}/>
                        </div>
                    </tr>
                )
            })}
        </>
        )
    }

    return (
        <>
            <div className="flex justify-center">
                <h1 className="text-2xl p-5">Usuários</h1>
                
            </div>

            <div className="flex justify-center items-center">
                <table className="border-2 border-gray-300 rounded-md w-4/5">
                    <thead className="sm:grid hidden grid-cols-5 grid-rows-1 border-b-2 border-gray-300">
                        <th>
                            <h1 className="p-5">Nome</h1>
                        </th>
                        <th>
                            <h1 className="p-5">CPF</h1>
                        </th>
                        <th>
                            <h1 className="p-5">Email</h1>
                        </th>
                        <th>
                            <h1 className="p-5">Telefone</h1>
                        </th>
                        <th>
                            <h1 className="p-5 text-right pr-8">Ação</h1>
                        </th>
                    </thead>
                    <tbody>
                        <InfoTable />
                    </tbody>
                </table>
                {/* <div className="border-2 border-gray-300 rounded-md flex-1">
                    <div className="sm:grid hidden grid-cols-5 grid-rows-1 border-b-2 border-gray-300">
                        <h1 className="p-5">Nome</h1>
                        <h1 className="p-5">CPF</h1>
                        <h1 className="p-5">Email</h1>
                        <h1 className="p-5">Telefone</h1>
                        <h1 className="p-5 text-right pr-8">Ação</h1>
                    </div>
                            
                    <div>
                        <InfoTable />
                    </div>
                </div> */}
            </div>
        </>
    )
}
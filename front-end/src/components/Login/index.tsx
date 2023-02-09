import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import ErroLogin from "../ErroLogin";

export const Login = () => {
    const auth = useAuth();

    const history = useNavigate();

    async function onFinish (values: {login: string, senha: string}){
    
        try {
            await auth.authenticate(values.login, values.senha)        

            history('/profile');

        } catch (error) {
            setErro(true);
        }
    }

    const[login, setLogin] = useState<string>("");
    const[senha, setSenha] = useState<string>("");
    const[erro, setErro] = useState<boolean>(false);

    function Logar(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        onFinish({login, senha});
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={Logar} className="bg-white rounded-lg shadow-md border border-black border-solid flex flex-col items-center justify-center p-12 w-2/5">
                    <h2 className="text-lg font-semibold mb-4">Fazer Login</h2>
                    {erro? <ErroLogin/> : ""}
                    <div className="w-full px-3">
                        <div className="mb-5">
                            <label
                                htmlFor="usuario-login"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Login
                            </label>
                            <input
                                onChange={(event) => 
                                    {
                                        setLogin(event.target.value);
                                    }
                                }
                                type="text"
                                name="usuario-login"
                                id="usuario-login"
                                placeholder="Login"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div className="w-full px-3">
                        <div className="mb-5">
                            <label
                                htmlFor="usuario-senha"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Senha
                            </label>
                            <input
                                onChange={(event) => 
                                    {
                                        setSenha(event.target.value);
                                    }
                                }
                                type="text"
                                name="usuario-senha"
                                id="usuario-senha"
                                placeholder="Senha"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>

                <div className="w-full flex justify-end">
                    <button
                        type="submit"
                        className="bg-indigo-500 w-full hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
                    >
                    Login
                    </button>
                </div>
            </form>
        </div>
    )
}
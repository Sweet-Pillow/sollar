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

            history('/profiles');

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
        <form onSubmit={Logar} className="bg-white rounded-lg drop-shadow-2xl flex flex-col items-center justify-center p-6 w-[30%]">
                <div className="w-full mb-10 mt-5">
                    <h1 className="text-3xl font-bold">Ola de novo!</h1>
                    <h1 className="text-sm text-gray-600">Bem-vindo de volta</h1>
                </div>
                {erro? <ErroLogin/> : ""}
                <div className="w-full">
                    <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
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
                            className=" pl-2 w-full outline-none border-none"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input
                            onChange={(event) => 
                                {
                                    setSenha(event.target.value);
                                }
                            }
                            type="password"
                            name="usuario-senha"
                            id="usuario-senha"
                            placeholder="Senha"
                            className="pl-2 w-full outline-none border-none"
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
    )
}
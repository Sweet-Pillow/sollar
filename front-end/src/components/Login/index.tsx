import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const Login = () => {
    const auth = useAuth();

    const history = useNavigate();

    async function onFinish (values: {email: string, senha: string}){
    
        try {
            await auth.authenticate(values.email, values.senha)        

            history('/profile');

        } catch (error) {
            console.log("Email ou senha errados")
        }
    }

    const[name, setName] = useState<string>();
    const[login, setLogin] = useState<string>();
    const[password, setPassword] = useState<string>();
    const[birthDate, setBirthDate] = useState<Date>();

    const[email, setEmail] = useState<string>("caio");
    const[senha, setSenha] = useState<string>("caio123");
    
    function createClient(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        onFinish({email, senha});
    }

    return (
        <form onSubmit={createClient} className="bg-white rounded-lg shadow-md border border-black border-solid flex flex-1 flex-col items-center justify-center p-12 ">
                <h2 className="text-lg font-semibold mb-4">Registration</h2>
                <div className="w-full px-3">
                    <div className="mb-5">
                        <label
                            htmlFor="client-name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Name
                        </label>
                        <input
                            onChange={(event) => 
                                {
                                    setName(event.target.value);
                                }
                            }
                            type="text"
                            name="client-name"
                            id="client-name"
                            placeholder="Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
                <div className="w-full px-3">
                    <div className="mb-5">
                        <label
                            htmlFor="client-birth-date"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Birth Date
                        </label>
                        <input
                            onChange={(event) => 
                                {
                                    setBirthDate(new Date(event.target.value));
                                }
                            }
                            type="date"
                            name="client-birth-date"
                            id="client-birth-date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>

                <div className="w-full px-3">
                    <div className="mb-5">
                        <label
                            htmlFor="client-login"
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
                            name="client-login"
                            id="client-login"
                            placeholder="Login"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
                <div className="w-full px-3">
                    <div className="mb-5">
                        <label
                            htmlFor="client-password"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Password
                        </label>
                        <input
                            onChange={(event) => 
                                {
                                    setPassword(event.target.value);
                                }
                            }
                            type="password"
                            name="client-password"
                            id="client-password"
                            placeholder="Password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>

            <div className="w-full flex justify-end">
                <button
                    type="submit"
                    className="bg-indigo-500 w-full hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
                >
                Create account
                </button>
            </div>
        </form>
    )
}
import { useEffect, useState } from "react";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function CadastroUsuario(){

    const history = useNavigate();

    const [login, setLogin] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [primeiroNome, setPrimeiroNome] = useState<string>("")
    const [sobrenome, setSobrenome] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [telefone, setTelefone] = useState<string>("")
    const [cep, setCep] = useState<string>("")
    const [estado, setEstado] = useState<string>("")
    const [cidade, setCidade] = useState<string>("")
    const [bairro, setBairro] = useState<string>("")
    const [endereco, setEndereco] = useState<string>("")
    const [numero, setNumero] = useState<string>("")
    const [complemento, setComplemento] = useState<string>("")

    const [estadosDisponiveis, setEstadosDisponiveis] = useState<Array<Object>>();
    const [erroSenha, setErroSenha] = useState<boolean>(false);
    const [erroLogin, setErroLogin] = useState<boolean>(false);
    const [erroEmail, setErroEmail] = useState<boolean>(false);
    const [erroCpf, setErroCpf] = useState<boolean>(false);

    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => 
            setEstadosDisponiveis(data))
    }, [])

    const MascaraTelefone = (value: string) => {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }

    const MascaraCPF = (value: string) => {
        return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    }

    const MascaraCep = (value: string) => {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    }

    async function Cadastrar(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(senha != confirmarSenha){
            setErroSenha(true);
        }

        if(!erroCpf && !erroEmail && !erroLogin && !erroSenha){
            try {
                const request = await API.post('api/Usuario',{
                    login: login,
                    senha: senha,
                    confirmarSenha: confirmarSenha,
                    primeiroNome: primeiroNome,
                    sobrenome: sobrenome,
                    cpf: cpf,
                    email: email,
                    telefone: telefone,
                    cep: cep,
                    estado: estado,
                    cidade: cidade,
                    bairro: bairro,
                    endereco: endereco,
                    numero: numero,
                    complemento: complemento
                })
                .then(resp => history("/login"))
            } catch (error) {
                console.log(error)
            }
        }
    }

    async function VerificaLogin(){
        const request = await API.get('api/Usuario/verificalogin/'+login);
        setErroLogin(request.data);
    }

    async function VerificaCpf(){
        const request = await API.get('api/Usuario/verificacpf/'+cpf);
        setErroCpf(request.data);
    }

    async function VerificaEmail(){
        const request = await API.get('api/Usuario/verificaemail/'+email);
        setErroEmail(request.data);
    }

    function AutoPreencher(value: string){
        if (value.length === 9){
            fetch(`http://viacep.com.br/ws/${value.replace('-','')}/json/`,
            {
                method: 'GET',

            })
            .then(res => res.json())
            .then(data => {
                setComplemento(data.complemento)
                setBairro(data.bairro)
                setCidade(data.localidade)
                setEstado(data.uf)
            })
        }
    }

    return (
    <div className="flex justify-center items-center">
        <form onSubmit={Cadastrar} className="bg-white rounded-lg shadow-md border border-black border-solid flex flex-col items-center justify-center p-12 w-2/4">
            <h1 className="text-4xl font-semibold mb-5">Cadastro</h1>
            <div className="w-full px-3 flex flex-row justify-between">
                <div className="mb-5">
                    <label
                        htmlFor="usuario-primeiro-nome"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Primeiro Nome
                    </label>
                    <input
                        value={primeiroNome}
                        onChange={(event) => 
                            {
                                setPrimeiroNome(event.target.value);
                            }
                        }
                        type="text"
                        name="usuario-primeiro-nome"
                        id="usuario-primeiro-nome"
                        placeholder="Primeiro Nome"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="usuario-sobrenome"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Sobrenome
                    </label>
                    <input
                        value={sobrenome}
                        onChange={(event) => 
                            {
                                setSobrenome(event.target.value);
                            }
                        }
                        type="text"
                        name="usuario-sobrenome"
                        id="usuario-sobrenome"
                        placeholder="Sobrenome"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
            </div>
            
            <div className="flex w-full justify-start">
                {erroEmail? <h2 className="text-red-500 ">Email Já Existe*</h2>: ""}

            </div>
            <div className="w-full px-3 flex flex-row justify-between">
                <div className="mb-5">
                    <label
                        htmlFor="usuario-email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Email
                    </label>
                    <input
                        value={email}
                        onBlur={VerificaEmail}
                        onChange={(event) => 
                            {
                                setEmail(event.target.value);
                            }
                        }
                        type="email"
                        name="usuario-email"
                        id="usuario-email"
                        placeholder="Email"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="usuario-telefone"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Telefone
                    </label>
                    <input
                        value={telefone}
                        onChange={(event) => 
                            {
                                setTelefone(MascaraTelefone(event.target.value));
                            }
                        }
                        type="text"
                        name="usuario-telefone"
                        id="usuario-telefone"
                        placeholder="(xx) xxxx-xxxx"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
            </div>
            
            <div className="flex w-full justify-start">
                {erroCpf? <h2 className="text-red-500">Cpf Já Existe*</h2>: ""}

            </div>
            <div className="w-full px-3 flex flex-row justify-between">
                <div className="mb-5">
                    <label
                        htmlFor="usuario-cpf"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Cpf
                    </label>
                    <input
                        onBlur={VerificaCpf}
                        value={cpf}
                        onChange={(event) => 
                            {
                                setCpf(MascaraCPF(event.target.value));
                            }
                        }
                        type="text"
                        name="usuario-cpf"
                        id="usuario-cpf"
                        placeholder="xxx.xxx.xxx-xx"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="usuario-cep"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Cep
                    </label>
                    <input
                        value={cep}
                        onChange={(event) => 
                            {
                                AutoPreencher(event.target.value);
                                setCep(MascaraCep(event.target.value));
                            }
                        }
                        type="text"
                        name="usuario-cep"
                        id="usuario-cep"
                        placeholder="xxxxx-xxx"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
            </div>

            <div className="w-full px-3 flex flex-row justify-between">
                <div className="mb-5">
                    <label
                        htmlFor="usuario-estado"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Estado
                    </label>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                        >
                            <option value="" selected disabled>Selecione o estado</option>
                            {estadosDisponiveis?.map((item) =>{
                                // console.log(item)
                                return (
                                    <option key={item.id} value={item.sigla}>{item.nome}</option> 
                                )
                            })}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="usuario-cidade"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Cidade
                    </label>
                    <input
                        value={cidade}
                        onChange={(event) => 
                            {
                                setCidade(event.target.value);
                            }
                        }
                        type="text"
                        name="usuario-cidade"
                        id="usuario-cidade"
                        placeholder="Cidade"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
            </div>

            <div className="w-full px-3 flex flex-row justify-between">
                <div className="mb-5">
                    <label
                        htmlFor="usuario-bairro"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Bairro
                    </label>
                    <input
                        value={bairro}
                        onChange={(event) => 
                            {
                                setBairro(event.target.value);
                            }
                        }
                        type="text"
                        name="usuario-bairro"
                        id="usuario-bairro"
                        placeholder="Bairro"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="usuario-endereco"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Endereco
                    </label>
                    <input
                        value={endereco}
                        onChange={(event) => 
                            {
                                setEndereco(event.target.value);
                            }
                        }
                        type="text"
                        name="usuario-endereco"
                        id="usuario-endereco"
                        placeholder="Endereco"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
            </div>

            <div className="w-full px-3 flex flex-row justify-between">
                <div className="mb-5">
                    <label
                        htmlFor="usuario-numero"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Numero
                    </label>
                    <input
                        value={numero}
                        onChange={(event) => 
                            {
                                setNumero(event.target.value);
                            }
                        }
                        type="text"
                        name="usuario-numero"
                        id="usuario-numero"
                        placeholder="Numero"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="usuario-complemento"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Complemento
                    </label>
                    <input
                        value={complemento}
                        onChange={(event) => 
                            {
                                setComplemento(event.target.value);
                            }
                        }
                        type="text"
                        name="usuario-complemento"
                        id="usuario-complemento"
                        placeholder="Complemento"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
            </div>
            
            {erroLogin? <h2 className="text-red-500">Login Já Existe</h2>: ""}
            <div className="w-full px-3">
                <div className="mb-5">
                    <label
                        htmlFor="usuario-login"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Login
                    </label>
                    <input
                        value={login}
                        onBlur={VerificaLogin}
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
            {erroSenha? <h2 className="text-red-500">Senhas diferentes.*</h2>: ""}
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
                        type="password"
                        name="usuario-senha"
                        id="usuario-senha"
                        placeholder="Senha"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
            </div>

            <div className="w-full px-3">
                <div className="mb-5">
                    <label
                        htmlFor="usuario-confirmar-senha"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Confirmar Senha
                    </label>
                    <input
                        onChange={(event) => 
                            {
                                setConfirmarSenha(event.target.value);
                            }
                        }
                        type="password"
                        name="usuario-confirmar-senha"
                        id="usuario-confirmar-senha"
                        placeholder="Confirmar Senha"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
            </div>

            <div className="w-full flex justify-end">
                <button
                    type="submit"
                    className="bg-indigo-500 w-full hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
                >
                Cadastrar
                </button>
            </div>
        </form>
    </div>
);
}
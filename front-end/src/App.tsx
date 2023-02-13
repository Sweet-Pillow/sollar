import { AuthProvider } from "./context/AuthProvider/Index";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Login } from "./components/Login";
import CadastroUsuario from "./components/CadastroUsuario";
import TabelaUsuario from "./components/TabelaUsuarios";
import Layout from "./components/Layout/Index";

export default function App(){
    
    return(
        <AuthProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {/* <Route path="/profiles" element={<ProtectedLayout><TabelaUsuario /></ProtectedLayout>}>
                        </Route> */}
                        <Route path="/profiles" element={<TabelaUsuario />}>
                        </Route>
                        <Route path="/main" element={<Login />}>
                        </Route>

                        <Route path="/*" element={<Login />}>
                        </Route>

                        <Route path="/cadastro" element={<CadastroUsuario />}>
                        </Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AuthProvider>
    );
}
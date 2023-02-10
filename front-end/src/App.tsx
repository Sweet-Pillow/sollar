import { AuthProvider } from "./context/AuthProvider/Index";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Login } from "./components/Login";
import CadastroUsuario from "./components/CadastroUsuario";
import TabelaUsuario from "./components/TabelaUsuarios";

export default function App(){
    
    return(
        <AuthProvider>
            <BrowserRouter>
                    <Routes>
                        <Route path="/profiles" element={<ProtectedLayout><TabelaUsuario /></ProtectedLayout>}>
                        </Route>
                        <Route path="/login" element={<Login />}>
                        </Route>

                        <Route path="/*" element={<Login />}>
                        </Route>

                        <Route path="/cadastro" element={<CadastroUsuario />}>
                        </Route>
                    </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
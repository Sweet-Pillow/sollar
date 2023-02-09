import { AuthProvider } from "./context/AuthProvider/Index";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Login } from "./components/Login";

export default function App(){
    
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/profile" element={<ProtectedLayout>
                            <h2>Esse é o componente profile</h2>
                        </ProtectedLayout>}>
                    </Route>
                    <Route path="/login" element={<Login />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
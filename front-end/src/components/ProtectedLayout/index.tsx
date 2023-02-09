import { useAuth } from "../../context/AuthProvider/useAuth"
import ErroAutorizacao from "../ErroAutorizacao";

export const ProtectedLayout = ({children} : {children: JSX.Element}) => {
    const auth = useAuth();

    if(!auth.token){
        return <ErroAutorizacao />;
    }

    return children;
}
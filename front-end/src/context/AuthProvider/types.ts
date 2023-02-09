export interface IUser{
    token?: string;
}

export interface IContext extends IUser{
    authenticate: (login: string, senha: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider{
    children: JSX.Element;
}
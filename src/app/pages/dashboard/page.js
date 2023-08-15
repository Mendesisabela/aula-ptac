import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    const Usuarios = getUsers()
   
    return (
        <div>
            <h1>Dashboard</h1>
            
        </div>

            {Usuarios.map((user)} =>
            {user.name}

    );
};
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard() {
    const users = await getUsers();
    return(
        <div>
            <Suspense fallback ={<p>Carregando...</p>}>
                <ListUsers users={users}/>
            </Suspense>
        </div>
    );
};
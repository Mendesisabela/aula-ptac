'use client'
import { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';
import styles from './style.css'

function Register() {
    const notify =() => toast.success("Usuário cadastrado com sucesso!");
 
    return (
    <body>
        <ul>
        <li><a href={"/pages/register"} class="active">Cadastrar</a></li>
          <li><a href={"/pages/dashboard"}>Home</a></li>
           <li><a href={"/pages/alter"}>Alterar</a></li>
       </ul>

      <div class="page"> 
            <form class="register">
        <h1>Cadastrar</h1>
        <p>Digite suas informações de registro nos campos abaixo.</p>

        <label for="text">Nome</label>
        <input type="text" placeholder="Digite seu nome"/>
        <label for="text">E-mail</label>
        <input type="text" placeholder="Digite seu e-mail"/>
        <label for="password">Senha</label>
        <input type="password" placeholder="Digite sua senha"/>

        <button className="button" onClick={notify}>Register</button>
        <ToastContainer />
    </form>
    </div>

    </body>


    );
};
export default Register
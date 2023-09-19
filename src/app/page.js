'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from './style.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
     const userAuth = await handlerAcessUser(user);
     if(userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha!");
     }
      push('/pages/dashboard');
    } catch {
      refresh();
    }
  }
  return (
    <div class="page"> 
      <form onSubmit={handlerLogin} class="login">
        
      <h1>Login</h1>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="button">Entrar</button>
      </form>
      <ToastContainer />
    </div>
  )
}

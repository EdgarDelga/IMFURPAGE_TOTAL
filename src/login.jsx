import { useForm } from 'react-hook-form';
import {collection, addDoc, query, where, getDocs} from "firebase/firestore";
import { db } from "./assets/firebase/config";
import {  useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';


let UID = null;
export default function Login() {

    const [icono, setIcono] = useState('fa-solid fa-eye orden-iconoOjo');
    const [typeContraseña, settypeContraseña] = useState('password');
    const [userUID, setUserUid] = useState(null);

    const clickIcono = () => {
        if(icono === 'fa-solid fa-eye orden-iconoOjo'){
            setIcono('fa-solid fa-eye-slash orden-iconoOjo');
            settypeContraseña('text');
        } else{
            setIcono('fa-solid fa-eye orden-iconoOjo');
            settypeContraseña('password');
        }
    }  

    const { register, formState: {errors}, handleSubmit, getValues, setError } = useForm();
    const navigate = useNavigate();
    const auth = getAuth();

    const onSubmit = async (data) =>{
        const {email, password} = data;

        try{
            console.log(email, password)
            signInWithEmailAndPassword(auth, email, password)
             .then((userCredential) =>{
                const user = userCredential.user;
                const userName = user.displayName;
                console.log(user.uid);
                setUserUid(user.uid);
                UID = user.uid;
                alert("USUARIO LOGUEADO");
                navigate("/#INICIO");
             }) 
             .catch(() =>{
                ("ola error jaja");
             })

        } catch(error){
            console.log("Error al iniciar  sesión; ", error);
        }
    }

    return ( 
 
<>
        <section className="orden-formulario">

            <div className="formulario">

                <div className="contenedor-formulario">
                    <div className="titulo-formulario"><strong>INICIAR SESIÓN</strong></div>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="formulario-box">
                            <input type="email" {...register('email', {
                                required:true
                            })} />
                            {errors.password?.type === 'required' && <p className='errores'>Campo obligatorio</p>}
                            <label>Correo eléctronico</label>
                        </div>
                        <div className="formulario-box">
                            <input type={typeContraseña} {...register('password',{
                                required:true
                            })} />
                            {errors.password?.type === 'required' && <p className='errores'>Campo obligatorio</p>}
                            <i class={icono} onClick={clickIcono}></i>
                            <label>Contraseña</label>
                        </div>
                        <div className="recordar">
                            <a href="" className="texto-subrayado">¿Olvidaste tu contraseña?</a>
                        </div>
                        <input type="submit" />
                        <div className="registro">
                            <p>¿Aún no tienes cuenta? <a href="/registrarse" className="texto-subrayado">¡Registrate!</a></p>
                        </div>    
                    </form>
                </div>


            </div>


        </section>


</>        
    );

}


export function DatosUser() {
    return (  
        <p>{ UID }</p>
    );
}

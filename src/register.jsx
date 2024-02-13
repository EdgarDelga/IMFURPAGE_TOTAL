import { useForm } from 'react-hook-form';
import {collection, addDoc, query, where, getDocs, doc, setDoc} from "firebase/firestore";
import { db } from "./assets/firebase/config";
import {  useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { useState } from 'react';

function Register() {

    const [icono, setIcono] = useState('fa-solid fa-eye orden-iconoOjo');
    const [typeContraseña, settypeContraseña] = useState('password');

    const clickIcono = () => {
        if(icono === 'fa-solid fa-eye orden-iconoOjo'){
            setIcono('fa-solid fa-eye-slash orden-iconoOjo');
            settypeContraseña('text');
        } else{
            setIcono('fa-solid fa-eye orden-iconoOjo');
            settypeContraseña('password');
        }
    }  

    const [icono2, setIcono2] = useState('fa-solid fa-eye orden-iconoOjo');
    const [typeContraseña2, settypeContraseña2] = useState('password');

    const clickIcono2 = () => {
        if(icono2 === 'fa-solid fa-eye orden-iconoOjo'){
            setIcono2('fa-solid fa-eye-slash orden-iconoOjo');
            settypeContraseña2('text');
        } else{
            setIcono2('fa-solid fa-eye orden-iconoOjo');
            settypeContraseña2('password')
        }
    }  

    const { register, formState: {errors}, handleSubmit, getValues, setError } = useForm();
    const navigate = useNavigate();
    const auth = getAuth();
    const onSubmit = async(data) => {

        const contraseña = data.contraseña;
        const repetirContraseña = data.repetirContraseña;

        const emailExiste = query(collection(db, 'usuarios'), where('data.email', '==', data.email));
        const emailExisteSnapshots = await getDocs(emailExiste);
        if(!emailExisteSnapshots.empty){
            setError('email', {type: 'manual', message: 'El email ya esta registrado'});
            return;
        }

        if(contraseña !== repetirContraseña){
            setError('contraseña', {type: 'manual', message: 'Las contraseñas no coinciden'});
            return;
        }

        try{
        const datosUser = {
            datos: data
        }
        console.log(datosUser);
        console.log(emailExisteSnapshots)
        console.log(data.email, data.contraseña);

        const userCredential = await createUserWithEmailAndPassword(auth, data.email,  data.contraseña);
        const user = userCredential.user
        const userName = data.nombre_fursona;
        const userRef = doc(db, 'usuarios', user.uid);  

        await setDoc(userRef, datosUser);
        sendEmailVerification(auth.currentUser);
        console.log (userCredential.user, data.email, data.password);
        console.log("ola exito")
        alert("USUARIO "+ userName + " REGISTRADO");

        navigate('/#INICIO');
        } catch(error){
            console.error("Error al registrar usuario", error);
        }
    };
    
    return (  
        <>
        
        <section className="orden-formulario">

            <div className="formulario">

                <div className="contenedor-formulario">
                    <div className="titulo-formulario"><strong>¡Unete a la grán familia del IMFUR!</strong></div>
                    <hr />
                    <p className="red"> *Los datos deben ser escritos como vienen en tu identificación oficial*</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="formulario-box">
                            <input type="text" {...register('nombre', {
                                required: true,
                                maxLength:70
                            })} />
                            {errors.nombre?.type === 'required' && <p className="errores">El campo es obligatorio</p>}
                            {errors.nombre?.type === 'maxLength' && <p className="errores">Límite de carácteres alcanzado</p>}
                            <label>Nombre (s)</label>
                        </div>
                        <div className="formulario-box">
                            <input type="text" {...register('apellido_p',{
                                required: true,
                                maxLength:30
                            })}/>
                            {errors.apellido_p?.type === 'required' && <p className="errores">El campo es obligatorio</p>}
                            {errors.apellido_p?.type === 'maxLength' && <p className="errores">Límite de carácteres alcanzado</p>}
                            <label>Apellido Paterno</label>
                        </div>
                        <div className="formulario-box">
                            <input type="text" {...register('apellido_m',{
                                required: true,
                                maxLength:30
                            })}/>
                            {errors.apellido_m?.type === 'required' && <p className="errores">El campo es obligatorio</p>}
                            {errors.apellido_m?.type === 'maxLength' && <p className="errores">Límite de carácteres alcanzado</p>}
                            <label>Apellido Materno</label>
                        </div>
                        <div className="formulario-box calendario">
                            <input type="date" {...register('fecha_nac',{
                                required: true,
                            })}/>
                            {errors.apellido_m?.type === 'required' && <p className="errores">El campo es obligatorio</p>}
                            <label>Fecha de Nacimiento</label>
                        </div>
                        <div className="formulario-box">
                            <input type="text" {...register('nombre_fursona',{
                                required: true,
                                maxLength: 50
                            })}/>
                            {errors.nombre_fursona?.type === 'required' && <p className="errores">El campo es obligatorio</p>}
                            {errors.nombre_fursona?.type === 'maxLength' && <p className="errores">Límite de carácteres alcanzado</p>}
                            <label>Nombre completo de tu Fursona</label>
                        </div>
                        <div className="formulario-box">
                            <input type="text" {...register('contacto',{
                                required: true,
                                maxLength: 50
                            })}/>
                            {errors.contacto?.type === 'required' && <p className="errores">El campo es obligatorio</p>}
                            {errors.contacto?.type === 'maxLength' && <p className="errores">Límite de carácteres alcanzado</p>}
                            <label>Contacto (Telegram, Facebook, Instagram)</label>
                        </div>
                        <div className="formulario-box">
                            <input type="text" {...register('email',{
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            })}/>
                            {errors.email?.type === 'required' && <p className="errores">El campo es obligatorio</p>}
                            {errors.email?.type === 'pattern' && <p className='errores'>Introduce un correo electronico válido</p>}
                            {errors.email?.type === 'manual' && <p className='errores'> {errors.email.message} </p>}
                            <label>Correo eléctronico</label>
                        </div>
                        <div className="formulario-box">
                            <input type={typeContraseña} {...register('contraseña',{
                                required: true,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/i,
                            })}/>
                            <label>Contraseña</label>
                            <i class={icono} onClick={clickIcono} ></i>
                            {errors.contraseña?.type === "required" && <p className='errores'>El campo es oblgatorio</p>}
                            {errors.contraseña?.type === "pattern" && <p className='errores'>La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.</p>}
                        </div>
                        <div className="formulario-box">
                            <input type={typeContraseña2} {...register('repetirContraseña',{
                                validate: (value) =>
                                value === getValues('contraseña') || 'Las contraseñas no coinciden'
                            })} />
                            <label>Repite la contraseña</label>
                            <i class={icono2} onClick={clickIcono2}></i>
                            {errors.repetirContraseña && (
                                <p className="errores"> {errors.repetirContraseña.message} </p>
                            )}
                        </div>
                        <div className="formulario-box">
                            <input type="text"{...register('telefono',{
                                required: true,
                                pattern: /^[0-9]+$/,
                                maxLength: 10
                            })}/>
                            {errors.telefono?.type === 'pattern' && <p className="errores">El campo solo debe contener números</p> }
                            {errors.telefono?.type === 'required' && <p className="errores">El campo es obligatorio</p> }
                            {errors.telefono?.type === 'maxLength' && <p className="errores">El campo solo debe contener 10 números</p> }
                            <label>Número de celular</label>
                        </div>
                        <div className="formulario-box">
                            <input type="text" {...register('folio')}/>
                            <label>Folio de Tarjeta IMFUR (Opcional)</label>
                        </div>

                        <input type="submit" value="Registrarse" />
                        <div className="registro">
                            <p>¿Ya tienes cuenta? <a href="/login" className="texto-subrayado"  >¡Inicia Sesión!</a></p>
                        </div>    
                    </form>
                </div>


            </div>

            </section>


        </>
    );
}

export default Register;
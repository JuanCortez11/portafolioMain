import React, { useState } from 'react'
//import './styles.css'
import {TorneosTable} from './tablaTorneos' // lo importo asi porque el componente esta `export default `
import service from "../services/torneosService"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"


// funcion para darle formato a la fecha y hora (en el form el tipo de dato es datetime-local)




export default function RegistroTorneo() {
    const [rows, setRows] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await service.postTorneo(data)
        .then(() => {
            navigate('/torneos'); // Redireccionar a /reservas después de enviar el formulario
        })
        .catch((error) => {
            console.error("Error al crear el Torneo:", error);
            
        });
    }

    

    const onVolver = () => {
        navigate("/torneos");
    }

    return (
        <div>
            <form class="form-container" onSubmit={handleSubmit(onSubmit)}>
                <h3>Registrar Nuevo Torneo</h3>
                <div className="form-container">
                    <label class="form-label" htmlFor="nombreTorneo">Nombre Torneo:</label>
                    <input type="text" class="form-input" id="nombreTorneo"  {...register("nombreTorneo", { required: 'Este campo es requerido' })} />
                    {errors.nombreTorneo && <span className='error'>{errors.nombreTorneo.message}</span>}
                </div>
                <div className="form-container">
                    <label class="form-label" htmlFor="fechaInicioTorneo">fecha Inicio Torneo:</label>
                    <input type="datetime-local" class="form-input" id="fechaInicioTorneo" {...register("fechaInicioTorneo", { required: 'Este campo es requerido' })} />
                    {errors.fechaInicioTorneo && <span className='error'>{errors.fechaInicioTorneo.message}</span>}
                </div>
                <div className="form-container">
                    <label class="form-label" htmlFor="fechaFinTorneo">fecha Fin Torneo:</label>
                    <input type="datetime-local" class="form-input" id="fechaFinTorneo" {...register("fechaFinTorneo", { required: 'Este campo es requerido' })} />
                    {errors.fechaFinTorneo && <span className='error'>{errors.fechaFinTorneo.message}</span>}
                </div>
                <div className="form-container">
                    <label class="form-label" htmlFor="locacionTorneo">Locacion Torneo:</label>
                    <input type="text" class="form-input" id="locacionTorneo"  {...register("locacionTorneo", { required: 'Este campo es requerido' })} />
                    {errors.locacionTorneo && <span className='error'>{errors.locacionTorneo.message}</span>}
                </div>
                <div className="form-container">
                    <label class="form-label" htmlFor="fondoDePremiosTorneo">fondo De Premios Torneo:</label>
                    <input type="number" class="form-input" id="fondoDePremiosTorneo" {...register("fondoDePremiosTorneo", { required: 'Este campo es requerido'  })} />
                    {errors.fondoDePremiosTorneo && <span className='error'>{errors.fondoDePremiosTorneo.message}</span>}
                </div>
                <div className="form-container form-label">
          <button className="form-button bg-success" type="submit">
            Registrar
          </button>
          <button className="form-button bg-success" type="button" onClick={() => reset()}>
            Limpiar
          </button>
          <button className="form-button bg-success"  onClick={onVolver}>
           <i class="bi bi-arrow-left-square-fill"></i> Volver
          </button>
        </div>

                
            </form>
            
        </div >
    )
}

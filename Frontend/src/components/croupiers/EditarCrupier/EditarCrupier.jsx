import React, { useEffect, useState } from "react";
import croupierService from "../../../services/croupierService";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export const EditarCrupier = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const navigate = useNavigate()
    const [crupier, setCrupier] = useState()
    const {state} = useLocation()

    useEffect(() => {
        croupierService.getCrupierById(state.idCrupier).then(crupier => setCrupier(crupier))
    }, [])

    const onSubmit = (data) => {
        const crupier = {
            idCrupier: state.idCrupier,
        }
        if(data.nombre){
            crupier.nombre = data.nombre
        }else{
            crupier.nombre = state.nombre
        }

        if(data.edad){
            crupier.edad = data.edad
        }else{
            crupier.edad = state.edad
        }

        if (data.fechaInicioActividadLaboral){
            crupier.fechaInicioActividadLaboral = data.fechaInicioActividadLaboral
        }else{
            crupier.fechaInicioActividadLaboral = state.fechaInicioActividadLaboral
        }

        croupierService.putCrupier(crupier)
        navigate("/crupiers")
    }

    const onVolver = () => {
        navigate("/crupiers")
    }

    return (
        <div className="m-3">
            <h2>Modificar Crupier</h2>
            {crupier && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-container">
                        <label className="form-label" htmlFor="nombre">Nombre crupier:</label>
                        <input type="text" className="form-input" id="nombre" {...register("nombre")} />
                    </div>
                    <div className="form-container">
                        <label className="form-label" htmlFor="edad">Edad:</label>
                        <input type="date" className="form-input" id="edad" {...register("edad")} />
                    </div>
                    <div className="form-container">
                        <label className="form-label" htmlFor="fechaInicioActividadLaboral">Fecha de Inicio de Actividad Laboral:</label>
                        <input type="date" className="form-input" id="fechaInicioActividadLaboral" {...register("fechaInicioActividadLaboral")} />
                    </div>
                    <div className="form-container form-label">
                        <button className="form-button bg-success" type="submit">
                            Modificar Crupier
                        </button>
                        <button className=" form-button bg-success"  type="button" onClick={() => reset()}>
                            Limpiar
                        </button>
                        <button className="form-button bg-success" onClick={onVolver}>
                            Volver
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}
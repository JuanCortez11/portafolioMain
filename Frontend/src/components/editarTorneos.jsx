import React, { useEffect, useState } from "react";
import torneosService from "../services/torneosService";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

export const EditarTorneos = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const [torneo, setTorneo] = useState();
  const { state } = useLocation();

  useEffect(() => {
    torneosService.getTorneosById(state.idTorneo).then(torneo => setTorneo(torneo));
  }, []);

  const onSubmit = (data) => {
    const torneo = {
      idTorneo: state.idTorneo,
    };

    if (data.nombreTorneo) {
      torneo.nombreTorneo = data.nombreTorneo;
    } else {
      torneo.nombreTorneo = state.nombreTorneo;
    }

    if (data.fechaInicioTorneo) {
      torneo.fechaInicioTorneo = data.fechaInicioTorneo;
    } else {
      torneo.fechaInicioTorneo = state.fechaInicioTorneo;
    }

    if (data.fechaFinTorneo) {
      torneo.fechaFinTorneo = data.fechaFinTorneo;
    } else {
      torneo.fechaFinTorneo = state.fechaFinTorneo;
    }

    if (data.locacionTorneo) {
      torneo.locacionTorneo = data.locacionTorneo;
    } else {
      torneo.locacionTorneo = state.locacionTorneo;
    }

    if (data.fondoDePremiosTorneo) {
      torneo.fondoDePremiosTorneo = data.fondoDePremiosTorneo;
    } else {
      torneo.fondoDePremiosTorneo = state.fondoDePremiosTorneo;
    }

    torneosService.putTorneo(torneo);
    navigate("/torneos");
  };

  const onVolver = () => {
    navigate("/torneos");
  };

  return (
    <div className="m-3">
      <h2>Modificar Torneo</h2>
      {torneo && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container">
            <label className="form-label" htmlFor="nombreTorneo">Nombre Torneo:</label>
            <input type="text" className="form-input" id="nombreTorneo" {...register("nombreTorneo")} />
            {errors.nombreTorneo && <span className='error'>{errors.nombreTorneo.message}</span>}
          </div>
          <div className="form-container">
            <label className="form-label" htmlFor="fechaInicioTorneo">Fecha Inicio Torneo:</label>
            <input type="datetime-local" className="form-input" id="fechaInicioTorneo" {...register("fechaInicioTorneo")} />
            {errors.fechaInicioTorneo && <span className='error'>{errors.fechaInicioTorneo.message}</span>}
          </div>
          <div className="form-container">
            <label className="form-label" htmlFor="fechaFinTorneo">Fecha Fin Torneo:</label>
            <input type="datetime-local" className="form-input" id="fechaFinTorneo" {...register("fechaFinTorneo")} />
            {errors.fechaFinTorneo && <span className='error'>{errors.fechaFinTorneo.message}</span>}
          </div>
          <div className="form-container">
            <label className="form-label" htmlFor="locacionTorneo">Locación Torneo:</label>
            <input type="text" className="form-input" id="locacionTorneo" {...register("locacionTorneo")} />
            {errors.locacionTorneo && <span className='error'>{errors.locacionTorneo.message}</span>}
          </div>
          <div className="form-container">
            <label className="form-label" htmlFor="fondoDePremiosTorneo">Fondo de Premios Torneo:</label>
            <input type="number" className="form-input" id="fondoDePremiosTorneo" {...register("fondoDePremiosTorneo")} />
            {errors.fondoDePremiosTorneo && <span className='error'>{errors.fondoDePremiosTorneo.message}</span>}
          </div>
          <div className="form-container form-label">
            <button className="form-button bg-success" type="submit">Modificar Torneo</button>
            <button className="form-button bg-success" type="button" onClick={() => reset()}>Limpiar</button>
            <button className="form-button bg-success" onClick={onVolver}>Volver</button>
          </div>
        </form>
      )}
    </div>
  );
};

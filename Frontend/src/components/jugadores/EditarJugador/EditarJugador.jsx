import React, { useEffect, useState } from "react";
import mesasService from "../../../services/mesasService";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import jugadoresService from "../../../services/jugadoresService";
import { useForm } from "react-hook-form";

export const EditarJugador = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {} = useSearchParams();
    const [mesas, setMesas] = useState([]);
    const [jugador, setJugador] = useState();
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            jugadoresService.getJugadorById(state.idJugador),
            mesasService.getMesas()
        ])
        .then(([jugadorData, mesasData]) => {
            setJugador(jugadorData);
            setMesas(mesasData);
        });
    }, []);

    const onSubmit = (data) => {
        const jugador = {
            idJugador: state.idJugador,
        };

        if (data.idMesaJugador) {
            jugador.idMesaJugador = data.idMesaJugador;
        } else {
            jugador.idMesaJugador = state.idMesaJugador;
        }

        if (data.nombreJugador) {
            jugador.nombreJugador = data.nombreJugador;
        } else {
            jugador.nombreJugador = state.nombreJugador;
        }

        if (data.edadJugador) {
            jugador.edadJugador = data.edadJugador;
        } else {
            jugador.edadJugador = state.edadJugador;
        }

        if (data.emailJugador) {
            jugador.emailJugador = data.emailJugador;
        } else {
            jugador.emailJugador = state.emailJugador;
        }

        const fechaActual = new Date();
        const fechaSinHora = fechaActual.toISOString().split('T')[0];

        jugador.fechaCreacionJugador = state.fechaCreacionJugador;
        jugador.fechaActualizacionJugador = fechaSinHora;

        jugadoresService.putJugador(jugador);
        navigate('/jugadores');
    };

    const onVolver = () => {
        navigate('/jugadores');
    };

    return (
        <div className="m-3">
            <h2>Modificar Jugador</h2>
            {jugador && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-container">
                        <label className="form-label" htmlFor="idMesaJugador">Mesa:</label>
                        <select id='idMesaJugador' {...register("idMesaJugador")}>
                            <option value="">Seleccionar Mesa</option>
                            {mesas.map((mesa) => (
                                <option key={mesa.idMesa} value={mesa.idMesa}>
                                    {mesa.nombreMesa}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-container">
                        <label className="form-label" htmlFor="nombreJugador">Nombre Jugador:</label>
                        <input type="text" className="form-input" id="nombreJugador" {...register("nombreJugador")} />
                    </div>

                    <div className="form-container">
                        <label className="form-label" htmlFor="edadJugador">Edad Jugador:</label>
                        <input type="number" className="form-input" id="edadJugador" {...register("edadJugador")} />
                    </div>

                    <div className="form-container">
                        <label className="form-label" htmlFor="emailJugador">Email Jugador:</label>
                        <input type="email" className="form-input" id="emailJugador" {...register("emailJugador")} />
                    </div>

                    <div className="form-container form-label">
                        <button className="form-button bg-success" type="submit">Modificar Jugador</button>
                        <button className="form-button bg-success" type="button" onClick={() => reset()}>Limpiar</button>
                        <button className="form-button bg-success" onClick={onVolver}>Volver</button>
                    </div>
                </form>
            )}
        </div>
    );
};

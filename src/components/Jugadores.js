import React from 'react';
import { connect } from 'react-redux';
//styles
import './styles.css';

const Jugadores = ({ jugadores, addTitular, addSuplente })=>{
        return(
                <div className='T'>
                        <h1>Jugadores</h1>
                        <div className="cancha">
                                {

                                jugadores.map((j, index)=>(
                                <article key={index} className='jugador' >
                                        <img src={j.foto} alt={j.nombre} />
                                        <h3>{j.nombre}</h3>
                                        <div className='botones'>
                                                <button onClick={()=> addTitular(j) } >Titular</button>
                                                <button onClick={()=> addSuplente(j) }>Suplente</button>
                                        </div>
                                </article>
                                ))}
                        </div>
                </div>
        );
}

const mapStateToProps = state => ({
        jugadores: state.jugadores
})

const dispatch = dispatch => ({
        addTitular(j) {
                dispatch({
                        type: 'ADD_T',
                        j
                })
        },
        addSuplente(j) {
                dispatch({
                        type: 'ADD_S',
                        j
                })
        }
})


export default connect(mapStateToProps, dispatch)(Jugadores);

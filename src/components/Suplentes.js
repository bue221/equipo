import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const Suplentes = ({ suplentes, removeSuplente })=>{
        return(
                <div className='T'>
                        <h1>Suplentes</h1>
                        <div className="cancha canchaS">
                                {
                                suplentes.map(i=>(
                                <article className="jugador" key={i.id}>
                                                <img src={i.foto} alt={i.nombre} />
                                                <button onClick={ ()=>removeSuplente(i) } >X</button>
                                </article>
                                ))
                                }
                        </div>
                </div>
        );
}

const props = state =>({
        suplentes: state.suplentes
});

const dispatch = dispatch => ({
        removeSuplente(i) {
                dispatch({
                        type: 'RE_S',
                        i
                })
        }
})

export default connect(props, dispatch)(Suplentes);

import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const Titulares = ({ titulares, removeTitular })=>{
        return(
                <div className='T'>
                        <h1>Titulares</h1>
                        <div className="canchaT">
                                {
                                titulares.map(i=>(
                                <article className="jugador" key={i.id}>
                                                <img src={i.foto} alt={i.nombre} />
                                                <button onClick={()=> removeTitular(i) }>X</button>
                                </article>
                                ))
                                }
                        </div>
                </div>
        );
}


const props = state =>({
        titulares: state.titulares
});

const dispatch = dispatch => ({
        removeTitular(i) {
                dispatch({
                        type: 'RE_T',
                        i
                })
        }
})

export default connect(props, dispatch)(Titulares);

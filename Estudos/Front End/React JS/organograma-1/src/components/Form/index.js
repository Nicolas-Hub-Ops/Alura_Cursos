
import { useState } from 'react';
import './Form.css';

const Form = (props) => {

    const [ name, setName ] = useState('');
    const [ cargo, setCargo ] = useState('');
    const [ image, setImage ] = useState('');
    const [ time, setTime ] = useState('');
    
    const listenerName = (event) => {
        setName(event.target.value)
    }
    
    const listenerCargo = (event) => {
        setCargo(event.target.value)
    }
    
    const listenerImage = (event) => {
        setImage(event.target.value)
    }

    const listenerTime = (event) => {
        setTime(event.target.value)
    }
    
    const createCard = (event) => {
        event.preventDefault()
        props.registerNewPeople({
            name, 
            cargo,
            image,
            time
        })
        setTime('')
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = '')
        )
        document.querySelector('#select__team').value = ''
    }

    return (
        <div className='container__form'>
            <form className='form' onSubmit={createCard}>
                <h2 className='form__title'>Preencha os dados para criar o card do colaborador.</h2>
                <label className='form__label' for='nome'>Nome</label>
                <input onChange={listenerName} maxLength={30} required className='form__input' id='nome' placeholder='Digite seu nome'/>

                <label className='form__label' for='cargo'>Cargo</label>
                <input onChange={listenerCargo} maxLength={20} required className='form__input' id='cargo' placeholder='Digite seu cargo'/>

                <label className='form__label' for='imagem'>Imagem</label>
                <input onChange={listenerImage} required className='form__input' id='imagem' placeholder='Informe o endereço da imagem'/>

                <label className='form__label' for='time'>Time</label>
                <select required className='form__select' onChange={listenerTime} id='select__team'>
                    <option value='' checked></option>
                    { 
                        props.options.map( item => <option className='form__options' key={item.nome}>{item.nome}</option> )
                    }
                </select>

                <button className='form__button'>Criar Card</button>
            </form>
        </div>
    )
}

export default Form;
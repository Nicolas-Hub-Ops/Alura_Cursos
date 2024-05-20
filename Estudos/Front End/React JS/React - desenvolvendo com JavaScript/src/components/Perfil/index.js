import './Perfil.css';

const Perfil = (props) => {

    const autoHeader = { backgroundColor: props.colorTheme }

    return (
        <div className='perfil'>
            <div className='header' style={ autoHeader }>
                <img src={props.image} alt='Vinicios Neves'/>
            </div>
            <div className='footer'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Perfil;
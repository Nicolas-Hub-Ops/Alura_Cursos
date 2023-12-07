import Perfil from '../Perfil';
import './Team.css';

const Team = (props) => {

    const autoBackground = { backgroundColor: props.themeColor }
    const autoUnderline = { backgroundColor: props.perfilColor }

    return (
        (props.peoples.length > 0) ?
            <section className='team' style={ autoBackground }>
                <h3>{props.name}</h3>
                <span style={ autoUnderline }></span>
                <br/>
                <div className='container__perfil'>
                    {
                        props.peoples.map( perfil => <Perfil 
                                                            key={perfil.name} 
                                                            colorTheme={props.perfilColor}
                                                            image={perfil.image} 
                                                            nome={perfil.name} 
                                                            cargo={perfil.cargo} 
                                                        /> )
                    }
                </div>
            </section>
        : ''
    )
}

export default Team;
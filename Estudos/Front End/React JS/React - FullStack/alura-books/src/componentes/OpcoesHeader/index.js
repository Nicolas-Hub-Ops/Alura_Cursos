import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    text-transform: uppercase;
`

const Opcoes = styled.ul`
    display: flex;
`

const options = [
    {
        "name": "categorias",
        "rota": "/categorias"
    },
    {
        "name": "favoritos",
        "rota": "/favoritos"
    },
    {
        "name": "minha estante",
        "rota": "/minhaestante"
    }
]

function OpcoesHeader() {
    return (
        <Opcoes>
            { options.map( (option) => (
                <Link to={option.rota}>
                    <Opcao key={option.name}>
                        <p>{option.name}</p>
                    </Opcao>
                </Link>
                
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader
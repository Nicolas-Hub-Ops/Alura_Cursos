import { Link } from 'react-router-dom'
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <Link to="/">
            <LogoContainer>
                <LogoImage
                    src={logo}
                    alt='logo' 
                />
                <p><strong>Alura</strong>Books</p>
            </LogoContainer>
        </Link>
    )
}

export default Logo
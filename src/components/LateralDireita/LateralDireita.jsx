import './LateralDireita.css'
import './Usuario'
import './Sugestoes'
import Usuario from './Usuario'
import icon from '../../assets/eu.jpg'
import icon2 from '../../assets/iconAside1.png'
import icon3 from '../../assets/iconAside2.png'
import icon4 from '../../assets/iconAside3.png'
import icon5 from '../../assets/iconAside4.png'
import Sugestoes from './Sugestoes'

export default function LateralDireita(){
    return(
        <div className='LateralDireita'>
            <Usuario 
            imgPerfil={icon}
            nome='vinicius_yeh'
            nick='Vinicius_Yeh'
            />
            <div className='midAside'>
                <span className='midAsideChild1'>Sugestões para você</span>
                <div className="separador"></div>
                <span className='midAsideChild2'>Ver tudo</span>
            </div>
            <Sugestoes 
            imgSugest={icon2}
            nomeSugest="olinomc"
            seguido='Segue você'
            />
            <Sugestoes 
            imgSugest={icon3}
            nomeSugest="brenuz_"
            seguido='Segue você'
            />
            <Sugestoes 
            imgSugest={icon4}
            nomeSugest="jotape4real"
            seguido='Segue você'
            />
            <Sugestoes 
            imgSugest={icon5}
            nomeSugest="oficial.tavin"
            seguido='Segue você'
            />
            <div className="direitos">
                <span><p>Sobre - Ajuda - Imprensa - API - Carreiras - Privacidade - Termos - Localizações - Idioma - Meta verified (fictício)</p></span>
                <span><p>&copy; 2023 INSTAGRAM FROM VINICIUS YEH</p></span>
            </div>
        </div>
    )
}
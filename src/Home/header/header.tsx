import { HeaderStyle, Info, InfoHeader, Logo } from "./style"
import imgLogo from "../../assets/img/logo_growdev.svg"


export function Home(){
    return(
        <>
            <HeaderStyle>
                <InfoHeader>
                    <Logo 
                    src={imgLogo}
                    />
                    <Info>Home</Info>
                    <Info>Sobre nos</Info>
                    <Info>Programa de formação</Info>
                    <Info>Para empresa</Info>
                    <Info>Contato</Info>
                </InfoHeader>
            </HeaderStyle>
        </>
    )
}
import styled from "styled-components"

const MainBox = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tcoeyspcqzyApsYoJHaSDUoIRXAWwmLn4dtgXCnd4w&s");
    background-repeat: no-repeat;
    background-size: 100%;
   
    img{
        height: 48vh;
        border: solid;
        border-radius: 20px;
    }
    figcaption{
        color: red;
        font-size: 24px;
        text-align: center;
        font-weight: 900;
    }
`

export default function Main(){
    return(
        <MainBox>

            <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01qlzmswOzYbL21rtMYZRmRAvIXspYi8JRmNQ3M-NWQ&s" alt="" />
                <figcaption>Lugar aconchegante para familia!!!</figcaption>
            </figure>

            <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCK1HkR_UmrEmafcieYHr6hErTOYq0RHv6HCpQZR_Rw&s" alt="" />
                <figcaption>Venha conhecer nosso espaço!!!</figcaption>
            </figure>

            <figure>
                <img src="https://www.canevaworld.it/public/materiale/SAFARI%20PIZZA/Foto%20Locale/Safari_Pizza_1_vert.jpg" alt="" />
                <figcaption>Temos playground</figcaption>
            </figure>

        </MainBox>
    )
}
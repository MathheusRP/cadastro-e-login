import styled from "styled-components";


export const HomeStyled = styled.div`
    body {
        background-color: var(---grey-3);

    }

    header {
        /* background-color: aqua; */
        display: flex;
        justify-content: center;
        align-items: center;
        
        height: 80px;
        border-bottom: 2px solid var(---grey-2);

        @media (min-width: 768px){
            
            div {
                max-width: 1000px;
            }
        }

        div {
            width: 90%;
            display: flex;
            justify-content: space-between;
        }

        h1 {
            color: var(---color-primary);
        }

        .exit {
           padding: 10px 15px;
           color: var(---grey-0);
           background-color: var(---grey-2);
           border-radius: 4px;
        }
    }

    .info{
        display: flex;
        height: 140px;
        border-bottom: 2px solid var(---grey-2);
        justify-content: center;
        
        @media (min-width: 768px){

            height: 200px;

            div {
                max-width: 1000px;
            }
        }

        div {
            color: var(---grey-0);
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
        }

        span {
            color: var(---grey-1);
        }
    }

    .mensagem {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: 768px){
            
            height: 300px;

            div {
                max-width: 1000px;
            }
        }

        div {
            color: var(---grey-0);
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
        }

    }
`
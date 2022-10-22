import styled from "styled-components";

export const TechnologyStyled = styled.section`

/* height: 200px; */
/* border-bottom: 2px solid var(---grey-2); */
width: 90%;
padding: 25px 0px;
max-width: 1000px;
margin: 0 auto;



.technologyDiv {
    color: var(---grey-0);
    display: flex;
    justify-content: space-between;
    /* margin-top: 25px; */
    .modal {
        color: var(---grey-0);
        height: 35px;
        width: 35px;
        background-color: var(---grey-3);
        border-radius: 4px;
        font-size: 22px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
    }

}

ul {
    list-style: none;
    background-color: var(---grey-3);
    padding: 20px 15px;
    border-radius: 4px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: var(---grey-0);
    cursor: pointer;
    
    li {
        background-color: var(---grey-4);
        display: flex;
        padding: 15px;
        border-radius: 4px;
        justify-content: space-between;
        
        div {
            display: flex;
            gap: 10px;
            
            color: var(---grey-1);
            
            .delete {
                color: var(---grey-1);
                
                &:hover {
                    color: var(---grey-0);
                    transform: scale(1.3);
                }
            }
            

        }

        h3 {

            color: var(---grey-0);
        }

        &:hover{
            background-color: var(---grey-2);
        }

        &:focus{
            background-color: var(---grey-2);
        }

    }
    
    
}

`
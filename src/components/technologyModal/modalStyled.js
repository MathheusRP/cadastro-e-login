import styled from "styled-components";

export const ModalStyled = styled.section`

    height: 50vh;
    top: 0;
    left: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        width: 90%;
        max-width: 500px;
        height: 400px;
        background-color: var(---grey-3);
        border-radius: 4px;
    }

    .title {
        height: 50px;
        background-color: var(---grey-2);
        color: var(---grey-0);
        font-size: 14px;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        justify-content: space-between;
        border-radius: 4px 4px 0px 0px;

        .exit {
            color: var(---grey-1);
            text-decoration: none;
            font-size: 18px;
            font-weight: 600;
        }
    }

    form {
        /* background-color: aqua; */
        width: 90%;
        margin:  30px auto;
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: var(---grey-0);

        .error {
            color: rgb(200, 50, 50);
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 15px;

            input {
                height: 50px;
                padding: 0px 15px;
                border-radius: 4px;
                border: 2px solid transparent;
                outline: none;

                &:disabled{
                    background-color: var(---grey-0);
                }
            }
            
            
            select {
                height: 50px;
                padding: 0px 15px;
                font-size: 16px;
                border-radius: 4px;
                border: 2px solid transparent;
            }
        }

        button {
            height: 50px;
            background-color: var(---color-primary);
            color: var(---grey-0);
            font-size: 16px;
            font-weight: 600;
            border-radius: 4px;
        }
    }

`
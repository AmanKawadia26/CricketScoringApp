import styled from 'styled-components'

const Style = styled.section
`   
    width : auto;
    height : 100vh;
    text-align: center;
    background-color : #dbdde0;
    font-family: Arial, Helvetica, sans-serif,bold;
    h1{
        background : linear-gradient(to bottom, #366adb 0%, #393b6f 100%);
        font-size: 3rem;
        font-weight: bold;
        padding: 0.2rem;
        color: white;
    }
    #form{
        margin: 10rem auto;
        padding: 3rem;
        max-width: 18rem;
        background-color : #dbdde0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.2rem;
        box-shadow: #393b6f 0.1rem 0.1rem 0.5rem;
        box-sizing: content-box;
        background-color: #fff;
        .inputs {
            .team{
                input{
                    font-size: 1rem;
                    padding: 0.4rem;
                    text-align: left;
                    border-radius: 0.2rem ;   
                    border: solid rgb(68, 68, 137) 2px;  
                }
                p{
                    font-size: 1.5rem;
                    font-weight: bold;
                    padding: 0.5rem;
                }
            }
            .overs select{
                width: 13.1rem;
                margin: 1.5rem auto;
                font-size: 1rem;
                padding: 0.4rem;
                text-align: center;
                border-radius: 0.2rem ;   
                border: solid rgb(68, 68, 137) 2px;
                background : linear-gradient(to bottom, #366adb 0%, #393b6f 100%);
                color : white;
                option{
                    color : black;
                    &:hover{
                        color : white;
                        background : linear-gradient(to bottom, #366adb 0%, #393b6f 100%);
                    }
                }
            }
            .submit {
                width: 13.1rem;
                text-align: center;
                background: linear-gradient(to bottom, #366adb 0%, #393b6f 100%);
                color: #fff;
                font-size: 1.2rem;
                margin-top: 2rem;
                padding : 0.5rem 1rem;
                border-radius: 0.2rem ; 
                &:hover {
                    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
                    color: #393b6f;
                    border: solid rgb(68, 68, 137) 2px;
                }
            }
            
        }
    }
`

export default Style

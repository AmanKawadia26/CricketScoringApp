import styled from "styled-components";

const Style = styled.section
`   
    width : 100vw;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
    background-image : url("https://imgs.search.brave.com/0tFT6V1kSqRCFMPmSGxJWpGVuOnk-jPRUA8yGD5Nqb4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cmVlbi1ncmFzcy10/ZXh0dXJlXzEyNDkt/MTUuanBnP3NpemU9/NjI2JmV4dD1qcGc");
    .parent{
        display : flex;
        padding : 3rem 1.5rem;
        background : linear-gradient(to bottom, #2FC64A 0%, #047617 100%);
        box-shadow : 5px 5px 10px #1E5412;  
        .text{
            font-size: 3.5rem;
            font-weight : bold;
            display : flex;
            color : white;
        }
        .ball{
            display: inline-block;
            width: 2.4rem;
            height: 2.4rem;
            margin : 0.4rem 0.1rem;
            border-radius : 50%;
            position: relative;
            border: 4px solid #Fff;
            top: 50%;
            animation: loader 2s infinite ease;
        }
        .ball-loader{
            display: inline-block;
            vertical-align: top;
            width : 1.8rem;
            height : 1.8rem;
            border-radius : 50%;
            border: 2px solid #Fff;
            background-color: maroon;
            animation: loader 2s infinite ease-in;
        }
        @keyframes loader {
            0% {
                transform: rotate(0deg);
            }
            25% {
                transform: rotate(180deg);
            }
            50% {
                transform: rotate(180deg);
            }
            75% {
                transform: rotate(360deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        @keyframes ball-loader{
            0% {
                height: 0%;
            }
            25% {
                height: 0%;
            }
            50% {
                height: 100%;
            }
            75% {
                height: 100%;
            }
            100% {
                height: 0%;
            }
        }
    }
`
export default Style
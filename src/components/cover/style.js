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
        padding : 3rem;
        background : url("https://imgs.search.brave.com/q9IG8URdepp9Z4FX-9LNO_uAjUqegN20DalTIr45sqc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY0LzM3LzQy/LzM2MF9GXzY0Mzc0/Mjk4X2xYYW1SQndG/NFUycW5OZURJMlVM/cUVUemVqSE9COVdt/LmpwZw");
        box-shadow : 5px 5px 10px #1E5412;
        background-repeat: no-repeat;  
        background-size : 450px 165px;
        .text{
            font-size: 3.5rem;
            font-weight : bold;
            display : flex;
            color : maroon;
        }
        .ball{
            margin-top: 0.3rem;
            height : 3rem;
            width :3rem;
            background-color: #84170B;
            border-radius : 50%;
            border :solid white 2px;
            animation: rotate 4s linear infinite;
        }
        .ball:before{
            content : '';
            position : absolute;
            top : 0.9rem;
            width : 2.5rem;
            height : 0.6rem;
            background-color : #84170B; 
            border :solid white 3px;
            border-radius : 50%; 
            padding : 2px;
        }
        @keyframes rotate {
            0% {
              transform: rotate(0);
            }
            100% {
              transform: rotate(360deg);
        }
    }
`
export default Style
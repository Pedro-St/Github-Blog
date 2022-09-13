import styled from "styled-components";

export const BlogDiv = styled.div`
    display: flex;

`

export const SeachFormContainer = styled.form`
    span{
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 1.5rem;
         
        width: 1100px;
        height: 50px;
        left: calc(50% - 1060px/2);
        margin-top: 65px; 

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 160%;

        color: ${(props) => props.theme['base-subtitle']}

    }
    
    p{

        position: absolute;
        width: 96px;
        height: 22px;
        right: calc(50% - 1060px/2);

           font-family: 'Nunito';
           font-style: normal;
           font-weight: 400;
           font-size: 14px;
           line-height: 32px;
           text-align: right;
           color: ${(props) => props.theme['base-span']}
    }
    
    input{
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 1.5rem;

        display: flex;
        flex-direction: row;
        margin-top: 3rem;

        position: absolute;
        width: 1065px;
        height: 50px;
        left: calc(50% - 1060px/2);
        top: 585px;
    

        

        background: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-border']};
        border-radius: 6px;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 26px;

        color: ${(props) => props.theme['base-label']};
        &:focus{
            border: 1px solid ${(props) => props.theme['blue']};
        }
    }
`

export const PostContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-left: calc(50% - 355px/2 - 235px);
    

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 85px;
   

  

    

`
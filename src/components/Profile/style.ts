import styled from "styled-components";

export const ProfileContainer = styled.section`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;

display: flex;

margin-top: -5rem;

`

export const ProfileCard = styled.div`
display: flex;
gap: 2rem;
width: 1120px;
height: 212px;


background: ${(props) => props.theme['base-profile']};
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
border-radius: 10px;
padding: 2rem;

img{
    width: 148px;
    height: 148px;
    left: 40px;
    border-radius: 8px;
}

`

export const ProfileInfos = styled.div`
    display: flex;
    flex-direction: column;
`
export const Profileheader = styled.span`
    display: flex;
    flex-direction: row;
    gap: 580px;

    h1{

        
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        margin-bottom: 8px;
       
    }

    a{
        
        line-height: 19px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        text-transform: uppercase;
        text-decoration: none;

        cursor: pointer;

        color: ${(props) => props.theme['blue']};
    
      
    }

    a:hover{
        text-decoration: underline;
        transition:  0.2s;
        }


`

export const ProfileDescription = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
 
    color: ${(props) => props.theme['base-text']};

`
export const ProfileFooter = styled.span`
display: flex;
align-items: center;
padding: 0;
gap: 24px;

margin-top: 55px;
color: ${(props) => props.theme['base-text']};

p{
    display: flex;
    gap: 10px;
    line-height: 20px;
    
}

.icon {
    display: flex;
    color: ${(props) => props.theme['base-label']}
}
`
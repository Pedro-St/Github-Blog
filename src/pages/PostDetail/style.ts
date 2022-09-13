import styled from "styled-components";

export const PostProfile = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    margin-top: -5rem;

`

export const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 1120px;
    height: 212px;

    background: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem;

    a{
        
        width: 70px;
        height: 19px;
        cursor: pointer;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 19px;
        text-decoration: none;

        text-transform: uppercase;
        z-index: 5;
        color: ${(props) => props.theme['blue']}
        
    }

`

export const ProfileTitle = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;

    h1 {
        display: flex;
        margin-top: 100px;
        margin-left: 32px;

        height: 31px;

        font-family: 'Nunito';
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 31px;

        color: ${(props) => props.theme['base-title']}
        
    }

`

export const ProfileIcons = styled.div`
    display: flex;
    flex-direction:row;
    gap: 1rem;
    margin-left: 2rem;
    padding: 0;

    position: absolute;
    width: 450px;
    height: 26px;
    top: 140px;

    font-family: 'Nunito';
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;

    color: ${(props) => props.theme['base-span']}
    
`

export const ProfileBody = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 32px;
    gap: 24px;

    position: absolute;
    width: 864px;
    height: 422px;
    left: calc(50% - 864px/2);
    top: 476px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 26px;

    color: ${(props) => props.theme['base-text']};
`

export const ProfileContent = styled.div`

.markdown {
    max-width: 56rem;
    padding: 2.5rem;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 25.6px;

    p {
      margin-bottom: 1rem;
    }

    ul {
      li + li {
        margin-bottom: 1rem;
      }
    }

    img {
      width: 100%;
    }

    a {
      color: ${(props) => props.theme.white};
    }
  } 


`
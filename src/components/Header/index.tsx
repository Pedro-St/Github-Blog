import logo from '../../assets/Logo.svg'
import { HeaderContainer, HeaderContent } from './style'
import effect1 from '../../assets/effect1.svg';
import effect2 from '../../assets/effect2.svg';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
            <img src={effect2} alt="" />
                <img src={logo} alt="" />
                <img src={effect1} alt="" />
            </HeaderContent>
          {/*   <HeaderEffect>
           
            </HeaderEffect> */}
        </HeaderContainer>
    )
}
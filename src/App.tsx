import { ThemeProvider } from "styled-components";
import { IssuesProvider } from "./contexts/IssuesContext";
import { BrowserRouter } from 'react-router-dom'
import { Blog } from "./pages/Blog";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
 return(
  <ThemeProvider theme={defaultTheme}>
    
    <BrowserRouter>
     <IssuesProvider>
        <Router/>
     </IssuesProvider>
    </BrowserRouter>
    
    <GlobalStyle />
  </ThemeProvider>


 )
}



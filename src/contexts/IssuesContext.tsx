import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue{
    id: number;
    number: number;
    title: string;
    body: string;
    created_at: string;
}



interface IssuesContextType{
    issues: Issue[]
}


interface IssuesProviderProps{
    children: ReactNode;
}



export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({children} : IssuesProviderProps) {
    const [issues, setIssues] = useState<Issue[]>([])
     
    async function getIssues() {
       const response = await api.get('/Pedro-St/Github-Blog/issues', {})
            setIssues(response.data)
    }

    useEffect(() => {
        getIssues();
    }, [])


  
    return(
        <IssuesContext.Provider value={{ issues }}>
            {children}
        </IssuesContext.Provider>
    )
}
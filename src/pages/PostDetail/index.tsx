import { faCommenting } from "@fortawesome/free-regular-svg-icons"
import { faArrowUpRightFromSquare, faCalendar, faChevronLeft, faCodeBranch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { Link, useParams } from "react-router-dom"
import { apiSearch } from "../../lib/axios"
import { PostProfile, ProfileBody, ProfileContent, ProfileHeader, ProfileIcons, ProfileTitle } from "./style"

interface Issue{
    title: string
    html_url: string
    created_at: string
    comments: number
    name:string
    body: string
    user:{
        login: string
    }
}


export function PostDetail() {
    const {id} = useParams<{
        id: string
    }>()

    const [issue, setIssue] = useState<Issue | null>(null)

    useEffect(() => {
        const loadIssue = async () => {
            const {data} = await apiSearch.get<Issue>(
                `repos/Pedro-St/Github-Blog/issues/${id}`,
            )

            setIssue(data)
        }

        loadIssue()
    }, [id])

  

    return(
    <>
      <PostProfile>
        <ProfileHeader>
            <Link to="/"> <FontAwesomeIcon icon={faChevronLeft} /> Voltar</Link>
            <a href={issue?.html_url}> <a href={issue?.html_url}>Github <FontAwesomeIcon icon={ faArrowUpRightFromSquare }/></a> </a>
        </ProfileHeader>

        <ProfileTitle>
            <h1>
                {issue?.title}
            </h1>
        
            <ProfileIcons>
                <p> <FontAwesomeIcon icon={faCodeBranch}/> {issue?.user.login} </p>
                <p> <FontAwesomeIcon icon={faCalendar}/>  {issue?.created_at
                  ? formatDistanceToNow(new Date(issue.created_at), {
                      locale: ptBR,
                      addSuffix: true,
                    })
                    : '-'}  </p>
                <p> <FontAwesomeIcon icon={faCommenting}/> {issue?.comments} Comentários </p>
            </ProfileIcons>
        </ProfileTitle>

      </PostProfile>
    
        <ProfileBody>
            <ProfileContent>
                {issue?.body && (
                    <ReactMarkdown className="markdown">
                        {issue.body}
                    </ReactMarkdown>
                )}
            </ProfileContent>
        </ProfileBody>
    </>

     

    
    )
}
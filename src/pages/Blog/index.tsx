import { useCallback, useEffect, useState } from "react";
import { Post } from "../../components/Issues";

import { Profile } from "../../components/Profile";
import { apiSearch } from "../../lib/axios";

import { BlogDiv, PostContainer, SeachFormContainer } from "./style";


export interface ProfileData {
  name: string
  login: string
  followers: number
  company: string
  avatar_url: string
  html_url: string
  bio: string
}

export interface IssueProps {
  number: number
  title: string
  body: string
  created_at: string
}

interface SearchIssuesResponse {
  items: IssueProps[]
}


export function Blog() {
  const [searchValue, setSearchValue] = useState('')

  const [issues, setIssues] = useState<IssueProps[]>([])
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)

  const loadProfileInfo = useCallback(async (query?: string) => {
    const response = await apiSearch.get<SearchIssuesResponse>(
      `/search/issues?q=${
        query ? query + '%20' : ''
      }repo:Pedro-St/Github-Blog`,
    )

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    const loadUserData = async () => {
      const { data } = await apiSearch.get<ProfileData>('/users/Pedro-St')

      setProfileData(data)
    }

    loadUserData()
    loadProfileInfo()
  }, [loadProfileInfo])

  const handleChangeValue = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value)
  }

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      loadProfileInfo(searchValue)
    }
  }
    
    return(
        <BlogDiv>
           
            <Profile/>

            <SeachFormContainer>
            <span>
                Publicações
              <p>{issues.length} publicações</p>
                
            </span>
            </SeachFormContainer>

           <input className="barSearch"
              type="text"
              placeholder="Buscar Conteúdo"
              value={searchValue}
              onKeyUp={handleOnKeyUp}
              onChange={handleChangeValue}
             
           /> 

        <PostContainer>
          {issues.length > 0 &&
            issues.map((issue) => <Post data={issue} key={issue.title} />)}
        </PostContainer>
       
        </BlogDiv>
    )
}
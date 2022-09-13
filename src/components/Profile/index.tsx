import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare, faCodeBranch, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { ProfileCard, ProfileContainer, ProfileDescription, ProfileFooter, Profileheader, ProfileInfos } from "./style";

interface Profile {
    login: string
    name: string 
    avatar_url: string
    followers: number
    html_url: string
    bio: string
    company: string | null
    location: string
  }


export function Profile() {
    const [profile, setProfile] = useState<Profile | null>(null)

    async function loadProfile() {
        const response = await 
        fetch('https://api.github.com/users/Pedro-St')
        const data = await response.json();
        
        setProfile(data)  
    }
    
useEffect(() => {
    loadProfile();
},[])

   return( 
    <>
         <ProfileContainer>
            <ProfileCard>

                <img src={profile?.avatar_url} alt={profile?.name} />
                <ProfileInfos>
                   <Profileheader>
                        <h1> {profile?.name  }</h1>
                        <a href={profile?.html_url}>Github <FontAwesomeIcon icon={ faArrowUpRightFromSquare }/></a>
                       
                    </Profileheader>
                    <ProfileDescription>
                        { profile?.bio }
                    </ProfileDescription>

                    <ProfileFooter>

                    <p><FontAwesomeIcon icon={ faCodeBranch } className="icon"/> { profile?.login } </p>
                    <p><FontAwesomeIcon icon={ faBuilding } className="icon"/> { profile?.company }</p>
                    <p><FontAwesomeIcon icon={ faUserGroup } className="icon"/> {profile?.followers} seguidores</p>

                      
                    </ProfileFooter>
                </ProfileInfos>
            </ProfileCard> 
        </ProfileContainer> 
        </>
   )
}
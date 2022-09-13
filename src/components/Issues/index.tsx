import { IssueProps } from "../../pages/Blog";
import { dateFormatter } from "../../utils/formatter";
import {  LinkLayout } from "./style";


interface PostProps{
    data: IssueProps
}
export const Post = ({
    data: { number, title, body, created_at },
  }: PostProps) => (

    <LinkLayout to={`/post/${number}`}>
            <div>
            <h1>
                {title}
                <span>
                    {dateFormatter.format(
                        new Date(created_at))}
                </span>
            </h1>
        
            <h2>
                {body}
            </h2>
            </div>
    </LinkLayout> 

  )

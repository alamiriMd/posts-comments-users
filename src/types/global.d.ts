
type Post = {
    id:number;
    userId:number;
    title:string;
    body:string;
}


type CommentT = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

type Filters = {
    order: "id" | "-id";
    query: string;
    page: number;
    limit:number;
}

type MethodTypes = "GET"
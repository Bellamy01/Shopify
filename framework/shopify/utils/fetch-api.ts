import { ApiFetcheResults, ApiFetcherOptions } from "@common/types/api";

type FetchParams = {
    query:string
}

type FetcherResult<T> = {data:T}
const fetchApi =async <T>({
    url,
    query}: ApiFetcherOptions
    ): Promise< ApiFetcheResults<T> >=>{
    const url = "http://localhost:4000/graphql";
    const res = await fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            query
        })
    });

    const {data, errors} = await res.json();
    // ?? is checking if first left hand expression is null or undefined ->if it is go with right expression
    // || is checking ig left hand expression is null,undefined,"",false and 0
    if(errors){
        throw new Error(errors[0].message ?? errors.message);
    }


    return {data};
}

export default fetchApi;
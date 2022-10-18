import { GetAllProductPathsQuery } from "@framework/schema";

const getAllProductQuery = `
    query getAllProductPaths($first: Int = 250){
        products(first:$first){
            edges{
                node{
                    handle
                }
            }
        }
    }
`


export default GetAllProductPathsQuery;
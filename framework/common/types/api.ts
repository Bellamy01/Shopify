export type ApiFetcherOptions = {
    url:string,
    query:string
}

export type ApiFetcheResults<T> = {
    data : T
}
export interface ApiConfig {
    apiUrl: string,
    fetch<T>(
        options : ApiFetcherOptions
    ): Promise<{data:T}>
}
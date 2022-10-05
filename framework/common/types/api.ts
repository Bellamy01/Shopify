

export interface ApiConfig {
    apiUrl: string,
    fetch<T>(
        options
    ): Promise<Y>
}
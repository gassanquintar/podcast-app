/**
 * API Response Interface
 * @param data - The data returned from the API
 * @param isLoading - Whether the request is loading
 * @param isSuccess - Whether the request was successful
 * @param isError - Whether the request errored
 * @param isFetching - Whether the request is fetching
 */
export interface IResultResponse {
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    isFetching: boolean;
  }
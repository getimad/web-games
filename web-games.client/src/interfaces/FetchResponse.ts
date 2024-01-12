interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default FetchResponse;

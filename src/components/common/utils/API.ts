const fetchConfig = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2E4MDhlMTE2MDI1MThiZTFiNjAzZDE1ZGY5ZTM2OSIsInN1YiI6IjY2NjRiMGUyNTQ2YmNiM2ZlYWVmZDgwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ouqmq0Mk92qRXs5mhCB-LW2jhp2oyXBSF0ORKvr4AJ8',
  },
};

export const fetchData = async <T>(config: { url: string }): Promise<T> => {
  const response = await fetch(config.url, fetchConfig);
  const result: T = await response.json();
  return result;
};

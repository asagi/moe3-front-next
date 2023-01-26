export const moeApi = (path: string) => {
  return new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL).toString();
};

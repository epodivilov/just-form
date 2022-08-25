function fakeFetch<T>(data: T, delay: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

type Params = { email: string; password: string };
type Response = { status: "success" | "fail" };

export function login(params: Params) {
  if (params.email === params.password) {
    return fakeFetch<Response>({ status: "fail" }, 1000);
  }

  return fakeFetch<Response>({ status: "success" }, 1000);
}

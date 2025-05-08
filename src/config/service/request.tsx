import axiosInstance from "./axiosInctance";
import { useQuery, useMutation } from "@tanstack/react-query";

interface IMethods {
  method: "GET" | "POST" | "PUT" | "DELETE";
}

interface IQueryOptions extends IMethods {
  url: string;
}

export const useQueryRequest = ({ url, method }: IQueryOptions) => {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const { data } = await axiosInstance({
        url,
        method,
      });
      return data;
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
    retry: 5,
  });
};

//  ////////////////////////////////////////////////////

interface PostRequestOptions<T> extends IMethods {
  url: string;
  data?: T;
}

export const useMutateRequest = <T,>() => {
  return useMutation({
    mutationFn: async ({ url, data, method }: PostRequestOptions<T>) => {
      const response = await axiosInstance({
        url,
        method,
        data,
      })
      console.log(response);
      
      return response.data;
    },
    onSuccess(data, variables, context) {
      return { data, variables, context };
    },
  });
};

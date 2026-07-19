"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { getApiErrorMessage } from "@/lib/api/api-error";

import * as authApi from "../api/auth-api";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: authApi.me,
    retry: false,
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (user) => {
      queryClient.setQueryData(["auth", "me"], user);
      toast.success("Signed in");
      await queryClient.invalidateQueries({ queryKey: ["auth"] });
      router.push("/admin");
    },
    onError: (error) => toast.error(getApiErrorMessage(error)),
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: authApi.logout,
    onSettled: async () => {
      queryClient.clear();
      router.push("/login");
    },
  });
}

export function useRegisterUser() {
  return useMutation({
    mutationFn: authApi.registerUser,
    onSuccess: () => toast.success("User registered"),
    onError: (error) => toast.error(getApiErrorMessage(error)),
  });
}

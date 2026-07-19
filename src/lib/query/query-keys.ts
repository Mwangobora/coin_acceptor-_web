export const queryKeys = {
  auth: {
    all: ["auth"] as const,
    currentUser: () => ["auth", "current-user"] as const,
  },
};

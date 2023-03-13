declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // NODE_ENV?: string;
      NEXT_PUBLIC_GITHUB_USERNAME?: string;
      NEXT_PUBLIC_GITHUB_REPO_NAME?: string;
      NEXT_PUBLIC_FIRST_NAME?: string;
      NEXT_PUBLIC_LAST_NAME?: string;
      NEXT_PUBLIC_LOCATION?: string;
    }
  }
}

export {};

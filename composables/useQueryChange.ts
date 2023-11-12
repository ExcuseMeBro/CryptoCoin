import { ICustomObject } from "~/types";

export function useQueryChange() {
  const router = useRouter();
  const routeQuery = { ...router.currentRoute.value.query };
  const currentQuery = { ...router.currentRoute.value.query };

  const updateQuery = async (key: string, value: string | undefined) => {
    if (!value) {
      delete routeQuery[key];
    } else {
      routeQuery[key] = value;
    }

    if (JSON.stringify(routeQuery) !== JSON.stringify(currentQuery)) {
      await router.replace({ query: routeQuery });
    }
  };

  const updateQueryParams = async <T = ICustomObject>(params: T) => {
    Object.keys(params).forEach((key) => {
      if (!params[key]) {
        delete routeQuery[key];
      } else {
        routeQuery[key] = params[key];
      }
    });

    if (JSON.stringify(routeQuery) !== JSON.stringify(currentQuery)) {
      await router.replace({ query: routeQuery });
    }
  };

  return {
    updateQuery,
    updateQueryParams,
  };
}

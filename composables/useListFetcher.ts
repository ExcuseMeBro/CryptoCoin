import { ICustomObject, IDefaultResponse } from '~/types'

export const useListFetcher = <T>(
  url: string,
  paginationLimit?: number,
  customParams?: ICustomObject
) => {
  const route = useRoute()

  const { updateQuery, updateQueryParams } = useQueryChange()

  const list = ref<T[]>([])

  const loading = reactive({
    list: true,
    button: false,
  })

  const currentPage = ref(Number(route.query?.page ?? 1))

  const params = reactive({
    limit: paginationLimit ?? 9,
    offset: (currentPage.value - 1) * (paginationLimit ?? 9),
    search: route.query.search ?? undefined,
    ...customParams,
  })

  const paginationData = reactive({
    count: 0,
    next: '',
  })

  const fetchApplications = async (
    merge?: boolean,
    customParams?: ICustomObject
  ) => {
    const data = await useApi().$get<IDefaultResponse<T>>(url, {
      params,
      ...customParams,
    })

    if (merge) {
      list.value = [...(list.value ?? []), ...data.results]
    } else {
      list.value = data.results
    }

    paginationData.count = data.count

    loading.list = false
    loading.button = false
  }

  const loadMore = () => {
    loading.button = true
    params.offset += params.limit
  }

  const pageChange = (page: number) => {
    if (page === currentPage.value) return
    loading.list = true
    currentPage.value = page
    params.offset = (page - 1) * params.limit
    updateQuery('page', page.toString())
  }

  const resetList = () => {
    params.offset = 0
    fetchApplications()
  }

  watch(
    () => params,
    () => {
      fetchApplications()
    },
    { deep: true, immediate: true }
  )

  watch(
    () => params.search,
    () => {
      params.offset = 0
      currentPage.value = 1
      loading.list = true
      // updateQuery('search', params.search)

      updateQueryParams({ search: params.search, page: undefined })
    }
  )

  return {
    list,
    loading,
    paginationData,
    params,
    currentPage,
    loadMore,
    pageChange,
    resetList,
    fetchApplications,
  }
}

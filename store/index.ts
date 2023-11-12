import type {IParams} from '~/types'

export const useDemoStore = defineStore('demo', {
    state: () => ({
        demo: undefined,
    }),
    actions: {
        fetchDemo() {
            return new Promise((resolve, reject) => {
                useApi()
                    .$get(`demo/`)
                    .then((data: any) => {
                        resolve(data)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        }
    },
})

// @ts-nocheck
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const specialistClassifyList = ref([])
    const setSpecialistClassifyList = (data: any) => {
        specialistClassifyList.value = data.map((v) => ({ label: v.name, value: v.id }))
    }

    const newsClassifyList = ref([])
    const setNewsClassifyList = (data: any[]) => {
        data?.map((v) => {
            if (v?.children?.length) {
                v.children.map((v2) => {
                    v2.href = `/newList/${v.id}?id=${v2.id}`
                })
                v.c = JSON.parse(JSON.stringify(v.children))
                delete v.children
            }
        })
        newsClassifyList.value = data
    }

    const matchClassifyList = ref([])
    const setMatchClassifyList = (data: any[]) => {
        data?.map((v) => {
            if (v?.children?.length) {
                v.children.map((v2) => {
                    v2.href = `/introduce/${v.id}?id=${v2.id}`
                })
            }
        })
        matchClassifyList.value = data
    }

    const workClassifyList = ref([])
    const setWorkClassifyList = (data: any[]) => {
        data?.map((v) => {
            if (v?.children?.length) {
                v.children.map((v2) => {
                    v2.href = `/works?id=${v2.id}`
                })
                v.c = JSON.parse(JSON.stringify(v.children))
                delete v.children
            }
        })
        workClassifyList.value = data
    }

    return {
        specialistClassifyList,
        setSpecialistClassifyList,

        newsClassifyList,
        setNewsClassifyList,

        matchClassifyList,
        setMatchClassifyList,

        workClassifyList,
        setWorkClassifyList,
    }
})

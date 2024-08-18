import { defineStore } from 'pinia'



export const useAppStore = defineStore('app', () => {

  const specialistClassifyList = ref([])
  const setSpecialistClassifyList = (data: any) => {
    specialistClassifyList.value = data.map(v => ({ label: v.name, value: v.id }))
  }

  const newsClassifyList = ref([])
  const setNewsClassifyList = (data: any) => {
    newsClassifyList.value = data.map(v => ({ label: v.name, value: v.id }))
  }

  const matchClassifyList = ref([])
  const setMatchClassifyList = (data: any) => {
    matchClassifyList.value = data.map(v => ({ label: v.name, value: v.id }))
  }

  return {
    specialistClassifyList,
    setSpecialistClassifyList,

    newsClassifyList,
    setNewsClassifyList,

    matchClassifyList,
    setMatchClassifyList
  }
})

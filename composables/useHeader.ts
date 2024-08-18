interface HeaderItemType {
    id?: string
    href?: string
    title?: string
    children?: HeaderItemType[]
}
import { useAppStore } from '@/stores/index'

export default () => {
    const route = process.client ? useRoute() : {}
    const router = process.client ? useRouter() : {}
    const config = useConfig()

    const appStore = useAppStore()
    const specialistClassifyList = computed(() => appStore.specialistClassifyList)
    const newsClassifyList = computed(() => appStore.newsClassifyList)
    const matchClassifyList = computed(() => appStore.matchClassifyList)
    console.log('config', config)

    if (process.client) {
        if (!specialistClassifyList.value.length) {
            $fetch(`${config.baseURL}open/specialist/classify`).then((res) => {
                console.log('获取专家分类', res)
                appStore.setSpecialistClassifyList(res.result)
            })
        }

        if (!newsClassifyList.value.length) {
            $fetch(`${config.baseURL}open/news/classify`).then((res) => {
                console.log('获取新闻分类', res)
                appStore.setNewsClassifyList(res.result)
            })
        }

        if (!matchClassifyList.value.length) {
            $fetch(`${config.baseURL}open/match/classify`).then((res) => {
                console.log('获取项目分类', res)
                appStore.setMatchClassifyList(res.result)
            })
        }
    }

    //  Promise.all([specialistClassifyApi, newsClassifyApi, matchClassifyApi]).then(() => {
    //     console.log('specialistClassifyApi', specialistClassifyApi)
    //     console.log('newsClassifyApi', newsClassifyApi)
    //     console.log('matchClassifyApi', matchClassifyApi)
    //   })

    const { $emit } = useMitt()
    const headerList = computed(() => {
        const data: HeaderItemType[] = [
            {
                href: '/',
                title: '首页',
            },
            {
                href: '/introduce',
                title: '赛项介绍',
                children: matchClassifyList.value?.map((v) => ({
                    title: v.label,
                    id: v.value,
                    href: `/introduce/${v.value}`,
                })),
            },
            {
                href: '/specialist',
                title: '专家团队',
                children: specialistClassifyList.value?.map((v) => ({
                    title: v.label,
                    id: v.value,
                    href: `/specialist/${v.value}`,
                })),
            },
            // {
            //   href: '/works',
            //   title: '精彩展示',
            //   children: [
            //     {
            //       href: '/works/1',
            //       title: '优秀作品',
            //     },
            //     {
            //       href: '/works/2',
            //       title: '优秀组织单位',
            //     },
            //   ],
            // },
            {
                href: '/news',
                title: '新闻中心',
                children: newsClassifyList.value
                    ?.map((v) => ({ title: v.label, id: v.value, href: `/newsList/${v.value}` }))
                    .concat([{ href: '/works', title: '精彩展示' }]),
                // children: [
                //   {
                //     id: '1',
                //     href: '/newList/1',
                //     title: '赛事公告',
                //   },
                //   {
                //     id: '2',
                //     href: '/newList/2',
                //     title: '赛事动态',
                //   },
                // ],
            },

            {
                href: '/contact/bj',
                title: '联系我们',
            },
        ]
        // data.map((v) => {
        //   v.id = genID()
        //   if (v.children?.length) {
        //     v.children?.map((v2) => {
        //       v2.id = genID()
        //       if (v2.children?.length) {
        //         v2.children?.map((v3) => {
        //           v3.id = genID()
        //         })
        //       }
        //     })
        //   }
        // })
        return data
    })
    const activeIndex = computed(() => {
        console.log('route', route)
        return route.fullPath
        // return route.fullPath.value
    })
    watch(activeIndex, (val) => {
        console.log('activeIndex', activeIndex)
    })

    return {
        /** 菜单默认的索引 */
        activeIndex,
        /** 菜单列表 */
        headerList,
    }
}

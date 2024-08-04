interface HeaderItemType {
  id?: string
  href?: string
  title?: string
  children?: HeaderItemType[]
}
// interface HeaderItem extends HeaderItemType {
//   href?: string
//   title?: string
//   children?: HeaderItemType[]
// }

// const route = useRoute()
// const router = useRouter()

export default () => {
  const route = process.client ? useRoute() : {}
  const router = process.client ? useRouter() : {}
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
        children: [
          {
            id: '1',
            href: '/introduce/1',
            title: '积木构建',
            children: [
              {
                id: '123',
                href: '/introduce/1?id=123',
                title: '积木构建1',
              },
              {
                id: '456',
                href: '/introduce/1?id=456',
                title: '积木构建2',
              },
            ],
          },
          {
            id: '2',
            href: '/introduce/2',
            title: '竞技飞翔',
            children: [
              {
                id: '123',
                href: '/introduce/2?id=123',
                title: '竞技飞翔1',
              },
              {
                id: '456',
                href: '/introduce/2?id=456',
                title: '竞技飞翔2',
              },
            ],
          },
          {
            id: '3',
            href: '/introduce/3',
            title: '竞技飞翔3',
          },
          {
            id: '4',
            href: '/introduce/4',
            title: '竞技飞翔4',
          },
          {
            id: '5',
            href: '/introduce/5',
            title: '竞技飞翔5',
          },
          {
            id: '6',
            href: '/introduce/6',
            title: '竞技飞翔6',
          },
        ],
      },
      {
        href: '/specialist',
        title: '专家团队',
        children: [
          {
            href: '/specialist/1',
            title: '行业专家',
          },
          {
            href: '/specialist/2',
            title: '航空专家',
          },
          {
            href: '/specialist/3',
            title: '航天专家',
          },
        ],
      },
      {
        href: '/works',
        title: '精彩展示',
        children: [
          {
            href: '/works/1',
            title: '优秀作品',
          },
          {
            href: '/works/2',
            title: '优秀组织单位',
          },
        ],
      },
      {
        href: '/news',
        title: '新闻中心',
        children: [
          {
            id: '1',
            href: '/newList/1',
            title: '赛事公告',
          },
          {
            id: '2',
            href: '/newList/2',
            title: '赛事动态',
          },
        ],
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

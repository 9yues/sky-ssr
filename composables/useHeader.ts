interface HeaderItemType {
  href?: string
  title?: string
}
interface HeaderItem extends HeaderItemType {
  href?: string
  title?: string
  children?: HeaderItemType[]
}

const { $emit } = useMitt()
const route = useRoute()
const router = useRouter()

const headerList: HeaderItem[] = [
  {
    href: '/home',
    title: '首页',
  },
  {
    href: '/introduce',
    title: '赛项介绍',
    children: [],
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
  },

  {
    href: '/connect',
    title: '联系我们',
  },

]
const activeIndex = computed(() => {
  console.log('route', route.fullPath)
  // return headerList[0].href
  return route.fullPath.value
})
watch(activeIndex, (val) => {
  console.log('activeIndex', activeIndex)
})

export default () => {
  return {
    /** 菜单默认的索引 */
    activeIndex,
    /** 菜单列表 */
    headerList,
  }
}

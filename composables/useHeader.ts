const { $emit } = useMitt()
interface HeaderItem {
  href: string
  title: string
}
const headerList: HeaderItem[] = [
  {
    href: 'home',
    title: '首页',
  },
  {
    href: 'connect',
    title: '联系我们',
  },

]
const activeIndex = ref < string >(headerList[0].href)
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

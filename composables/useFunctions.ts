export default () => {
    const serverRoute = useRoute()
    const serverRouter = useRouter()
    const route = process.client ? useRoute() : {}
    const router = process.client ? useRouter() : {}
    return {
        serverRoute,
        serverRouter,
        route,
        router,
    }
}

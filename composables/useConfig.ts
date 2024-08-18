export default () => {
    return {
        // baseURL: process.client ? 'api/' : 'http://121.196.208.253:8081/'
        baseURL: process.env.NODE_ENV === 'development' ? 'api/' : 'http://121.196.208.253:8081/',
    }
}

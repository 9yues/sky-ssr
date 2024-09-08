export default () => {
    const url = process.client ? location.origin + '/api/' : 'http://121.196.208.253:8081/'
    return {
        // baseURL: process.client ? 'api/' : 'http://121.196.208.253:8081/'
        baseURL: process.env.NODE_ENV === 'development' ? url : 'http://121.196.208.253:8081/',
    }
}

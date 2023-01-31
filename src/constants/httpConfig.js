// export default {
//     baseUrl: "https://jsonplaceholder.typicode.com/",

//     endPoints: {
//         todos: "todos"
//     }
// }

export default {
    // baseUrl:"https://backend.gofactz.com/public/api/",
    baseUrl: Platform.OS === 'android' ? "http://10.0.2.2:5000/" : 'http://localhost:5000/',
    endPoints: {
        login: "log-in",
        signup: "add-user",
    }
}
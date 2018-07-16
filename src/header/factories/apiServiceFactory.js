export default  ['$http', function ($http) {
    //как сюда пробросить $http? а не возвращать просто какие то забитые данные.
    //апи решил взять не замысловатое - http://jsonplaceholder.typicode.com/
    function getData() {
        return $http.get('https://jsonplaceholder.typicode.com/posts/1')
    }
    return {
        data: getData()
    }
}]
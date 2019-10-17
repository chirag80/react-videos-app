import axios from 'axios'
//AIzaSyAKOk8ajQJqJb7vH0aneUgxwTbNdGy3VeM
const KEY = 'AIzaSyAKOk8ajQJqJb7vH0aneUgxwTbNdGy3VeM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

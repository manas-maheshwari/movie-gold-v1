import axios from 'axios';

export default axios.create({
    baseURL:'https://e578-2603-8081-3100-fb-cd27-138b-1b9e-e0e0.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});
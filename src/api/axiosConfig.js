import axios from 'axios';

export default axios.create({
    baseURL:'https://678d-2603-8081-3100-fb-a0ec-79c3-b3e-3bcd.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});
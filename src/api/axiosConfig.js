import axios from 'axios';

export default axios.create({
    baseURL:'https://8732-2603-8081-3100-fb-e1ec-130e-c70b-6c29.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});
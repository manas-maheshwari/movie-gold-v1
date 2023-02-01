import axios from 'axios';

export default axios.create({
    baseURL:'https://b16a-2600-1700-111a-1a20-cd8c-25b1-d983-638e.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});
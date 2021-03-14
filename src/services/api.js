import axios from 'axios';

//https://api.hgbrasil.com/weather?key=cbbc48fb&lat=-23.682&lon=-46.875

export const key = 'c7114b84';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com'
});

export default api;
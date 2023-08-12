import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50' 
},
  headers: {
    'X-RapidAPI-Key': 'ac6d80fa21msh5b9fade2e6d265ep168f19jsndee15d6bf6e6',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, 
    options);

    return data;
}
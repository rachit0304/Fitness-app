
export const exerciseOptions = {
    method: 'GET',
    params: {limit: '18'},
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_API_NINJA_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  }

export const youtubeoptions = {
    method: 'GET',    
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_API_NINJA_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };


export const fetchData = async (url ,options)=> {
    const response = await fetch(url,options);
    const data = await response.json(); 
    
    return data;
}
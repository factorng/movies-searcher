// eslint-disable-next-line import/prefer-default-export
export const getMovieById = async (id) => {
  try {
    const responce = await fetch(`https://api.kinopoisk.dev/v1.3/movie/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
      },
    });
    const json = await responce.json();
    return json;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const getMoviesByQuery = async (query) => {
  try {
    let responce;
    if (query.length === 0) {
      responce = await fetch('https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=20&query=', {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        },
      });
    } else {
      responce = await fetch(`https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=10&query=${query}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        },
      });
    }
    const json = await responce.json();
    return json.docs;
  } catch (err) {
    console.log(err);
    return { docs: null };
  }
};

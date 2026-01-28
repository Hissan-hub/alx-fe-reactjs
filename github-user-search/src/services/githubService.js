import axios from 'axios';

const SEARCH_API = 'https://api.github.com/search/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced search function
export const fetchUsersAdvanced = async ({ username, location, repos }) => {
  try {
    let query = '';
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (repos) query += ` repos:>=${repos}`;

    const response = await axios.get(`${SEARCH_API}?q=${encodeURIComponent(query)}`);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
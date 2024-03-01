import generateCreateSlug from '../common/generateCreateSlug';
import { Categories } from '../models/categoryPostData';

const api = (() => {
  const API_BASE_URL: string = 'http://localhost:8000';
  const putAccessToken: (token: string) => void = (token: string) =>
    localStorage.setItem('token', token);
  const getAccessToken = () => localStorage.getItem('token');

  const _fetchWithAuth = async (url: string, options = {}) =>
    fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

  async function getAllPartners(): Promise<Partner[]> {
    const response: Response = await fetch(`${API_BASE_URL}/partners`);
    if (!response.ok)
      throw new Error(
        `Error fetching data http status code ${response.status}`
      );
    const responseData: Promise<Partner[]> = await response.json();
    return responseData;
  }

  async function getAllTeams(): Promise<Teams[]> {
    const response: Response = await fetch(`${API_BASE_URL}/teams`);
    if (!response.ok)
      throw new Error(
        `Error fetching data http status code ${response.status}`
      );
    const responseData: Promise<Teams[]> = await response.json();

    return responseData;
  }

  async function getAllPosts(): Promise<Posts[]> {
    const response: Response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok)
      throw new Error(
        `Error fetching data http status code ${response.status}`
      );
    const responseData: Promise<Posts[]> = await response.json();

    return responseData;
  }

  async function getAllCategories(): Promise<Categories[]> {
    const response: Response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok)
      throw new Error(
        `Error fetching data http status code ${response.status}`
      );
    const responseData: Promise<Categories[]> = await response.json();

    return responseData;
  }

  async function createNewPosts({
    title,
    publishDate,
    categoryId,
    sourceImageUrl,
    content,
  }: Posts) {
    const response: Response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        slug: generateCreateSlug(title),
        publishDate,
        categoryId,
        status: 'publish',
        comment_status: 'open',
        sourceImageUrl,
        content,
      }),
    });

    if (!response.ok)
      throw new Error(
        `Error fetching data http status code ${response.status}`
      );

    const responseData: Promise<Posts[]> = await response.json();
    return responseData;
  }

  async function createSubscribeNewsLetter(email: string) {
    const response: Response = await fetch(`${API_BASE_URL}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
    });
    if (!response.ok)
      throw new Error(
        `Error fetching data http status code ${response.status}`
      );

    const responseData: Promise<Subscribe[]> = await response.json();
    return responseData;
  }

  return {
    _fetchWithAuth,
    putAccessToken,
    getAccessToken,
    getAllPartners,
    getAllTeams,
    getAllPosts,
    getAllCategories,
    createSubscribeNewsLetter,
    createNewPosts,
  };
})();

export default api;

import { getConstributorsURL, getReopsURL } from '../config/config'
import axios from 'axios'

const headers = {};

export const getRepositories = async() => {
    const repos = [];
    let page = 1;
    let hasMore = true;
    const res = await axios.get(getReopsURL(), {
      headers,
    });

    repos.push(...res.data);
    hasMore = res.data.length === 100;
    page++;
    return repos;
}

export const fetchContributors = async(repo: string)=>{
    const res = await axios.get(getConstributorsURL(repo), {
      headers,
      params: { per_page: 100 },
    });
  
    return res.data.map((c: { login: any; }) => c.login);
  }
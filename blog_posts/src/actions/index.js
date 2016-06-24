import axios from 'axios';

import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from './actionTypes';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=ionatansala';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(formData) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, formData);

  return {
    type: CREATE_POST,
    payload: request
  }

}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return {
    type: DELETE_POST,
    payload: request
  }
}

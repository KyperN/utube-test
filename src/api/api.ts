import Youtube from 'youtube.ts';
import { IComment, IVideo } from './../types/types';
import axios from 'axios';
import env from 'react-dotenv';
const API_KEY = env.API_KEY;
const COMMENTS_URL =
  'https://www.googleapis.com/youtube/v3/commentThreads?key=';

const youtube = new Youtube(API_KEY);

export const fetchVideos = async (term: string): Promise<IVideo[]> => {
  const { items } = await youtube.videos.search({
    q: term,
    maxResults: 5,
  });
  return items;
};

export const getComments = async (videoId: string): Promise<IComment[]> => {
  const { data } = await axios.get(
    `${COMMENTS_URL}${API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=5`
  );

  return data.items;
};

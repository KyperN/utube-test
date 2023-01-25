import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList/VideoList';
import { RootState } from './redux/rootReducer';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useVideosActions } from './hooks/useActions';
interface Props {}

const App: React.FC<Props> = () => {
  const { fetchVideosAction } = useVideosActions();
  const [search, setSearch] = useState<string>('liverpool');
  const { selected, videos, loading, error } = useTypedSelector(
    (state: RootState) => state.videos
  );

  useEffect(() => {
    fetchVideosAction(search);
  }, [search]);

  return (
    <div>
      <SearchBar onSearchTermChange={setSearch} />
      {selected ? <VideoDetail selected={selected} /> : <p>Choose a video</p>}
      {error && <h1>{error}</h1>}
      {loading && <p>Loading videos</p>}
      {!loading && !error && <VideoList videos={videos} />}
    </div>
  );
};

export default App;

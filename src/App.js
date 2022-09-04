
import './App.css';
import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";
import SearchBar from './Components/SearchBar';
import {useState} from 'react';
import React from 'react';

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideos] = useState({id: {}, snippet: {}})

  return (
    <div className="App">
      <Grid style={{justifyContent: "center"}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* {VideoDetail} */}
            </Grid>
            <Grid item xs={4}>
              {/* {VideoList} */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  async function handleSubmit(searchItem){
    const {data: {items: videos} } = await youtube.get("search",{
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCohufl5dSRo4hO8ssldzZasxfCzO8DsVw",
        q: searchItem,
      }
    });
    
    setVideos(videos);
    setSelectedVideos(videos[0]);
  }
}

export default App;
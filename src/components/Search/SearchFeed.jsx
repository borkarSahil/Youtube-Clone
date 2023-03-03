import React, { useEffect, useState } from "react";
import { Box , Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import Videos from "../Video/Videos";

// API
import {fetchFromAPI} from "../../utils/fetchFromAPI";

function SearchFeed() {

  //From here
  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams();

  useEffect(() => {
     setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);


  //to here

  return (
    <Box p={2} minHeight="95vh" sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#000" }}>
    Search Results for <span style={ {color: '#000'} }>{searchTerm}</span>
    </Typography>

    <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}>
        {<Videos videos={videos} />}
      </Box>
    </Box>
    
  </Box>
  )
}

export default SearchFeed;
import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {

  const [searchTerm , setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  return (
    <Paper
    component='form'
    onSubmit={onhandleSubmit}
    sx={{
      borderRadius: 20,
      border: '1px solid #000',
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 },
    }}
  >
    <input
      className='search-bar'
      placeholder='Search...'
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
     
    />
    <IconButton type='submit' sx={{ p: '10px', color: '#000' }} aria-label='search'>
      <SearchIcon />
    </IconButton>
  </Paper>
  )
}

export default SearchBar
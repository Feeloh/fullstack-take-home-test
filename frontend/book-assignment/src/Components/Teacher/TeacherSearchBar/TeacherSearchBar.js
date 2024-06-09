import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

function TeacherSearchBar({ searchQuery, onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Box mt={2} mb={2}>
      <TextField
        label="Search for a book"
        variant="outlined"
        value={searchQuery}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
    </Box>
  );
}

TeacherSearchBar.propTypes = {
  searchQuery: PropTypes.string,
  onSearch: PropTypes.func,
};

export default TeacherSearchBar;

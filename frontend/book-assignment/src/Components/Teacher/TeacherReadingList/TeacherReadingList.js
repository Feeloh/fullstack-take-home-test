import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from '@mui/material';

const TeacherReadingList = ({ books = [], onRemoveFromReadingList }) => {
  return (
    <Box mt={2} mb={2}>
      <Typography variant="h6" gutterBottom>
        Reading List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Remove from Reading List</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={crypto.randomUUID()}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => onRemoveFromReadingList(book)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

TeacherReadingList.propTypes = {
  books: PropTypes.array,
  onRemoveFromReadingList: PropTypes.func,
};

export default TeacherReadingList;

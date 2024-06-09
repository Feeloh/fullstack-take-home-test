import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box, TablePagination } from '@mui/material';

const TeacherBookList = ({ books = [], onAddToReadingList }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, books.length - page * rowsPerPage);

  return (
    <Box mt={2} mb={2}>
      <Typography variant="h6" gutterBottom>
        Book List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Add to Reading List</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? books.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : books
            ).map((book) => (
              <TableRow key={crypto.randomUUID()}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>
                  <Button variant="contained" sx={{ color: 'white' }} color="primary" onClick={() => onAddToReadingList(book)}>
                    Add to Reading List
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={books.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

TeacherBookList.propTypes = {
  books: PropTypes.array,
  onAddToReadingList: PropTypes.func,
};

export default TeacherBookList;

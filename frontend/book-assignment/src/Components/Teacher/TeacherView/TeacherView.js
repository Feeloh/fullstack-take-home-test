import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeacherSearchBar from '../TeacherSearchBar/TeacherSearchBar';
import TeacherBookList from '../TeachBookList/TeacherBookList';
import TeacherReadingList from '../TeacherReadingList';
import { Typography, Box } from '@mui/material';


const TeacherView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [booksData, setBooksData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.post('http://localhost:4000/', {
          query: `
            query {
              books {
                title
                author
                coverPhotoURL
                readingLevel
              }
            }
          `,
        });
        setBooksData(response.data.data.books);
        setSearchResults(response.data.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const results = booksData.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(booksData);
    }
  };

  const addToReadingList = (book) => {
    if (!readingList.find(item => item.title === book.title)) {
      setReadingList([...readingList, book]);
    }
  };

  const removeFromReadingList = (bookToRemove) => {
    setReadingList(readingList.filter(book => book.title !== bookToRemove.title));
  };

  return (
    <Box mt={2} mb={2}>
      <Typography variant="h3" color="primary">
        Book Assignment
      </Typography>
      <TeacherSearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <TeacherBookList books={searchResults} onAddToReadingList={addToReadingList} />
      <TeacherReadingList books={readingList} onRemoveFromReadingList={removeFromReadingList} />
    </Box>
  );
};

export default TeacherView;

import API from "../utils/API";
import { React, useEffect, useState } from "react";
import { Card } from "@material-ui/core";

function SavedBooks() {

	const [books, setBooks] = useState([]);

	// loads the books 
	useEffect(() => {
		loadBooks();
	}, []);

	const loadBooks = () => {
		API.getBooks()
			.then(res => setBooks(res.data))
			.catch(err => console.error(err));
	}

	const deleteBook = (id) => {
		API.deleteBook(id)
			.then(() => loadBooks())
			.catch(err => console.error(err));
	}

	return (
		<>
			{books.map(book => {
				return (
					<Card>{book}</Card>
				)
			})}
		</>
	)

}

export default SavedBooks;
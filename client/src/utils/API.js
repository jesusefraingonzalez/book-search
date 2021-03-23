import axios from "axios";

export default {
	getBooks: () => axios.get("/api/books"),
	deleteBook: (id) => axios.delete(`/api/books/${id}`),
	saveBook: (data) => axios.post(`/api/books/`, data)
}
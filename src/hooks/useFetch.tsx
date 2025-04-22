import { useState } from "react";
import { BookSearchResult } from "../types";

const useFetch = () => {
	const [searchResults, setSearchResults] = useState<BookSearchResult[]>([]);
	return { searchResults };
};

export default useFetch;

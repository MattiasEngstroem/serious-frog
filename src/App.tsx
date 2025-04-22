import { useState } from "react";
import "./App.scss";
import SearchResult from "./components/SearchResult/SearchResult";
import { BookSearchResult } from "./types";

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState<BookSearchResult[]>([]);

	const handleSearch = async () => {
		// söka på base url https://openlibrary.org/search.json?title= sen lägger vi på texten från textfältet
		// visa sökresultat i ngn komponent

		const data = await fetch(
			`https://openlibrary.org/search.json?title=${searchInput}`
		);
		const jsonData = await data.json();
		const results = jsonData.docs as BookSearchResult[];

		console.log(results);
		setSearchResults(results);
	};

	return (
		<>
			<h1>serious-frog</h1>
			<div>
				<label>
					Search:{" "}
					<input
						type="text"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						placeholder="Search..."
					/>
				</label>
				<button onClick={handleSearch}>Search</button>
			</div>
			<SearchResult results={searchResults} />
		</>
	);
}

export default App;

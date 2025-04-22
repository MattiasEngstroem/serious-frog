import { BookSearchResult } from "../../types";

type SearchResultProps = {
	results: BookSearchResult[];
};

const SearchResult = ({ results }: SearchResultProps) => {
	// TODO: conditional render på results-arrayen

	return (
		<div>
			<h1>Search Result</h1>
			<ul>
				{results.map((result) => (
					<li key={result.key}>
						Title: {result.title}, by author: {result.author_name[0]} (
						{result.first_publish_year})
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchResult;

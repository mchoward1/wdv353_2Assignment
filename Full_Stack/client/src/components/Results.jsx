import API from "../API/index";
import SearchBar from "./SearchBar";

function Results({listing}) {

    const handleSearch = async event => {
        event.preventDefault();
        console.log("Search button clicked!", event.target.search.value);
        const response = await API.fetchMakes();
        console.log("From our API!", response.data);
    };

    return (
        <>
            <SearchBar onSubmit={handleSearch} />
            <h3>Results</h3>
        </>
    )
}

export default Results;
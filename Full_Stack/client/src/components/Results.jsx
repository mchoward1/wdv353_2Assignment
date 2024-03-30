import API from "../API/index";

function Results({listing}) {

    const listings = API.fetchMakes();
    return (
        <>
            <h3>Results</h3>
        </>
    )
}

export default Results;
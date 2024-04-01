import "react";
import "./App.css";
import Results from "./components/Results";
import API from './API/index';

function App() {
  // const handleSearch = async event => {
  //   event.preventDefault();
  //   console.log("Search button clicked!", event.target.search.value);
  //   const response = await API.fetchMakes();
  //   console.log("From our API!", response.data);
  // };

    return (
      <Results />
    )
}

export default App;

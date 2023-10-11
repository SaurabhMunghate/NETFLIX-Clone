import Row from "./Row";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
const mainUrl = "https://api.themoviedb.org/3";

function Home() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={mainUrl + requests.fetchNetflixOrigin}
      />
      <Row title="Trending Now" fetchUrl={mainUrl + requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={mainUrl + requests.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={mainUrl + requests.fetchActionMovies}
      />
      <Row
        title="Comdy Movies"
        fetchUrl={mainUrl + requests.fetchComedyMovies}
      />
      <Row title="Horror Now" fetchUrl={mainUrl + requests.fetchHorrorNow} />
      <Row title="Romance Now" fetchUrl={mainUrl + requests.fetchRomanceNow} />
      <Row
        title="Documentaries"
        fetchUrl={mainUrl + requests.fetchDocumentaries}
      />
    </div>
  );
}

export default Home;

import NavBar from "../Components/NavBar";
import Billboard from "../Components/Billboard";
import MovieList from "../Components/MovieList";

function BrowsePage() {
  return (
    <div>
      <NavBar />
      <Billboard />
      <div className="pb-5">
        <MovieList />
      </div>
    </div>
  );
}

export default BrowsePage;

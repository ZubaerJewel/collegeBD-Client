import SearchButton from "../../../component/SearchButton";
import Banner from "./Banner";
import Features from "./Features";
import Graduate from "./Graduate";
import Review from "./Review";
import ThreeCard from "./ThreeCard";


const Home = () => {
    return (
        <div>
            <SearchButton></SearchButton>
            <Banner></Banner> 
            <ThreeCard></ThreeCard>
            <Features></Features>
            <Review></Review> 
            <Graduate></Graduate>   
            
        </div>
    );
};

export default Home;
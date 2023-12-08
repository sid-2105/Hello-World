import "./App.css";
import Card from "./Components/Card/Card";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Community from "./Pages/Community";
import Gallery from "./Pages/Gallery";

const EligibilityList = [
  "Students of BTech, from any branch",
  "50+ questions solved on any coding platform to get free membership",
  "₹50 for half-yearly membership",
];

const BenifitsList = [
 " Chance to explore career opportunities",
 " Mentorship from top faculties",
 " Platform to show your programming skills",
 " Community support in debugging and review of code",
 " Chance to get compete with other coders of college",
];
function App() {
  return (
    <div>
    <Home/>
    <div className="parent">
    <div className="eligibility"><Card List={EligibilityList} Title={"Eligibility"} Images={"./check.png"}/></div>
    <div className="benifits"><Card List={BenifitsList} Title={"Benifits"} Images={"./trophy.png"}/></div>
    </div>
    <About/>  
    <Community/>
    <Gallery/>
      </div>
   
  );
}

export default App;

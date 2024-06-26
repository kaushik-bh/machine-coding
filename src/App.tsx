import classes from "./App.module.css";
import Accordian from "./components/Accordian/Accordian";
import MortgageCalculator from "./components/MortgageCalculator/MortgageCalculator";
import StarRating from "./components/StarRating/StarRating";

const App = () => {
    return (
        <section id={classes["root"]}>
            {/* <StarRating totalStarts={5} />
            <Accordian /> */}
            <MortgageCalculator />
        </section>
    );
};

export default App;

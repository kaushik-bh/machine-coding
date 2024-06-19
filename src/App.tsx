import classes from "./App.module.css";
import Accordian from "./components/Accordian/Accordian";
import StarRating from "./components/StarRating/StarRating";

const App = () => {
    return (
        <section id={classes["root"]}>
            <StarRating totalStarts={5} />
            <Accordian />
        </section>
    );
};

export default App;

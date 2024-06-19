import { useState } from "react";

import classes from "./StarRating.module.css";

interface IMessagesAgainstRating {
    [key: number]: string;
}

interface IProps {
    totalStarts: number;
}

const StarRating = ({ totalStarts }: IProps) => {
    // const totalStarts = totalStarts;

    const [userRating, setUserRating] = useState(0);

    const updateUserRating = (rating: number) => {
        if (rating + 1 === userRating) {
            setUserRating(0);
        } else {
            setUserRating(rating + 1);
        }
    };

    const messagesAgainstRating: IMessagesAgainstRating = {
        0: `Please provide us a rating`,
        1: `Worst`,
        2: `Bad`,
        3: `Good`,
        4: `Better`,
        5: `Best`,
    };

    const fetchRatingMessage = (rating: number): string => {
        return messagesAgainstRating[rating] ?? "Error";
    };

    return (
        <main>
            <h3>StarRating</h3>
            <div className={classes["star-container"]}>
                {[...Array(totalStarts)].map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={`${classes["circle"]} ${
                                index < userRating && classes["active"]
                            }`}
                            onClick={() => {
                                updateUserRating(index);
                            }}
                        />
                    );
                })}
            </div>
            <p>{`${fetchRatingMessage(userRating)} : ${userRating}`}</p>
        </main>
    );
};

export default StarRating;

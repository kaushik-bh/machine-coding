import React, { useEffect, useRef } from "react";
import classes from "./EachAccordian.module.css";
import { IAccordianData } from "../Accordian";

interface IProps {
    key: number;
    data: IAccordianData;
    index: number;
    isOpen: number;
    handleAccordian: (index: number) => void;
}

const EachAccordian = ({ data, index, isOpen, handleAccordian }: IProps) => {
    const { title, description } = data;
    const heightRef = useRef<HTMLDivElement>(null);
   
    useEffect(() => {
        heightRef.current!.focus();
    });

    return (
        <div
            className={`${classes["container"]} ${
                isOpen === index && classes["open"]
            }`}
            onClick={() => {
                if (isOpen === index) {
                    handleAccordian(-1);
                } else {
                    handleAccordian(index);
                }
            }}
        >
            <h3>{title}</h3>

            <div
                ref={heightRef}
                className={classes["answer-container"]}
                style={
                    isOpen === index
                        ? { height: heightRef.current!.scrollHeight }
                        : { height: "0px" }
                }
            >
                <p>{description}</p>
            </div>
        </div>
    );
};

export default EachAccordian;

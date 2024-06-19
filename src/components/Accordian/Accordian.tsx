import { useState } from "react";
import EachAccordian from "./EachAccordian/EachAccordian";

export interface IAccordianData {
    [key: string]: string;
    title: string;
    description: string;
}

const Accordian = () => {
    const [isOpen, setIsOpen] = useState(-1);

    const accordianData: IAccordianData[] = [
        {
            title: `FAQ 1`,
            description: `Desc 1`,
        },
        { title: "Title 2", description: `DESC 2` },
    ];

    const handleAccordian = (index: number) => {
        setIsOpen(index);
    };

    return (
        <main>
            <h3>Accordian</h3>
            {accordianData.map((eachAccordian, index) => {
                return (
                    <EachAccordian
                        key={index}
                        index={index}
                        data={eachAccordian}
                        isOpen={isOpen}
                        handleAccordian={handleAccordian}
                    />
                );
            })}
        </main>
    );
};

export default Accordian;

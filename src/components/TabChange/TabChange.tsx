import React, { useState } from "react";

const TabChange = () => {
    const [tab, setTab] = useState(0);

    const handleTabChange = (index: number) => {
        setTab(index);
    };

    return (
        <div>
            <div>
                <button
                    style={
                        tab === 0
                            ? { color: "white", backgroundColor: "blue" }
                            : {}
                    }
                    onClick={() => {
                        handleTabChange(0);
                    }}
                >
                    HTML
                </button>
                <button
                    style={
                        tab === 1
                            ? { color: "white", backgroundColor: "blue" }
                            : {}
                    }
                    onClick={() => {
                        handleTabChange(1);
                    }}
                >
                    CSS
                </button>
                <button
                    style={
                        tab === 2
                            ? { color: "white", backgroundColor: "blue" }
                            : {}
                    }
                    onClick={() => {
                        handleTabChange(2);
                    }}
                >
                    JavaScript
                </button>
            </div>
            <div>
                {tab === 0 && (
                    <p>
                        The HyperText Markup Language or HTML is the standard
                        markup language for documents designed to be displayed
                        in a web browser.
                    </p>
                )}
                {tab === 1 && (
                    <p>
                        Cascading Style Sheets is a style sheet language used
                        for describing the presentation of a document written in
                        a markup language such as HTML or XML.
                    </p>
                )}
                {tab === 2 && (
                    <p>
                        JavaScript, often abbreviated as JS, is a programming
                        language that is one of the core technologies of the
                        World Wide Web, alongside HTML and CSS.
                    </p>
                )}
            </div>
        </div>
    );
};

export default TabChange;

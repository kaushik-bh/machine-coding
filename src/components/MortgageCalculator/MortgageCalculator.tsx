import React, { FormEvent, useState } from "react";

const MortgageCalculator = () => {
    const [monthlyPayment, setMonthlyPayment] = useState("0");

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form as HTMLFormElement);

        const loan_amount = parseFloat(formData.get("loan_amount") as string);
        const annual_percentage_rate = parseFloat(
            formData.get("annual_percentage_rate") as string
        );
        const loan_term = parseFloat(formData.get("loan_term") as string);

        if (!loan_amount || !annual_percentage_rate || !loan_term) {
            alert("Not a number");
            return;
        }

        const monthly_interest_rate = annual_percentage_rate / 12; // i
        const total_number_of_payments = loan_term * 12; // n

        // P ( i (1+i)^n ) / ( (1+i)^n - 1)

        const monthly_mortgage_payment =
            (loan_amount *
                (monthly_interest_rate *
                    Math.pow(
                        1 + monthly_interest_rate,
                        total_number_of_payments
                    ))) /
            (Math.pow(1 + monthly_interest_rate, total_number_of_payments) - 1);

        setMonthlyPayment(monthly_mortgage_payment.toFixed(2));
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="loan_amount" placeholder="Loan Amount" />
            <input
                type="text"
                name="annual_percentage_rate"
                placeholder="Annual Percentage Rate"
            />
            <input type="text" name="loan_term" placeholder="Loan term" />
            <button>Calculate</button>
            <h3>Monthly mortgage payment: {monthlyPayment}</h3>
        </form>
    );
};

export default MortgageCalculator;

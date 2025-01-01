import { useState } from "react";

export default function UserInput({ onChange, userInput }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initialInvestment">Initial Investment:</label>
                    <input
                        type="number"
                        id="initialInvestment"
                        name="initialInvestment"
                        onChange={onChange}
                        value={userInput.initialInvestment  || "" }
                        required
                    />
                </div>
                <div>
                    <label htmlFor="annualInvestment">Annual Investment:</label>
                    <input
                        type="number"
                        id="annualInvestment"
                        name="annualInvestment"
                        onChange={onChange}
                        value={userInput.annualInvestment || ""}
                        required
                    />
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label htmlFor="expectedReturn">Expected Return:</label>
                    <input
                        type="number"
                        id="expectedReturn"
                        name="expectedReturn"
                        onChange={onChange}
                        value={userInput.expectedReturn || ""}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={userInput.duration || ""}
                        onChange={onChange}
                        required
                    />
                </div>
            </div>
        </section>
    );
}

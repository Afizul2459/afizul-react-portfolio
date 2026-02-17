import React from "react";
import "./Legal.css";

const Terms = () => {
    return (
        <div className="legal-page">
            <h1>Terms & Conditions</h1>
            <p>Last updated: 2026</p>

            <h2>1. Services</h2>
            <p>
                I provide web design, frontend development and digital services as a freelancer.
            </p>

            <h2>2. Payments</h2>
            <ul>
                <li>50% advance payment before starting project</li>
                <li>Remaining payment after project completion</li>
            </ul>

            <h2>3. Revisions</h2>
            <p>
                Reasonable revisions are included. Major changes may require extra cost.
            </p>

            <h2>4. Project Delivery</h2>
            <p>
                Delivery time depends on project complexity and agreement.
            </p>

            <h2>5. Copyright</h2>
            <p>
                After full payment, the client owns the final project files.
            </p>
        </div>
    );
};

export default Terms;

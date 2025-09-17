import React from 'react';
import './FactsBox.css';

interface FactsBoxProps {
    title: string;
    facts: string[];
}

const FactsBox: React.FC<FactsBoxProps> = ({ title, facts }) => {
    return (
        <div id="thefactsbox">
            <h2>{title}</h2>
            
                {facts.map((fact, index) => (
                    <p key={index}>{fact}</p>
                ))}
            
        </div>
    );
};

export default FactsBox;
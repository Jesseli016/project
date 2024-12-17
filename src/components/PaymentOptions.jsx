import React from "react";

function PaymentOptions({ options, onSelect, selectedOption }) {
    return (
        <div>
            {options.map((option) => (
                <label key={option.id} className="flex items-center mb-2">
                    <input
                        type="radio"
                        name="payment"
                        value={option.id}
                        onChange={() => onSelect(option.id)}
                        checked={selectedOption === option.id}
                        disabled={option.disabled}
                        className="mr-2"
                    />
                    <span className={option.disabled ? "text-gray-400 line-through" : ""}>
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    );
}

export default PaymentOptions;
'use client';
import React, { useState } from 'react';

interface InputData {
  location?: string;
  type?: string;
  size?: string;
}


const InputCount = () => {
    const [numberOfInputs, setNumberOfInputs] = useState<number>(0);
  const [inputData, setInputData] = useState<InputData[]>([]);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(e.target.value);
    setNumberOfInputs(value);
    setInputData(Array.from({ length: value }, () => ({})));
  };

  const handleInputChange = (index: number, key: keyof InputData, value: string) => {
    const newData: InputData[] = [...inputData];
    newData[index][key] = value;
    setInputData(newData);
  };
    return (
        <div>
            <label htmlFor="number">Enter number of inputs:</label>
            <input
                className="border"
                type="number"
                id="number"
                min={0}
                value={numberOfInputs}
                onChange={handleNumberChange}
            />

            {inputData.map((input, index) => (
                <div key={index}>
                    {numberOfInputs === 1 && (
                        <>
                            <div>
                                <label htmlFor={`location-${index}`}>Location:</label>
                                <input
                                    className="border"
                                    type="text"
                                    id={`location-${index}`}
                                    value={input.location || ''}
                                    onChange={(e) => handleInputChange(index, 'location', e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor={`type-${index}`}>Type:</label>
                                <input
                                    className="border"
                                    type="text"
                                    id={`type-${index}`}
                                    value={input.type || ''}
                                    onChange={(e) => handleInputChange(index, 'type', e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor={`size-${index}`}>Size:</label>
                                <input
                                    className="border"
                                    type="text"
                                    id={`size-${index}`}
                                    value={input.size || ''}
                                    onChange={(e) => handleInputChange(index, 'size', e.target.value)}
                                />
                            </div>
                        </>
                    )}

                    {numberOfInputs > 1 && (
                        <>
                            <label htmlFor={`location-${index}`}>Location:</label>
                            <input
                                className="border"
                                type="text"
                                id={`location-${index}`}
                                value={input.location || ''}
                                onChange={(e) => handleInputChange(index, 'location', e.target.value)}
                            />
                        </>
                    )}

                    {numberOfInputs > 1 && (
                        <>
                            <label htmlFor={`size-${index}`}>Size:</label>
                            <input
                                className="border"
                                type="text"
                                id={`size-${index}`}
                                value={input.size || ''}
                                onChange={(e) => handleInputChange(index, 'size', e.target.value)}
                            />
                        </>
                    )}

                    {numberOfInputs > 1 && (
                        <>
                            <label htmlFor={`type-${index}`}>Type:</label>
                            <input
                                className="border"
                                type="text"
                                id={`type-${index}`}
                                value={input.type || ''}
                                onChange={(e) => handleInputChange(index, 'type', e.target.value)}
                            />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InputCount;
import React from 'react';
import './Survey.css';

export const Survey = () => {
    const questions = [
        {
            id: 'age',
            number: '1',
            text: 'How old are you?*',
            type: 'select',
            options: ['18-24', '25-49', '50+']
        },
        {
            id: 'kids',
            number: '2',
            text: 'Do you have any kids under the age of 13?*',
            type: 'select',
            options: ['Yes', 'No']
        },
        {
            id: 'livingCondition',
            number: '3',
            text: 'How would you best describe your living condition?*',
            type: 'dropdown',
            options: ['House', 'Apartment', 'Other']
        },
        {
            id: 'activity',
            number: '4',
            text: 'How active are you on a scale of 1-5?*',
            type: 'select2',
            options:['1', '2', '3', '4', '5']
        },
        {
            id: 'pets',
            number: '5',
            text: 'How many pets are you looking to adopt?*',
            type: 'dropdown',
            options: ['1', '2', '3+']
        },
        {
            id: 'petPreferences',
            number: '6',
            text: 'Please specify any of your pet preferences below.',
            type: 'text'
        },
        {
            id: 'otherPets',
            number: '7',
            text: 'Do you have any other pets?*',
            type: 'select',
            options: ['Yes', 'No']
        },
        {
            id: 'travelOften',
            number: '8',
            text: 'Do you travel often?*',
            type: 'select',
            options: ['Yes', 'No']
        },
        {
            id: 'petTypePreference',
            number: '9',
            text: 'If the answer to the previous question was yes, what kind of pet would you prefer?',
            type: 'text'
        },
        {
            id: 'timeAllocation',
            number: '10',
            text: 'How much time can you allocate for your pet?*',
            type: 'dropdown',
            options: ['Less than 1 hour a day', '1-2 hours a day', '2-4 hours a day', '4+ hours a day']
        },
        {
            id: 'reasonForPet',
            number: '11',
            text: 'Why do you want a pet?*',
            type: 'text'
        },
        {
            id: 'allergies',
            number: '12',
            text: 'Does anyone in your household have allergies? Please specify below.',
            type: 'text'
        },
        {
            id: 'ownedPetBefore',
            number: '13',
            text: 'Have you ever owned a pet before?*',
            type: 'select',
            options: ['Yes', 'No']
        },
        {
            id: 'yardFence',
            number: '14',
            text: 'Do you have a yard, and if so, is it fenced?*',
            type: 'select',
            options: ['Yes(Fenced)', 'Yes(Not Fenced)', 'No']
        },
        {
            id: 'additionalInformation',
            number: '15',
            text: 'Please write any additional information you wish to share below.',
            type: 'text'
        }
    ];

    const [responses, setResponses] = React.useState({});

    const handleSubmit = () => {
        console.log(responses);
        // Add logic for handling responses
    };

    const handleSliderChange = (questionId, value) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: value
        }));
    };

    return (
        <div className="survey-container">
            <div className="survey-form">

            <header>
                <div className="header-line">Beautiful Together</div>
                <div className="header-line">Pet Survey</div>
            </header>

                {questions.map((question) => (
                    <div key={question.id} className="question-container">
                        <div className="question-number">{question.number}. {question.text}</div>

                        {question.type === 'select' && (
                            <div className="select-options">
                                {question.options.map((option) => (
                                    <div key={option} className="option">
                                        <input
                                            type="radio"
                                            id={option}
                                            name={question.id}
                                            value={option}
                                            onChange={(e) =>
                                                setResponses((prev) => ({
                                                    ...prev,
                                                    [question.id]: e.target.value
                                                }))
                                            }
                                        />
                                        <label className="label" htmlFor={option}>{option}</label>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {question.type === 'select2' && question.id === 'activity' && (
                            <div className="select-options horizontal">
                                {question.options.map((option) => (
                                    <div key={option} className="option">
                                        <input
                                            type="radio"
                                            id={option}
                                            name={question.id}
                                            value={option}
                                            onChange={(e) =>
                                                setResponses((prev) => ({
                                                    ...prev,
                                                    [question.id]: e.target.value
                                                }))
                                            }
                                        />
                                        <label className="label" htmlFor={option}>{option}</label>
                                    </div>
                                ))}
                            </div>
                        )}

                        {question.type === 'dropdown' && (
                            <select
                                id={question.id}
                                name={question.id}
                                onChange={(e) =>
                                    setResponses((prev) => ({
                                        ...prev,
                                        [question.id]: e.target.value
                                    }))
                                }
                            >
                                <option value="">Select an option</option>
                                {question.options.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        )}

                        {question.type === 'slider' && (
                            <div className="slider-container">
                                <input
                                    type="range"
                                    id={question.id}
                                    name={question.id}
                                    min={question.min}
                                    max={question.max}
                                    onChange={(e) => handleSliderChange(question.id, e.target.value)}
                                />
                                <div className="slider-value">{responses[question.id]}</div>
                            </div>
                        )}

                        {question.type === 'text' && (
                            <textarea
                                id={question.id}
                                name={question.id}
                                onChange={(e) =>
                                    setResponses((prev) => ({
                                        ...prev,
                                        [question.id]: e.target.value
                                    }))
                                }
                            />
                        )}

                    </div>
                ))}
                <button onClick={handleSubmit}>Submit Responses</button>
            </div>
        </div>
    );
};

export default Survey;
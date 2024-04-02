import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Survey = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    hasKids: false,
    livingCondition: '',
    activityLevel: null,
    numPets: '',
    petPreferences: '',
    travelsOften: false,
    hasOtherPets: false,
    otherPetType: '',
    timeForPet: '',
    reasonForPet: '',
    hasAllergies: '',
    ownedPetBefore: false,
    hasYard: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    navigate('/petselection');
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage % 3) + 1);
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 3 : prevPage - 1));
  };
  
  

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            {/* Questions 1-5 */}
            <div>
              <label>1. How old are you?</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="age"
                    value="18-24"
                    checked={formData.age === '18-24'}
                    onChange={handleChange}
                  />
                  18-24
                </label>
                <label>
                  <input
                    type="radio"
                    name="age"
                    value="24-49"
                    checked={formData.age === '24-49'}
                    onChange={handleChange}
                  />
                  24-49
                </label>
                <label>
                  <input
                    type="radio"
                    name="age"
                    value="50+"
                    checked={formData.age === '50+'}
                    onChange={handleChange}
                  />
                  50+
                </label>
              </div>
            </div>
  
            <div>
              <label>2. Do you have any kids under the age of 13?</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="hasKids"
                    value={true}
                    checked={formData.hasKids}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasKids"
                    value={false}
                    checked={!formData.hasKids}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
  
            <div>
              <label>3. How would you best describe your living condition?</label>
              <select
                name="livingCondition"
                value={formData.livingCondition}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="other">Other</option>
              </select>
            </div>
  
            <div>
              <label>
                4. How active are you on a scale of 1-3? (1 = Not Active, 3 =
                Extremely Active)
              </label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="activityLevel"
                    value={1}
                    checked={formData.activityLevel === 1}
                    onChange={handleChange}
                  />
                  1
                </label>
                <label>
                  <input
                    type="radio"
                    name="activityLevel"
                    value={2}
                    checked={formData.activityLevel === 2}
                    onChange={handleChange}
                  />
                  2
                </label>
                <label>
                  <input
                    type="radio"
                    name="activityLevel"
                    value={3}
                    checked={formData.activityLevel === 3}
                    onChange={handleChange}
                  />
                  3
                </label>
              </div>
            </div>
  
            <div>
              <label>5. How many pets are you looking to adopt?</label>
              <select
                name="numPets"
                value={formData.numPets}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </select>
            </div>
          </>
        );
      case 2:
        return (
          <>
            {/* Questions 6-10 */}
            <div>
              <label>6. Please specify your pet preferences below.</label>
              <textarea
                name="petPreferences"
                value={formData.petPreferences}
                onChange={handleChange}
                placeholder="Enter your pet preferences"
              />
            </div>
  
            <div>
              <label>7. Do you travel often?</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="travelsOften"
                    value={true}
                    checked={formData.travelsOften}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="travelsOften"
                    value={false}
                    checked={!formData.travelsOften}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
  
            <div>
              <label>8. Do you have any other pets?</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="hasOtherPets"
                    value={true}
                    checked={formData.hasOtherPets}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasOtherPets"
                    value={false}
                    checked={!formData.hasOtherPets}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
  
            {formData.hasOtherPets && (
              <div>
                <label>
                  9. If the answer to the previous question was yes, what kind of
                  pet would you prefer?
                </label>
                <input
                  type="text"
                  name="otherPetType"
                  value={formData.otherPetType}
                  onChange={handleChange}
                  placeholder="Enter pet type"
                />
              </div>
            )}
  
            <div>
              <label>10. How much time can you allocate for your pet?</label>
              <select
                name="timeForPet"
                value={formData.timeForPet}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="few-hours">A few hours a day</option>
                <option value="most-day">Most of the day</option>
                <option value="all-day">All day</option>
              </select>
            </div>
          </>
        );
      case 3:
        return (
          <>
            {/* Questions 11-15 */}
            <div>
              <label>11. Why do you want a pet?</label>
              <textarea
                name="reasonForPet"
                value={formData.reasonForPet}
                onChange={handleChange}
                placeholder="Enter your reason for wanting a pet"
              />
            </div>
  
            <div>
              <label>
                12. Does anyone in your household have any allergies? Please
                specify below.
              </label>
              <input
                type="text"
                name="hasAllergies"
                value={formData.hasAllergies}
                onChange={handleChange}
                placeholder="Enter any allergies"
              />
            </div>
  
            <div>
              <label>13. Have you ever owned a pet before?</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="ownedPetBefore"
                    value={true}
                    checked={formData.ownedPetBefore}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="ownedPetBefore"
                    value={false}
                    checked={!formData.ownedPetBefore}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
  
            <div>
              <label>14. Do you have a yard, and if so is it fenced?</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="hasYard"
                    value="fenced"
                    checked={formData.hasYard === 'fenced'}
                    onChange={handleChange}
                  />
                  Yes (fenced)
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasYard"
                    value="not-fenced"
                    checked={formData.hasYard === 'not-fenced'}
                    onChange={handleChange}
                  />
                  Yes (not fenced)
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasYard"
                    value="no"
                    checked={formData.hasYard === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
  
            <div>
              <label>
                15. Please write any additional information you wish to share
                below.
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Enter additional information"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Beautiful Together Pet Survey</h2>
      <p>Thank you for participating!</p>

      {renderPageContent()}

      <div>
        {currentPage > 1 && <button onClick={handlePrevPage}>Previous</button>}
        {currentPage < 3 && <button onClick={handleNextPage}>Next</button>}
        {currentPage === 3 && <button type="submit">Submit Responses</button>}
      </div>
    </form>
  );
};
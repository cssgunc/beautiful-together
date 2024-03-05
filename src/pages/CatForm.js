"use client";
import { useState } from "react"; 

export const CatForm = () => {
    const [page, setPage] = useState(0);
    return (
        <main className="flex flex-col items-center bg-backgroundGreen w-full h-full w-min-full h-min-full">

            <h1 className="text-center text-5xl m-2 my-4 font-serif w-10/12 min-h-min min-w-min p-5 text-white justify-center rounded-sm border-themeOrange border-4 bg-themeOrange">Cat Preference Form <i className="icomoon-e913"></i></h1>

            <form id="catform" className="flex p-8 justify-center m-3 bg-background w-5/6 min-w-min min-h-min rounded-md border- border-stone-200 border-8">
                <div id="part1" className={page === 0 ? "": "hidden"}>
                    <InputQuestion label="*First Name:" id="f_name" name="first_name" placeholder=" last name" required/>
                    <InputQuestion label="*Last Name:" id="l_name" name="last_name" placeholder=" last name" required/>
                    <InputQuestion label="*Address:" id="address" name="address" placeholder="home address" pattern="^(?=\S*\s)(?=\P{L}*\p{L})(?=\D*\d)[\p{L}\d\s',.#/-]*$" autoComplete="street-address" required/>
                    <InputQuestion label="*Country:" id="country" name="country" placeholder=" country" autoComplete="country-name" required/>
                    <InputQuestion label="*City:" id="city" name="city" placeholder=" city" required/>

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-themeOrange rounded-md border-themeOrange border-4">
                        <label className="font-sans text-white" for="stateprovince">*State/Province:</label>
                        <select className="h-10 w-60 bg-stone-200 rounded-md border-white border" id="stateprovince" name="stateprovince" required>
                        <option value="" selected disabled>Select your state/province</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            <option value="AS">American Samoa</option>
                            <option value="GU">Guam</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="VI">Virgin Islands</option>
                            <option value="NA">Not a US City</option>
                        </select>
                    </div>

                    <ListQuestion label="*Zip/Postal Code:" id="stateprovince" name="stateprovince" selectText="Select your state/province" required questions={[
                        { val: "AL", name: "Alabama" },
                        { val: "AK", name: "Alaska" },
                        { val: "AZ", name: "Arizona" },
                        { val: "AR", name: "Arkansas" },
                        { val: "CA", name: "California" },
                        { val: "CO", name: "Colorado" },
                        { val: "CT", name: "Connecticut" },
                        { val: "DE", name: "Delaware" },
                        { val: "FL", name: "Florida" },
                        { val: "GA", name: "Georgia" },
                        { val: "HI", name: "Hawaii" },
                        { val: "ID", name: "Idaho" },
                        { val: "IL", name: "Illinois" },
                        { val: "IN", name: "Indiana" },
                        { val: "IA", name: "Iowa" },
                        { val: "KS", name: "Kansas" },
                        { val: "KY", name: "Kentucky" },
                        { val: "LA", name: "Louisiana" },
                        { val: "ME", name: "Maine" },
                        { val: "MD", name: "Maryland" },
                        { val: "MA", name: "Massachusetts" },
                        { val: "MI", name: "Michigan" },
                        { val: "MN", name: "Minnesota" },
                        { val: "MS", name: "Mississippi" },
                        { val: "MO", name: "Missouri" },
                        { val: "MT", name: "Montana" },
                        { val: "NE", name: "Nebraska" },
                        { val: "NV", name: "Nevada" },
                        { val: "NH", name: "New Hampshire" },
                        { val: "NJ", name: "New Jersey" },
                        { val: "NM", name: "New Mexico" },
                        { val: "NY", name: "New York" },
                        { val: "NC", name: "North Carolina" },
                        { val: "ND", name: "North Dakota" },
                        { val: "OH", name: "Ohio" },
                        { val: "OK", name: "Oklahoma" },
                        { val: "OR", name: "Oregon" },
                        { val: "PA", name: "Pennsylvania" },
                        { val: "RI", name: "Rhode Island" },
                        { val: "SC", name: "South Carolina" },
                        { val: "SD", name: "South Dakota" },
                        { val: "TN", name: "Tennessee" },
                        { val: "TX", name: "Texas" },
                        { val: "UT", name: "Utah" },
                        { val: "VT", name: "Vermont" },
                        { val: "VA", name: "Virginia" },
                        { val: "WA", name: "Washington" },
                        { val: "WV", name: "West Virginia" },
                        { val: "WI", name: "Wisconsin" },
                        { val: "WY", name: "Wyoming" }
                    ]}/>

                    <InputQuestion label="*Zip/Postal Code:" id="zip" name="zip" placeholder=" zip/postal code" pattern="\d{5}-?(\d{4})?" autoComplete="postal-code" required/>


                    <InputQuestion label="Home Phone:" id="homePhone" name="homePhone" type="tel" placeholder=" home phone"/>


                    <InputQuestion label="*Cell Phone:" id="cell" name="cell" type="tel" placeholder=" cell phone" required/>

    
                    <InputQuestion label="*Email:" id="email" name="email" type="email" placeholder=" youremail@email.com" required/>

                    <div className="flex flex-row justify-end">
                        <button type="button" form="dogform" onClick={() => setPage(1)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-passiveGreen rounded-md border-passiveGreen border-4 m-2">Next</button>
                    </div>
                </div>

                <div id="part2" className={page === 1 ? "" : "hidden "}>
                <ListQuestion label="*What age cat are you interested in adopting?: " id="c_size" selectText="--" required questions={[
                    {id : "K", name: "Kitten"},
                    {id : "Y", name: "Young Adult"},
                    {id : "A", name: "Adult"},
                    {id : "S", name: "Senior"}
                ]} />
                <InputQuestion label="*What breed of cat?: " id="breed" name="cat_breed" required  />

                <ListQuestion label="*What fur length do you prefer?: " id="fur_length" selectText="--" required questions={[
                    {id : "S", name: "Shorthair"},
                    {id : "L", name: "Longhair"}
                ]} />
                <ListQuestion label="Is your home suitable for an indoor, outdoor, or both indoor/outdoor cat?: " id="suitable_home" selectText="--" required questions={[
                    {id : "I", name: "Indoor"},
                    {id : "O", name: "Outdoor"},
                    {id : "B", name: "Both Indoor/Outdoor"}
                ]} />
                    <div className="flex flex-row justify-end">
                        <button type="button" onClick={() => setPage(0)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-passiveGreen rounded-md border-passiveGreen border-4 m-2">Previous</button>
                        <button type="button" onClick={() => setPage(2)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-passiveGreen rounded-md border-passiveGreen border-4 m-2">Next</button>
                    </div>
                </div>

                <div id="part3" className={page === 2 ? "" : "hidden "}>
                    <ListQuestion label="*My Cat needs to be able to be alone..." id="alone_time" name="cat_independency" selectText="--" required questions={[
                        {id : "M", name: "More than 9 hours per day."},
                        {id : "A", name: "Around 4-8 hours per day."},
                        {id : "L", name: "Less than 4 hours a day."}
                    ]} />
                    <ListQuestion label="*When I am at home, I want my cat to be by my side or in my lap..." id="quality_time" name="cat_time" selectText="--" required questions={[
                        {id : "L", name: "Little of the time."},
                        {id : "S", name: "Some of the time."},
                        {id : "A", name: "All of the time."}
                    ]} />
                    <div className="flex flex-row justify-end">
                        <button type="button" onClick={() => setPage(1)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-passiveGreen rounded-md border-passiveGreen border-4 m-2">Previous</button>
                        <button className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-passiveGreen rounded-md border-passiveGreen border-4 m-2" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </main>
    );
}

function InputQuestion({label, name, id, type, ...args }) {
    return(
    <div className="flex flex-col pt-2 pb-4 px-3 w-full min-h-min min-w-min align-top bg-themeOrange rounded-md border-white border m-2">
        <label className="font-sans text-wrap text-lg text-white" for={name}>{label}</label>
        <input className="h-10 w-60 bg-stone-200 rounded-md border-white border" type="text" id={id} name={name} {...args} />
    </div>
    );
}

function ListQuestion({label, name, id, selectText, questions, ...args}) {
    return(
    <div className="flex flex-col pt-2 pb-4 px-3 min-h-min w-full align-top bg-themeOrange rounded-md border-white border m-2 space-y-2">
        <label className="font-sans text-wrap text-white">{label}</label>
        <div className="border-2 p-2 rounded-lg border-white space-y-2">
            {questions.map((question) => (
                <fieldset id={id} className="space-x-2">
                    <input className="" type="radio" id={question.val} name={name} {...args} />

                    <label className="font-sans text-white text-wrap" for={question.val}>
                        {question.name}
                    </label>
                </fieldset>
            ))}
            </div>
    </div>
    );
}
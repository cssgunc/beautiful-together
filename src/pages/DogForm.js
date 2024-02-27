"use client";
import { useState } from "react";

export const DogForm = () => {

    // TODO":
    
    // create react component for reusable form question??

    // fix page-switching, so all previous form questions are answered before next page
    // OR
    // split pages into individual forms, track previous answers somehow and submit them all on page 3??

    // Create list of questions for the dogs

    const [page, setPage] = useState(0);

    return (
        <main className="flex flex-col items-center bg-lime-700 w-full h-full">

            <h1 className="text-center text-5xl m-2 font-serif min-h-min min-w-min p-5 text-white justify-center rounded-sm border-orange-400 border-4 bg-orange-400">Dog Preference Form <i className="icomoon-e913"></i></h1>

            <form id="dogform" className="flex p-8 justify-center m-3 bg-stone-50 min-w-min min-h-min rounded-sm border- border-stone-50 border-8">
                <div id= "part1" className={page === 0 ? "" : "hidden "}>

                    <InputQuestion label="*First Name:" id="f_name" name="first_name" type="text" placeholder=" first name" required/>


                    <InputQuestion label="*Last Name:" id="l_name" name="last_name" type="text" placeholder=" last name" required/>

                    

                    <InputQuestion label="*Address:" id="address" name="address" type="text" placeholder=" home address" pattern="^(?=\S*\s)(?=\P{L}*\p{L})(?=\D*\d)[\p{L}\d\s',.#/-]*$" autoComplete="street-address" required/>

                    

                    <InputQuestion label="*Country:" id="country" name="country" type="text" placeholder=" country" autoComplete="country-name" required/>


                    <InputQuestion label="*City:" id="city" name="city" type="text" placeholder=" city" required/>


                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-orange-300 rounded-sm border-orange-300 border-4 m-2">
                        <label className="font-sans text-white" for="last_name">*State/Province:</label>
                        <select className="h-10 w-30 bg-stone-200 rounded-sm border-orange-400 border-2" id="stateprovince" name="stateprovince" required> 
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


                    <InputQuestion label="*Zip/Postal Code:" id="zip" name="zip" type="text" placeholder=" zip/postal code" pattern="\d{5}-?(\d{4})?" autoComplete="postal-code" required/>


                    <InputQuestion label="Home Phone:" id="homePhone" name="homePhone" type="tel" placeholder=" home phone"/>


                    <InputQuestion label="*Cell Phone:" id="cell" name="cell" type="tel" placeholder=" cell phone" required/>

    
                    <InputQuestion label="*Email:" id="email" name="email" type="email" placeholder=" youremail@email.com" required/>

                    <div className="flex flex-row justify-end">
                        <button type="button" form="dogform" onClick={() => setPage(1)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-orange-400 rounded-sm border-orange-400 border-4 m-2">Next</button>
                    </div>
                </div>

                <div id="part2" className={page === 1 ? "" : "hidden "}>

                    <InputQuestion label="*Page 2 Question:" id="quest2" name="quest1" type="text" required/>

                    <div className="flex flex-row justify-end">
                        <button type="button" onClick={() => setPage(0)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-orange-400 rounded-sm border-orange-400 border-4 m-2">Previous</button>
                        <button type="button" onClick={() => setPage(2)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-orange-400 rounded-sm border-orange-400 border-4 m-2">Next</button>
                    </div>
                </div>

                <div id="part3" className={page === 2 ? "" : "hidden "}>

                    <InputQuestion label="*Page 3 Question:" id="quest3" name="quest1" type="text" required/>

                    <div className="flex flex-row justify-end">
                        <button type="button" onClick={() => setPage(1)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-orange-400 rounded-sm border-orange-400 border-4 m-2">Previous</button>

                        <button className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-orange-400 rounded-sm border-orange-400 border-4 m-2" type="submit">Submit</button>
                    </div>
                </div>
            </form>

        </main>
    );
}

function InputQuestion({label, name, id, type, ...args }) {
    return(
    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full min-h-min min-w-min align-top bg-orange-300 rounded-sm border-orange-300 border-4 m-2">
        <label className="font-sans text-lg text-white" for={name}>{label}</label>
        <input className="h-10 w-30 bg-slate-200 rounded-sm border-orange-400 border-2" type={type} id={id} name={name} {...args} />
    </div>
    );
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Graveyard of old code

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="first_name">*First Name:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" placeholder=" first name" type="text" id="f_name" name="first_name" required />
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="last_name">*Last Name:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" placeholder=" last name" type="text" id="l_name" name="last_name" required />
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="address">*Address:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" placeholder=" home address" type="text" id="address" name="address" pattern="^(?=\S*\s)(?=\P{L}*\p{L})(?=\D*\d)[\p{L}\d\s',.#/-]*$" autoComplete="street-address" required />
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="county">*Country:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" placeholder=" country" type="text" id="country" name="country" autoComplete="country-name" required />
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="city">*City:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" placeholder=" city" type="text" id="city" name="city" required />
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="zip">*Zip/Postal Code:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" placeholder=" zip/postal code" type="text" id="zip" name="zip" autoComplete="postal-code" pattern="\d{5}-?(\d{4})?" required />
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="home_phone">Home Phone:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" placeholder=" home phone" type="tel" id="homePhone" name="homePhone"/>
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="cell">*Cell Phone:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" placeholder=" cell phone" type="yel" id="cell" name="cell" required />
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="email">*Email:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" placeholder=" your_email@email.com" type="email" id="email" name="email" required />
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="zip">*Page 2 Question:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="text" id="quest2" name="quest1" autoComplete="TODO " required />
</div> */}

{/* <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
    <label className="font-extralight text-slate-400" for="zip">*Page 3 Question:</label>
    <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="text" id="quest2" name="quest1" autoComplete="TODO " required />
</div> */}
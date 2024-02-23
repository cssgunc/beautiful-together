export const DogForm = () => {
    return (
        <main className="flex flex-col items-center bg-gray-200 w-full h-full">

            <h1 className="text-center text-6xl m-2 font-extralight h-11/12 w-11/12 p-5 text-orange-200 justify-center rounded-md border-orange-400 border-4 bg-slate-500">Dog Preference Form</h1>

            <div className="flex p-8 justify-center m-3 bg-slate-500 w-10/12 rounded-lg border-4 border-orange-400">
                <form>
                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="first_name">*First Name:</label>
                        <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="text" id="f_name" name="first_name" required />
                    </div>

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="last_name">*Last Name:</label>
                        <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="text" id="l_name" name="last_name" required />
                    </div>

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="address">*Address:</label>
                        <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="text" id="address" name="address" pattern="^(?=\S*\s)(?=\P{L}*\p{L})(?=\D*\d)[\p{L}\d\s',.#/-]*$" autoComplete="street-address" required />
                    </div>

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="county">*Country:</label>
                        <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="text" id="country" name="country" autoComplete="country-name" required />
                    </div>

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="city">*City:</label>
                        <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="text" id="city" name="city" required />
                    </div>

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="last_name">*State/Province:</label>
                        <select className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" id="stateprovince" name="stateprovince" required> 
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

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="zip">*Zip/Postal Code:</label>
                        <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="text" id="zip" name="zip" autoComplete="postal-code" pattern="\d{5}-?(\d{4})?" required />
                    </div>

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="home_phone">Home Phone:</label>
                        <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="tel" id="homePhone" name="homePhone"/>
                    </div>

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="cell">*Cell Phone:</label>
                        <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="yel" id="cell" name="cell" required />
                    </div>

                    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-yellow-100 rounded-md border-orange-300 border-2 m-2">
                        <label className="font-extralight text-slate-400" for="email">*Email:</label>
                        <input className="h-10 w-30 bg-slate-200 rounded-lg border-gray-500 border-2" type="email" id="email" name="email" required />
                    </div>

                    <button className="flex flex-col pt-2 pb-4 px-3 h-10 w-20 align-top bg-yellow-100 rounded-md border-orange-300 border-4 m-2" type="submit">Submit</button>
                </form>
            </div>

        </main>
    );
}
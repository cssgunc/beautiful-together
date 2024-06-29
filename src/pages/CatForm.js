"use client";
import { db } from "../firebase-config.js";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react"; 

export const CatForm = () => {
    const [page, setPage] = useState(0);

    const preferenceList = [
        "cat_age",
        "cat_fur_length",
        "cat_indoor_outdoor",
        "cat_litterbox",
        "cat_traits",
    ];

    const handleCatForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newCatInfo = {};
    
        for (const preference of preferenceList) {
            if (preference === "cat_traits") {
                const selectedTraits = [];
                for (const [key, value] of formData.entries()) {
                    if (key === "cat_traits[]") {
                        selectedTraits.push(value);
                    }
                }
                newCatInfo[preference] = selectedTraits;
            } else {
                newCatInfo[preference] = formData.get(preference);
            }
        }
    
        const userRef = "users";
        // Retrieve the user UID from localStorage
        const userUID = JSON.parse(localStorage.getItem("userData")).uid;
    
        try {
            // Update the cat preferences for the specific user using the user UID
            await setDoc(doc(db, userRef, userUID), newCatInfo, { merge: true });
            console.log("Cat preferences updated for user:", userUID);
        } catch (error) {
            console.error("Error updating cat preferences:", error);
        }
    };

    return (
        <main className="flex flex-col items-center bg-backgroundGreen w-full h-full w-min-full h-min-full">

            <h1 className="text-center text-5xl m-2 my-4 font-serif w-10/12 min-h-min min-w-min p-5 text-white justify-center rounded-sm border-themeOrange border-4 bg-themeOrange">Cat Preference Form<i className="icomoon-e913"></i></h1>

            <form id="catform" className="flex p-8 justify-center m-3 bg-background w-5/6 min-w-min min-h-min rounded-md border- border-stone-200 border-8" onSubmit={handleCatForm}>
                <div id="part1" className={page === 0 ? "" : "hidden "}>
                    <ListQuestion label="*What age cat are you interested in adopting?: " id="c_age" name="cat_age" selectText="--" required questions={[
                        {id : "K", name: "Baby", value: "Baby"},
                        {id : "Y", name: "Kitten", value: "Kitten"},
                        {id : "A", name: "Youth", value: "Youth"},
                        {id : "S", name: "Adult", value: "Adult"}
                    ]} />

                    <ListQuestion label="*What fur length do you prefer?: " id="c_fur_length" name="cat_fur_length" selectText="--" required questions={[
                        {id : "S", name: "Shorthair", value: "Short"},
                        {id : "L", name: "Longhair", value: "Long"},
                        {id : "K", name: "Any", value: ""}
                    ]} />
                    <ListQuestion label="Is your home suitable for an indoor, outdoor, or both indoor/outdoor cat?: " id="c_suitable_home" name="cat_indoor_outdoor" selectText="--" required questions={[
                        {id : "I", name: "Indoor", value: "Indoor"},
                        {id : "O", name: "Outdoor", value: "Outdoor"},
                    ]} />
                    <div className="flex flex-row justify-end">
                        <button type="button" onClick={() => setPage(1)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-passiveGreen rounded-md border-passiveGreen border-4 m-2">Next</button>
                    </div>
                </div>

                <div id="part2" className={page === 1 ? "" : "hidden "}>
                    <ListQuestion label="*My cat needs to already be litterbox trained" id="c_litterbox" name="cat_litterbox" selectText="--" required questions={[
                        {id : "M", name: "Yes", value: "Yes"},
                        {id : "A", name: "No", value: "No"},
                    ]} />
                    <ListQuestion label="I want my cat to be: " id="c_traits" name="cat_traits" allowMultiple={true} questions={[
                        {id : "L", name: "Playful", value: "Playful"},
                        {id : "S", name: "Inquisitive", value: "Inquisitive"},
                        {id : "A", name: "Social", value: "Social"},
                        {id : "J", name: "Friendly", value: "Friendly"},
                        {id : "R", name: "Reserved", value: "Reserved"},
                        {id : "C", name: "Active", value: "Active"}
                    ]} />
                    <div className="flex flex-row justify-end">
                        <button type="button" onClick={() => setPage(0)} className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-passiveGreen rounded-md border-passiveGreen border-4 m-2">Previous</button>
                        <button className="flex flex-col pt-2 pb-2 px-2 font-sans text-center text-white h-10 w-20 align-top bg-passiveGreen rounded-md border-passiveGreen border-4 m-2" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </main>
    );
}

function ListQuestion({label, name, id, selectText, questions, allowMultiple = false, ...args}) {
    return(
    <div className="flex flex-col pt-2 pb-4 px-3 min-h-min w-full align-top bg-themeOrange rounded-md border-white border m-2 space-y-2">
        <label className="font-sans text-wrap text-white">{label}</label>
        <div className="border-2 p-2 rounded-lg border-white space-y-2">
            {questions.map((question) => (
                <fieldset id={id} className="space-x-2" key={question.id}>
                    <input
                        className=""
                        type={allowMultiple ? "checkbox" : "radio"}
                        id={`${id}-${question.id}`}
                        name={allowMultiple ? `${name}[]` : name}
                        value={question.value}
                        {...args}
                    />
                    <label className="font-sans text-white text-wrap" htmlFor={`${id}-${question.id}`}>
                        {question.name}
                    </label>
                </fieldset>
            ))}
        </div>
    </div>
    );
}
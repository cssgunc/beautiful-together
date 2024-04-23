/**************************** 
    FYI - I HAVE NOT TESTED ANY OF THIS CODE YET
    Whenever I try and run it, either React just doesn't load any page at
    all, or a different firebase error in Survey.js will stop this page from
    loading. I can try and troubleshoot it later, but for now this is being
    built blindly.
 */

"use client";
import { useState } from "react";

const shoppingCartPets = [];
const selectedPets = [];

let checkoutPage = false;

export const PetConfirmation = () => {
    return !checkoutPage ? (
        <main className="w-full h-screen bg-background flex justify-center">
            <div>
                <img></img>
                <div>
                    {shoppingCartPets.map((pet) => {
                        <PetBox img={pet.image}/>
                    })}
                    <button></button> 
                    {/* I personally think it might be better if each pet is individually confirmed,
                        rather than being selected and checked out as a group. */}
                </div>
            </div>
        </main>
    ) : (
        <div>
            {/* Have the pet checkout page here */}
        </div>
    );
}

function PetBox(img, name) {
    return (
        <div className="w-4/5 bg-themeOrange flex">
            <div className="m-0 p-0 flex-grow-0.5 flex flex-col justify-center">
                <img src={img} className="w-full "></img>
                <h2>{name}</h2>
                <button></button>
            </div>
            <div className="m-0 p-0 flex-grow-0.5">
                <p><img></img></p>
            </div>
        </div>
    );
}

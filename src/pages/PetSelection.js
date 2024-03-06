import React from 'react';
import './PetSelection.css';

export const PetSelection = () => {
    const swipe = (side, oldId, newId) => {
        var oldElement = document.getElementById(oldId);
        var newElement = document.getElementById(newId);
        oldElement.classList.add("swipe" + side);
        newElement.classList.remove("background");

        setTimeout(() => hide(oldId), 1000);
    }

    const hide = (id) => {
        var element = document.getElementById(id);
        element.classList.remove("swipeleft");
        element.classList.remove("swiperight");
        element.classList.add("background");
    }
    
    return (
        <div className='outsideDiv'>
            <h1>Not Actually a Pet Selection Form</h1>

            <div id="page1" className='normal'>
                <img src={require('./img/placeholder_asha.jpeg')} alt="" height={200} width={200} />
                <img src={require('./img/placeholder_barry.jpg')} alt="" height={200} width={200}/>

                <div>
                    <button id="page1left" onClick={() => swipe("left", "page1", "page2")} type="button">
                        Swipe Left!
                    </button>
                    <button id="page1right" onClick={() => swipe("right", "page1", "page2")} type="button">
                        Swipe Right!
                    </button>
                </div>
            </div>

            <div id="page2" className={'normal background'}>
                <img src={require('./img/placeholder_barry.jpg')} alt="" height={200} width={200}/>
                <img src={require('./img/placeholder_asha.jpeg')} alt="" height={200} width={200} />

                <div>
                    <button id="page2left" onClick={() => swipe("left", "page2", "page1")} type="button">
                        Swipe Left!
                    </button>
                    <button id="page2right" onClick={() => swipe("right", "page2", "page1")} type="button">
                        Swipe Right!
                    </button>
                </div>
            </div>
        </div>
    );
}

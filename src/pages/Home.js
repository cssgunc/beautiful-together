import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center m-5 gap-5">
            <div classname="">
                <img className="max-h-24" src="logo.png" alt="logo"/>
            </div>
            <div className="flex flex-col shadow-lg w-full">
                <div className="flex flex-col items-center bg-orange-200 p-5 gap-2">
                    <div className="text-white text-xl font-bold">Ready to meet your match?</div>
                    <div className="bg-orange-400 rounded-full p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                        </svg>
                    </div>
                </div>
                <div className="p-7 w-full">
                    <img className="max-h-60 w-full object-contain" src="dog.png" alt="dog"/>
                </div>
            </div>
            <div className="flex flex-col text-lg gap-3">
                <div className="text-xl font-bold">Step 1: Take the survey</div>
                <div>The Meet your Match survey will help you understand your new pet – and yourself – a little better. Submit your responses to be matched with a Canine or Feline-ality based on your preferences and lifestyle.</div>
                <div>You don’t always have to go with your match, but at least you’ll know where to start!</div>
                <button onClick={() => navigate('/catform')} className="flex flex-row align-center justify-center gap-2 bg-green-300 text-white rounded p-3 font-bold shadow-md">
                    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.07692 0C8.07692 1.25662 7.05808 2.25 5.76923 2.25H4.61538C2.07692 2.25 0 4.275 0 6.75C0 9.225 2.07692 11.25 4.61538 11.25H5.94923C5.8298 11.805 5.76948 12.3705 5.76923 12.9375V27H8.07692V12.9375C8.07692 9.52763 10.9258 6.75 14.4231 6.75C15.4638 6.75 16.4423 6.98287 17.3077 7.41825V4.99275C16.3821 4.66897 15.4064 4.5023 14.4231 4.5C11.115 4.5 8.235 6.33262 6.77885 9H4.61538C3.32654 9 2.30769 8.00663 2.30769 6.75C2.30769 5.49337 3.32654 4.5 4.61538 4.5H5.76923C8.30769 4.5 10.3846 2.475 10.3846 0H8.07692ZM18.4615 2.35575V9.5625C18.4615 12.4312 21.1338 14.625 24.2308 14.625C27.3277 14.625 30 12.4312 30 9.5625V2.35575L28.1965 3.58537L26.2858 4.887C25.6281 4.65862 24.9785 4.39425 24.2308 4.39425C23.4831 4.39425 22.8346 4.65862 22.1758 4.887L20.2638 3.5865L18.4615 2.35575ZM24.2308 6.64425C24.8977 6.64425 25.5115 6.80175 26.0342 7.06612L26.6458 7.38225L27.2227 6.99638L27.6923 6.68025V9.5625C27.6923 11.043 26.2315 12.375 24.2308 12.375C22.23 12.375 20.7692 11.043 20.7692 9.5625V6.67913L21.2377 6.99638L21.8146 7.38337L22.4285 7.06612C22.9859 6.78687 23.604 6.64219 24.2308 6.64425ZM16.1538 12.375C12.9715 12.375 10.3846 14.8973 10.3846 18V27H12.6923V18C12.6923 16.1415 14.2477 14.625 16.1538 14.625C18.06 14.625 19.6154 16.1415 19.6154 18V27H21.9231V18C21.9231 16.9144 21.6081 15.9075 21.0577 15.0469C19.9672 14.5444 19.0336 13.7678 18.3531 12.7969C17.6554 12.5173 16.9082 12.374 16.1538 12.375ZM26.5385 15.399C25.7929 15.6332 25.0141 15.7516 24.2308 15.75V27H26.5385V15.399Z" fill="white"/>
                    </svg>
                    Cat Survey
                </button>
                <button onClick={() => navigate('/dogform')} className="flex flex-row align-center justify-center gap-2 bg-orange-400 text-white rounded p-3 font-bold shadow-md">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_106_4)">
                        <path d="M22.9327 3L22.6443 3.70848L19.4713 11.64H10.6009C9.57985 11.6355 8.57883 11.905 7.71637 12.4165L4.94032 9.7824L3.28 11.3376L6.09297 13.9361C5.66521 14.5732 5.39466 15.2915 5.30105 16.0389C5.20744 16.7862 5.29311 17.5437 5.55183 18.2561L6.38142 20.5176L5.29915 24.3311L5.26338 24.4661V30H7.57099V24.735L8.68902 20.7865L8.76056 20.4485L8.6521 20.145L7.71521 17.5465C7.61578 17.2518 7.56747 16.944 7.57214 16.635C7.56844 16.2617 7.64426 15.8915 7.79516 15.546C7.94606 15.2005 8.16901 14.8866 8.451 14.6226C8.73298 14.3587 9.06834 14.15 9.43747 14.0088C9.8066 13.8675 10.2021 13.7965 10.6009 13.8H19.8671L23.7254 17.3435V14.3076L21.6335 12.3841L24.0138 6.40956L24.3023 6.81456L24.6265 7.32108H26.7899L30.324 9.81912L29.3501 11.64H24.8792V17.985L23.7969 21.023L23.7254 21.1915V24.735L24.8792 29.055V30H27.1868V28.785L26.033 24.465V21.495L27.1152 18.457L27.1868 18.2885V13.8H30.7924L33.28 9.14196L32.4873 8.60196L27.5837 5.16H25.9245L24.8076 3.50652L24.4811 3H22.9327ZM11.2862 19.2L9.87975 24.465V30H12.1873V24.735L13.0885 21.36H14.1707C14.5757 21.6127 16.0099 22.44 17.9564 22.44H19.1102V24.735L20.264 29.055V30H22.5716V28.785L21.4178 24.465V20.28H17.9564C16.7299 20.28 15.1434 19.3685 15.1434 19.3685L14.8549 19.2H11.2862Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_106_4">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    Dog Survey
                </button>
            </div>
        </div>
    )
}
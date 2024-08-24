import React from 'react';
import PropTypes from 'prop-types';
import { IoCloseOutline } from "react-icons/io5";
import Krisha from "./images/krisha.jpg" 

const Modal = ({ close }) => {
    return (
        <>
            <section className='absolute top-0 h-full w-full bg-black/60 flex justify-center items-center'>
                <article className='bg-pink-primary h-110 w-130 rounded-lg shadow-xl p-7 flex flex-col'>
                    <aside className='bg-green-primary p-2 rounded-md self-end border-2 border-black cursor-pointer' onClick={close}>
                        <IoCloseOutline className='text-3xl' />
                    </aside>
                    <article className='flex h-full w-full max-h-full'>
                        <aside className='flex-1 h-full max-h-full bg-black flex justify-center'>
                            <img className='h-64' src={Krisha} alt="Picture of Krisha" />
                        </aside>
                        <article className='flex-1'>
                            <h1>Happy Birthday Darling &#60;3</h1>
                            <p></p>
                        </article>
                    </article>

                </article>
                

            </section>
        </>
    )
}

Modal.propTypes = {
    close: PropTypes.func.isRequired
}

export default Modal
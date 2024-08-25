import React from 'react';
import PropTypes from 'prop-types';
import { IoCloseOutline } from "react-icons/io5";
import Krisha from "./images/krisha.jpg" 

const Modal = ({ close }) => {
    return (
        <>
            <section className='absolute top-0 h-full w-full bg-black/60 flex justify-center items-center p-8 overflow-hidden'>
                <article className='animate-reversesliding bg-pink-primary h-110 w-130 rounded-lg shadow-xl p-7 relative flex flex-col gap-3 max-lg:w-[90%] max-md:w-full max-md:h-full'>
                    <aside className='bg-green-primary p-2 rounded-md self-end border-2 border-black cursor-pointer hover:bg-green-300' onClick={close}>
                        <IoCloseOutline className='text-3xl'/>
                    </aside>
                    <article className='flex gap-2 h-full w-full max-lg:flex-col'>
                        <aside className='flex-1 h-full flex justify-center'>
                            <img className='h-100 rounded-md max-lg:rounded-full max-lg:h-80' src={Krisha} alt="krisha"/>
                        </aside>
                        <article className='flex-1 max-lg:flex max-lg:items-center max-lg:flex-col'>
                            <h1>Happy Birthday Darling &#60;3</h1>
                            <p>h</p>
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
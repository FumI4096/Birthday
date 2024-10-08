import React from 'react'
import { useState } from 'react'
import Modal from "./Modal"

const Page = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <main className='overflow-hidden'>
            <article className='h-100 bg-violet-secondary flex justify-center items-center'>
                <section className='animate-sliding text-8xl text-white font-qwitcher-grypen font-[700] drop-shadow-md text-center px-8 relative'>Happy Birthday Krisha!</section>
            </article>
            <aside className='h-[26.95rem] bg-violet-primary flex justify-center items-center'>
                <button className='animate-reversesliding font-jost text-2xl bg-blue-300 h-24 w-64 rounded-full animation border-4 border-[#304674]  shadow-thick relative active:top-[15px] active:shadow-none' onClick={() => {setToggle(true)}}>Click me</button>
            </aside>
            {toggle && (
                <Modal 
                    close = {() => {setToggle(false)}}
                />
            )}
        </main>
    )
}

export default Page

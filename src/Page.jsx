import React from 'react'
import { useState } from 'react'

const Page = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <main className=''>
            <article className='h-100 bg-violet-secondary flex justify-center items-center'>
                <section className='text-8xl text-white font-qwitcher-grypen font-[700] drop-shadow-md'>Happy Birthday Krisha!</section>
            </article>
            <aside className='h-[26.95rem] bg-violet-primary grid place-items-center'>
                <button className='font-jost text-2xl bg-blue-300 h-24 w-64 rounded-full animation border-4 border-[#304674]  shadow-thick relative active:top-[15px] active:shadow-none' onClick={() => {setToggle(true); console.log(toggle)}}>Click me</button>
            </aside>

            {toggle && (
                <>
                    <section className='absolute top-0 h-full w-full bg-black/60 flex justify-center items-center flex-col'>
                        <article className='bg-pink-300 h-20'>Hello</article>
                    
                        <button onClick={() => {setToggle(false)}}>click again</button>
                    </section>

                </>
            )}
        </main>
    )
}

export default Page

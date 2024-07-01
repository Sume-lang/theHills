import React, { useState, useEffect } from 'react'

export default function NavigationsBar() {
    return (
        <header className='sticky top-0 z-10 h-[100px] w-full flex flex-row items-center justify-between bg-sky-900 shadow-md p-4'>
            <div className='w-1/6'><h1 className='text-white text-4xl font-extrabold'>LOGO</h1></div>

        </header>
    )
}
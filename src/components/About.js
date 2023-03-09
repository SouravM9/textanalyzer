import React from 'react'

export default function About({mode}) {
  return (
    <div className='container my-5'>
      <h1 className={`text-${mode === 'dark' ? 'light' : 'dark'}`}>About Us</h1>
      <p className={`text-${mode === 'dark' ? 'light' : 'dark'}`}>This is a web application which is used to convert lowercase to uppercase and vice-versa. This can also be used to remove extra spaces, clear text, copy text and provides an analysis of word, sentence and character count.</p>
    </div>
  )
}

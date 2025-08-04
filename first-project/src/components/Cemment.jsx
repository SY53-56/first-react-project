import React, { useState } from 'react';

export default function App() {
  const [submittedData, setSubmittedData] = useState(null);

  function handleData(evt) {
    evt.preventDefault();
    const form = evt.target;
    const commentValue = form.elements.comment.value;
    const rangeValue = form.elements.range.value;

    // Store submitted data
    setSubmittedData({
      comment: commentValue,
      range: rangeValue,
    });

    form.reset();
  }
  

  return (
    <>
      <form onSubmit={handleData} className='w-[300px] border rounded-xl h-[300px] px-6 py-2'>
        <input
          type="text"
          name="comment"
          className='mt-2 border px-4 py-2 w-full'
          placeholder='Comment'
        />
        <input
          type="range"
          name="range"
          min="0"
          max="5"
          className='w-full my-4'
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Post</button>
      </form>

      <div className='w-[200px] mt-4'>
        {submittedData && (
          <>
            <h2 className='font-bold'>Posted Comment:</h2>
            <p>{submittedData.comment}</p>
            <p>Rating: {submittedData.range}</p>
          </>
        )}
      </div>
    </>
  );
}


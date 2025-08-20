import React,{useState} from 'react'

export default function Form({onSubmit}) {
  const [formData , setFormData] = useState({
    userName: "",
    email: "",
    textArea: ""
  });
  
  function handleValue(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.userName === "" || formData.email === "") {
      alert("please fill the form");
      return;
    }
    onSubmit({ ...formData });
    setFormData({ userName: "", email: "", textArea: "" });
  }

  return (
    <form onSubmit={handleSubmit} className='w-[300px] px-3 py-2 shadow-2xl'>
      <div className='flex flex-col justify-center items-center gap-2 w-full'>
        <input 
          type="text" 
          name='userName' 
          id='username'
          onChange={handleValue} 
          value={formData.userName} 
          placeholder='username' 
          className='px-2 py-1 border rounded'
        />
        <input 
          type="email" 
          name="email" 
          id='email' 
          onChange={handleValue} 
          placeholder='email' 
          value={formData.email} 
          className='px-2 py-1 border rounded' 
        />
        <textarea 
          name="textArea" 
          onChange={handleValue} 
          rows={5} 
          cols={25} 
          id="textarea" 
          placeholder='text your thought' 
          value={formData.textArea} 
          className='border rounded'
        ></textarea>
        <button 
          type='submit'
          className='px-4 py-2 bg-orange-600 text-white cursor-pointer rounded-lg transition duration-500 hover:bg-orange-700'>
          submit
        </button>
      </div>
    </form>
  );
}


import { useForm, ValidationError } from '@formspree/react';
import './contact.css'
import Lottie from "lottie-react";
import doneAnimation from '../../../public/anmation/done.json';
import contactAnimation from '../../../public/anmation/contact.json';
import React, {useEffect} from 'react'

function Contact() {
   const [state, handleSubmit] = useForm("mkgzzvwo");

    useEffect(() => {
     if (state.succeeded) {
       setTimeout(() => {
         window.location.reload(); // اعمل ريفرش بعد ثانيتين
       }, 2000);
     }
   }, [state.succeeded]);
   
  return (
    <section className='contact' id='Contact'>
      <h1 className='contact-title'>
        <span className='icon-envelope'></span>
        Contact Us
      </h1>
      <p className='subtitle'>Contact us for more information and get notified of our latest projects</p>

      <div className="flex" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <form onSubmit={handleSubmit}>
         <div style={{display: 'flex'}} className='input-group'>
           <label htmlFor="email">Email Address</label>
          <input required type="email" name='email' placeholder="Enter your email" id='email' />
             <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
               />
         </div>


         <div style={{marginTop: '24px' ,display: 'flex'}} className='input-group'>
           <label htmlFor="message">Your Message</label>
           <textarea required name='message' placeholder="Enter your message" id='message' />
              <ValidationError 
                  prefix="Message" 
                  field="message"
                   errors={state.errors}
                 />
         </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? 'submitting...' : 'submit'}
          </button>
            {state.succeeded && ( 
              <p style={{fontSize: '16px',marginTop: '1.75rem' , display: 'flex', alignItems: 'center', gap: '2px'}}>
                <Lottie  loop={false} style={{height : '37px'}} animationData={doneAnimation} />
                Thank you for your message!
                </p>)}
        </form>

        <div className="animation">
                          <Lottie
                           className='contact-animation'
                           animationData={contactAnimation} 
                            style={{width: '355px', height: '355px'}}
                           />

                
        </div>
      </div>





    </section>
  )
}

export default Contact
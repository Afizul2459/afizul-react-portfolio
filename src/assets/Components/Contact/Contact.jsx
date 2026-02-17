import React, { useState } from 'react';
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show:false, message:"", type:"success" });

    const showToast = (msg,type="success")=>{
        setToast({show:true,message:msg,type});
        setTimeout(()=> setToast({show:false,message:""}),3000);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY_1);
        formData.append("from_name", "Portfolio Contact");
        try{
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                showToast("Message Sent Successfully 🎉");
                event.target.reset();
            } else {
                showToast("Something went wrong ❌","error");
            }
        }
        catch{
            showToast("Network error ❌","error");
        }

        setLoading(false);
    };

    return (
        <div id='contact' className='contact'>

            {/* TOAST */}
            {toast.show && (
                <div className={`toast ${toast.type}`}>
                    {toast.message}
                </div>
            )}

            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>

            <div className="contact-section">

                {/* LEFT */}
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Feel free to reach out for collaborations or projects.</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <MdEmail className='contact-icon' />
                            <p>Email: afizul2459@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <FaPhoneAlt className='contact-icon' />
                            <p>Phone: 01796044837</p>
                        </div>

                        <div className="contact-detail">
                            <FaLocationDot className='contact-icon' />
                            <p>Mirpur, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={onSubmit} className='contact-right'>

                    <label>Your Name</label>
                    <input type="text" name="name" required />

                    <label>Your Email</label>
                    <input type="email" name="email" required />

                    <label>Your Message</label>
                    <textarea name="message" rows="8" required></textarea>

                    <button 
                        type="submit" 
                        className="contact-submit"
                        disabled={loading}
                    >
                        {loading ? <span className="spinner"></span> : "Submit Now"}
                    </button>

                </form>

            </div>
        </div>
    );
};

export default Contact;

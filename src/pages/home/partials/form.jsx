import React from 'react';
import emailjs from '@emailjs/browser'


const Form = () => {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_qx7729v', 'template_787cvqd', e.target, 'mIKI9raxt1ulbcbid')
    }

    return (
        <>
            <div className="form-container">
                <div className="form-wrapper">
                    <form action="https://formbold.com/s/forM_ID" method="POST" onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                id="name"
                                placeholder="Full Name"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="number"
                                placeholder="Phone Number"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                id="email"
                                placeholder="example@domain.com"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="form-label">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="from_subject"
                                id="subject"
                                placeholder="Enter your subject"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                className="form-textarea"
                            ></textarea>
                        </div>
                        <div>
                            <button className="form-button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
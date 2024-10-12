import React, { useState } from 'react';
import Styles from '../styles/Contact.module.css';
import ButtonStyle from '../styles/Button.module.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  const validateForm = () => {
    let formErrors = {};

    if (fullName.length < 3) {
      formErrors.fullName = 'Full name must be at least 3 characters.';
    }

    if (subject.length < 3) {
      formErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!validateEmail(email)) {
      formErrors.email = 'Please enter a valid email address.';
    }

    if (body.length < 3) {
      formErrors.body = 'Body must be at least 3 characters.';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  function onFormSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      const info = {
        fullName,
        subject,
        email,
        body,
      };

      console.log('Form data:', info);
      alert("Your message is sendt!");

      setFullName('');
      setSubject('');
      setEmail('');
      setBody('');
      setErrors({});
    }
  }

  function input(event) {
    const value = event.target.value;
    if (event.target.name === 'full-name') {
      setFullName(value);
    }
    if (event.target.name === 'subject') {
      setSubject(value);
    }
    if (event.target.name === 'email') {
      setEmail(value);
    }
    if (event.target.name === 'body') {
      setBody(value);
    }
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="full-name"
          value={fullName}
          placeholder="Your full name"
          onChange={input}
          autoComplete="name"          
        />
        {errors.fullName && <p className={Styles.error}>{errors.fullName}</p>}

        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          value={subject}
          placeholder="Subject"
          onChange={input}
          
        />
        {errors.subject && <p className={Styles.error}>{errors.subject}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={email}
          placeholder="Your email"
          onChange={input}
          autoComplete="email"
        />
        {errors.email && <p className={Styles.error}>{errors.email}</p>}

        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          value={body}
          placeholder="Your message"
          onChange={input}
          
        />
        {errors.body && <p className={Styles.error}>{errors.body}</p>}
        <div className={ButtonStyle.buttonsDiv}>
        <button className={ButtonStyle.callToAction} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

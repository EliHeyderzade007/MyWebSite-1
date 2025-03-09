import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import vCards from 'vcards-js';
import './App.css';

function App() {
  let date = new Date;
  let year = date.getFullYear()
  const UserAbout = {
    photo: '/img.png',
    one: { name: 'Samire', surname: 'Haydarova' },
    two: { head: 'University', text: 'Azerbaijan Medical University' },
    three: { head: 'Number:', text: '+994(55)-712-22-60' },
    four: {head: 'G-mail:', text: 'samireheyderov43@gmail.com'},
    five: { head: 'Age:', text: `${date.getMonth() <= 12 ? year-2002-1 :year-2002}` },
    six: { head: 'Brithday:', text: '22/12/2002' },
  }
console.log(UserAbout.five.text);
  const UserLinks = {
    Phone: 'tel:+994557122260',
    Whatsapp: 'https://wa.me/+994557122260',
    Telegram: 'https://t.me/samireheyderova777',
    Mail: 'mailto:samireheyderov43@gmail.com',
    Instagram: 'https://www.instagram.com/samiraheydarova_777',
    Facebook: '',
    Linkedin: 'https://www.linkedin.com/in/samire-heyderova-009723281/',
    Tiktok: ''
  }

  const [resize, setResize] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  const ResetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const Inputs = () => {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(e => {
      let placeholder = e.placeholder;
      e.addEventListener('focus', () => {
        e.placeholder = '';
      })
      e.addEventListener('blur', () => {
        e.placeholder = placeholder;
      })
      let st_left = e.parentElement.parentElement.children[0].children[0];
      e.style.paddingLeft = `${st_left.offsetWidth + 5}px`
    })
  }

  const Resize = () => {
    window.addEventListener('resize', () => {
      setResize(`${window.innerWidth}px`)
    })
  }

  const downloadTxtFile = (vcfText) => {
    const element = document.createElement('a');
    const file = new Blob([vcfText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'SamiraHaydarova.vcf';
    document.body.appendChild(element);
    element.click();
  };

  const CreateVCard = () => {
    const vCard = vCards();
    vCard.firstName = 'Samirə';
    vCard.lastName = 'Heydərova';
    vCard.cellPhone = '+99455-712-22-60';
    vCard.title = 'Doctor';
    vCard.url = 'https://www.instagram.com/samiraheydarova_777';
    return vCard.getFormattedString();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_5173', 'template_2272', e.target, {
        publicKey: 'zXyBEeDoESnkExPZo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          ResetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  useEffect(() => {
    document.querySelector('.container').style.height = `${window.innerHeight}px`

    Inputs();
    Resize();
    return () => {
      window.removeEventListener('resize', Resize);
    };
  }, []);

  return (
    <div className='container'>
      <div className="blur"></div>

      <div className="section-all">

        <div className="section-one">
          <div className="s-one-left">
            <div className="img"></div>
            <img className='img' src={UserAbout.photo} alt="" />
          </div>
          <div className="s-one-right">
            <div className="use-fullName">Name: DR. {UserAbout.one.name} {UserAbout.one.surname}</div>
            <div className="user-about">
              <p className="about-text"><span className='ab-head'>{UserAbout.two.head}:</span> {UserAbout.two.text}</p>
              <p className="about-text"><span className='ab-head'>{UserAbout.three.head}</span> <span className='number'>{UserAbout.three.text}</span></p>
              <p className="about-text"><span className='ab-head'>{UserAbout.four.head}</span> <span className='number'>{UserAbout.four.text}</span></p>
              <a href="" onClick={() => downloadTxtFile(CreateVCard())} className="vcard">Save Contact</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="section-two">
          <div className="s-two-label">Contact:</div>

          <div className="s-two-contact">
            <a href={UserLinks.Phone} target='_blank' className="social-links phone" title='WhatsApp'>
              <img className='sl-imgs phone-svg' src="/phone.jpg" alt="" />
            </a>
            <a href={UserLinks.Whatsapp} target='_blank' className="social-links wp" title='Gmail'>
              <img className='sl-imgs wp-svg' src="/whatsapp.jpg" alt="" />
            </a>
            <a href={UserLinks.Telegram} target='_blank' className="social-links tg" title='Instagram'>
              <img className='sl-imgs tg-svg' src="/telegram.jpg" alt="" />
            </a>
            <a href={UserLinks.Mail} target='_blank' className="social-links email" title='Telegram'>
              <img className='sl-imgs email-svg' src="/email.jpg" alt="" />
            </a>
          </div>
        </div>
        <hr />
        <div className="section-three">
          <form className="s-three-form" onSubmit={sendEmail}>
            <div className="s-three-top">
              <div className="stt-left">
                <label
                  htmlFor="name"
                  className="label label-first">Name:</label>
              </div>
              <div className="stt-right">
                <input
                  type="text"
                  className="input input-name"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="s-three-center">
              <div className="stc-left">
                <label
                  htmlFor="email"
                  className="label label-second">Email:</label>
              </div>
              <div className="stc-right">
                <input
                  type="email"
                  className="input input-email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="s-three-bottom">
              <div className="stb-left">
                <label
                  htmlFor="message"
                  className="label label-third">Message:</label>
              </div>
              <div className="stb-right">
                <input
                  type="text"
                  className="input input-message"
                  name="message"
                  id="message"
                  placeholder="Enter Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="s-three-btn">
              <button
                className="st-button"
                type="submit">Send</button>
            </div>
          </form>
        </div>
        <hr />
        <div className="section-four">
          <div className="s-four-label">Sosial Network:</div>

          <div className="s-four-network">
            <div className="sfn-top">
              <a href={UserLinks.Instagram} target='_blank' className="social-links insta" title='Instagram'>
                <img className='sl-imgs mail-svg' src="/instagram.png" alt="" />
              </a>
              <a href={UserLinks.Facebook} target='_blank' className="social-links fb" title='Facebook'>
                <img className='sl-imgs wp-svg' src="/facebook.jpg" alt="" />
              </a>
              <a href={UserLinks.Linkedin} target='_blank' className="social-links in" title='LinkEdin'>
                <img className='sl-imgs tg-svg' src="/linkedin.jpg" alt="" />
              </a>
              <a href={UserLinks.Tiktok} target='_blank' className="social-links tt" title='Tiktok'>
                <img className='sl-imgs insta-svg' src="/tiktok.jpg" alt="" />
              </a>
            </div>
            {/* <div className="sfn-bottom">
            <a href="" target='_blank' className="social-links wp" title='WhatsApp'>
            <img className='sl-imgs mail-svg' src="/phone.jpg" alt="" />
          </a>
          <a href="" target='_blank' className="social-links mail" title='Gmail'>
            <img className='sl-imgs wp-svg' src="/whatsapp.svg" alt="" />
            </a>
          <a href="" target='_blank' className="social-links insta" title='Instagram'>
          <img className='sl-imgs tg-svg' src="/telegram.svg" alt="" />
          </a>
          <a href="" target='_blank' className="social-links tg" title='Telegram'>
            <img className='sl-imgs insta-svg' src="/email.jpg" alt="" />
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

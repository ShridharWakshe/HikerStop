// import React from 'react';
// import './Footer.css';
// // import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import Feedback from './Feedback'

// function Footer() {

//   const {submitFeedback, handleChangeValue,data} = Feedback();

//   return (
//     <div className='footer-container'>
//       <section className='footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Join the Adventure to receive our best vacation deals
//         </p>
//         <p className='footer-subscription-text'>
//           You can unsubscribe at any time.
//         </p>
//         <div className='input-areas'>
//           <form onSubmit={submitFeedback}>
//             <label for='name' className='label-area-name'>Your Name :</label>
//             <br/>
//             <input
//               className='footer-input'
//               name='name'
//               type='text'
//               placeholder='Enter your name'
//               value={data.name}
//               onChange={handleChangeValue}
//             />
//             <br/>
//             <label for='rating' className='label-area'>Rating (out of 5) :</label>
//             <br/>
//             <input
//               className='footer-input'
//               name='rating'
//               type='number'
//               placeholder='Give rating out of 5'
//               value={data.rating}
//               onChange={handleChangeValue}
//             />
//             <br/>
//             <label for='comment'  className='label-area-comment'>Feedback :</label>
//             <br/>
//             <textarea
//               rows='7' 
//               cols='50'
//               className='comment'
//               name='comment'
//              // type='text'
//               form='usrform'
//               placeholder='Give your feedback here'
//               value={data.comment} 
//               onChange={handleChangeValue}
//             ></textarea>
//             <br/>
//             <br/>
//             {/* <br/> */}
//             <button className='fed-btn' buttonStyle='btn--outline'  >Submit Feedback</button>
//           </form>
//         </div>
//       </section>
//       <div class='footer-links'>
//         <div className='footer-link-wrapper'>
//           <div class='footer-link-items'>
//             <h2>About Us</h2>
//             <Link to='/sign-up'>How it works</Link>
//             <Link to='/'>Testimonials</Link>
//             <Link to='/'>Careers</Link>
//             <Link to='/'>Investors</Link>
//             <Link to='/'>Terms of Service</Link>
//           </div>
//           <div class='footer-link-items'>
//             <h2>Contact Us</h2>
//             <Link to='/'>Contact</Link>
//             <Link to='/'>Support</Link>
//             <Link to='/'>Destinations</Link>
//             <Link to='/'>Sponsorships</Link>
//           </div>
//         </div>
//         <div className='footer-link-wrapper'>
//           <div class='footer-link-items'>
//             <h2>Videos</h2>
//             <Link to='/'>Submit Video</Link>
//             <Link to='/'>Ambassadors</Link>
//             <Link to='/'>Agency</Link>
//             <Link to='/'>Influencer</Link>
//           </div>
//           <div class='footer-link-items'>
//             <h2>Social Media</h2>
//             <Link to='/'>Instagram</Link>
//             <Link to='/'>Facebook</Link>
//             <Link to='/'>Youtube</Link>
//             <Link to='/'>Twitter</Link>
//           </div>
//         </div>
//       </div>
//       <section class='social-media'>
//         <div class='social-media-wrap'>
//           <div class='footer-logo'>
//             <Link to='/' className='social-logo'>
//               HKSP
//               <i class='fab fa-typo3' />
//             </Link>
//           </div>
//           <small class='website-rights'>HKSP © 2022</small>
//           <div class='social-icons'>
//             <Link
//               class='social-icon-link facebook'
//               to='/'
//               target='_blank'
//               aria-label='Facebook'
//             >
//               <i class='fab fa-facebook-f' />
//             </Link>
//             <Link
//               class='social-icon-link instagram'
//               to='/'
//               target='_blank'
//               aria-label='Instagram'
//             >
//               <i class='fab fa-instagram' />
//             </Link>
//             <Link
//               class='social-icon-link youtube'
//               to='/'
//               target='_blank'
//               aria-label='Youtube'
//             >
//               <i class='fab fa-youtube' />
//             </Link>
//             <Link
//               class='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='Twitter'
//             >
//               <i class='fab fa-twitter' />
//             </Link>
//             <Link
//               class='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='LinkedIn'
//             >
//               <i class='fab fa-linkedin' />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;
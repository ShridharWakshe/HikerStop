import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import Enquiry from './Enquiry'
import Navbar from './Navbarhome';
import "./About.css"
import Footer from './Footer';

function AboutUs() {

  const {submitEnquiry, handleChangeValue,data} = Enquiry();
    
     return (
      <div>
      
        <div className="about-info">
            <Navbar/>
            <h1>Hikers Journey</h1>
            <article className="article">	It is a platform for travel enthusiasts.
                Bring out your passion and love for travel. 
                Connect with travel lovers, share your experiences and inspire others.Trekking is an outdoor activity of walking for more than a day. It is a form of walking, undertaken with the specific purpose of exploring and enjoying the scenery. Trekking could be a motive, It could be a commitment, an aim, an objective, a mission, a party, a social gathering. It could be a place where you find friends, and it could be a journey. It could be a slightest chance to save our future generation from losing the nature lovers, mother earth holding within. It can be shortened or extended as per the desire of trekkers.
                Trekking is more challenging than hiking since it tests one's ability, endurance and their mental as well as psychological capacity. There are many different ways to do a trek and trekking culture often varies from country to country. It usually takes place on trails in areas of relatively unspoiled wilderness.
In Nepal, trekking is very popular among national and international tourist due to the privilege of being in the home of Himalayas. Most of the famous trekking areas make an amazing experience of the Himalaya.Most of the people they want to trek in the Mountain side of the area here you will see the most of the trekking area and more detail of the Nepal trekking for foreign and local tourist </article>
         
            <center>
          
          
               
  
        <div className='submit'>
        <h1 className='h1'>Enquiry Now</h1><br></br>
          <form onSubmit={submitEnquiry}>
          <label for='fullname'  className='lfullname'>Fullname :</label>
            <br/>
            <input
              className='fullname'
              name='fullname'
              type='text'
              placeholder='Type your name here'
              value={data.fullname} 
              onChange={handleChangeValue}
            />
            <br/>
            <label for='phone' className='lphone'>Phone :</label>
            <br/>
            <input
              className='phone'
              name='phone'
              type='number'
              placeholder='Enter mobile number'
              value={data.phone}
              onChange={handleChangeValue}
            />
            <br/>
            <label for='emailid'  className='lemailid'>Email_id :</label>
            <br/>
            <input
              className='emailid'
              name='emailid'
              type='text'
              placeholder='Type emailid here'
              value={data.emailid} 
              onChange={handleChangeValue}
            />
            <br/>
            <label for='message'  className='lmessage'>Message :</label>
            <br/>
            <textarea
              rows='7' 
              cols='50'
              className='message'
              name='message'
              form='usrform'
              placeholder='Type your query'
              value={data.comment} 
              onChange={handleChangeValue}
            ></textarea>
            <br/>
            {/* <br/> */}
            <button className='button1' buttonStyle='btn--outline'  >Submit </button>
          </form>
          </div>
        
        
            </center>
          </div>
     
    
      </div>
      
  )
  
         
        
       
    
}
export default AboutUs
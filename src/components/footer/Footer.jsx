import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='leftFooter'>
        <div className='leftFooterSocial'>
          <img
            src='/assets/images/open-book.svg'
            alt='open-book'
            className='open-book'
          />
          <h4 className='leftFooterText'>9IJAKIDS</h4>
        </div>
        <div className='leftFooterDiv'>
          <i className='fas fa-map-marker-alt icon' />
          <h4 className='leftFooterText2'>9ijakids Lane, Lagos</h4>
        </div>
        <div className='leftFooterDiv'>
          <i className='fas fa-envelope icon'></i>
          <h4 className='leftFooterText2'>9ijakids@test.com</h4>
        </div>
        <div className='leftFooterDiv phone'>
          <i className='fas fa-phone icon'></i>
          <h4 className='leftFooterText2'>phone 9ijakids</h4>
        </div>
      </div>
      <div className='rightFooter'>
        <div className='rightFooter1'>
          <h2 className='qlink1'>Community</h2>
          <ul className='footer-ul'>
            <li className='footer-li'>Learners</li>
            <li className='footer-li'>Partners</li>
            <li className='footer-li'>Developers</li>
            <li className='footer-li'>Better Testers</li>
            <li className='footer-li'>Translators</li>
            <li className='footer-li'>Blog</li>
            <li className='footer-li'>Tech Blog</li>
            <li className='footer-li'>Teaching Center</li>
          </ul>
        </div>
        <div className='rightFooter2'>
          <h2 className='qlink2'>Informations</h2>
          <ul className='footer-ul'>
            <li className='footer-li'>About</li>
            <li className='footer-li'>Pricing</li>
            <li className='footer-li'>Blog</li>
            <li className='footer-li'>Career</li>
            <li className='footer-li'>Contact</li>
            <li className='footer-li'>Blog</li>
          </ul>
        </div>
        <div className='rightFooter3'>
          <h2 className='qlink3'>More</h2>
          <ul className='footer-ul'>
            <li className='footer-li'>Press</li>
            <li className='footer-li'>Investors</li>
            <li className='footer-li'>Terms</li>
            <li className='footer-li'>Privacy</li>
            <li className='footer-li'>Help</li>
            <li className='footer-li'>Contact</li>
            <li className='footer-li'>Articles</li>
            <li className='footer-li'>Directory</li>
            <li className='footer-li'>Accessibility</li>
            <li className='footer-li'>Affiliates</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

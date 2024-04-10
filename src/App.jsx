
import './App.css'

import Carousel from './components/Carousel'

function App() {

  return (
    <div className='app'>
      <header>
        <div className='logo'>
          <h1>Logotipo</h1>
        </div>
        <div className='h-button'>
          <button>Get started free</button>
        </div>

      </header>

      <section className='section1'>
        <div className='s1-text'>
          <h1>Demand more from your marketing, not your budget.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div>
            <button>Get started free</button>
          </div>

        </div>
        <div><img src="https://www.hubspot.com/hs-fs/hubfs/2023_MarketingHub_Email%201.webp?width=596&height=644&name=2023_MarketingHub_Email%201.webp" alt="" /></div>
      </section>

      <section className='section2'>
        <h2>194,000+ customers in over 120 countries grow their businesses with us</h2>
        <div><Carousel /></div>
      </section>


      <section className='section3'>
        <div className='square'>
          <div>
            <img src="https://www.hubspot.com/hs-fs/hubfs/CRM_Capture-leads.png?width=567&height=425&name=CRM_Capture-leads.png" alt="" />
          </div>
          <div>
            <h2>Capture every qualified lead.</h2>
            <p>Add contact forms and pop-ups with ease - no coding required.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <a href="">Get started</a></p>
          </div>
        </div>

        <div className='square'>
          <div>
            <h2>See who leads are and what they're doing</h2>
            <p>When a lead submits a form, additional contact info from across the web is pulled in automatically, including job title and social profiles.
            </p>
            <p>You’ll see how they arrived and what they viewed even before they filled out your form. And when they come back, tracking picks up where it left off.</p>
            <p>Every activity is logged in a tidy timeline, so you know exactly where a lead is and what they're interested in. <a href="">Get started</a></p>
          </div>
          <div>
            <img src="https://www.hubspot.com/hs-fs/hubfs/CRM_Manage-and-organized-contacts.png?width=567&height=425&name=CRM_Manage-and-organized-contacts.png" alt="" />
          </div>
        </div>

        <div className='square'>
          <div>
            <img src="https://www.hubspot.com/hs-fs/hubfs/MarketingHub_Traffic-analytics.png?width=567&height=361&name=MarketingHub_Traffic-analytics.png" alt="" />
          </div>

          <div>
            <h2>Analyze and improve your conversions.</h2>
            <p>Built-in analytics make it easy to learn which pages, offers, and traffic sources are driving the most conversions.</p>
            <p>See how many times leads visit before they buy, spot trends in how visitors navigate your site, and use those insights to drive more conversions. <a href="">Get started</a></p>
          </div>

        </div>

        <div className='square'>
          <div>
            <h2>Start turning visitors into leads today.</h2>
            <p>See how visitors interact with your site and turn more of them into paying customers.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <a href="">Get started</a></p>
          </div>
          <div>
            <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/email-tracking/email-notification-en-sui.webp?width=567&height=360&name=email-notification-en-sui.webp" alt="" />
          </div>
        </div>
      </section>


      <section className='section5'>
        <div>
          <h2>Start turning visitors into leads today</h2>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
          <p>
            <button>Get started free</button>
          </p>

          <span>Sets up in seconds, and works with any website.</span>

        </div>
        <div>
          <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_1.png?width=340&name=_cta_contentblock_headshots_headshot_1.png" alt="" />
        </div>

      </section>
      <footer>
        <h4>Copyright © 2024 HubSpot, Inc.</h4>
        <ul>
          <li>Legal Stuff</li>
          <li>Privacy Policy</li>
          <li>Security</li>
          <li>Website Accessiblility</li>
          <li>Manage Cookies</li>
        </ul>
      </footer>
    </div>
  )
}

export default App

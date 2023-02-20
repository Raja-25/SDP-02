import React from 'react'
import Slider from '../ImageGallery/Slider'
import './Styles/Homestyle.css'
export default function Home() {
  return (
    <div>
      <Slider />
      <div className="home-container-portfolio">
        <h1>Welocme to Autobots</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem maiores autem voluptatibus saepe quod illo vitae repellendus ex at inventore deleniti, dolore ducimus, nam libero expedita eius vero sunt odio.
          Tenetur ducimus doloribus, totam deleniti temporibus voluptas, laudantium eos maiores dolore nesciunt, beatae impedit iure labore eligendi laborum consequuntur quaerat ullam veritatis. Error deserunt quas temporibus dolorum dolores incidunt in.
          Ipsa rem explicabo optio corporis incidunt voluptates neque animi, nam sint, rerum nulla minima distinctio pariatur voluptate minus quae commodi consequatur error quibusdam totam fugit. Blanditiis, doloribus. Ab, suscipit a.
          Enim velit soluta saepe cumque, provident illum ducimus tempore voluptatum, nisi molestias minima cupiditate omnis temporibus, dignissimos tenetur voluptates dolorum ab adipisci blanditiis nam ipsa possimus amet. Laudantium, eum dolorem.
        </p>
      </div>


      <div class="home-container-portfolio faqsautobot" id='faqsautobot'>
        <h1>Frequently Asked Questions</h1>
        <div class="faq-question">
          <input id="q1" type="checkbox" class="panel" />
          <div class="plus">+</div>
          <label for="q1" class="panel-title">Will I get an appointment at my preferred date & time?</label>
          <div class="panel-content">Our workshops are resuming operations in line with regional advisories. 
          We'll be doing our best to attend to all vehicles, although with reduced staff on duty to
           ensure physical distancing. We would request you to check appointment slots availability on
            the With You Hamesha app or get in touch with your dealership to set up an appointment.</div>
        </div>

        <div class="faq-question">
          <input id="q2" type="checkbox" class="panel" />
          <div class="plus">+</div>
          <label for="q2" class="panel-title">How does Autobots handle customer feedback?</label>
          <div class="panel-content">Autobots has always been a customer-centric company. We value your feedback and strive to address your concerns and feedback with speed and empathy and in a fair and transparent manner.</div>
        </div>

        <div class="faq-question">
          <input id="q3" type="checkbox" class="panel" />
          <div class="plus">+</div>
          <label for="q3" class="panel-title">How can I send feedback on my experience with a dealer or an individual ?</label>
          <div class="panel-content">You can send your feedback through telephone or email or through the Queries & Feedback
           Section of this website or through a feedback form available at all our dealer showrooms and workshops.</div>
        </div>

        <div class="faq-question">
          <input id="q4" type="checkbox" class="panel" />
          <div class="plus">+</div>
          <label for="q4" class="panel-title">
How long will it take for my communication to be responded to ?</label>
          <div class="panel-content">Our Customer Care team shall endeavor to reply to you within 1 working day.</div>
        </div>

        <div class="faq-question">
          <input id="q5" type="checkbox" class="panel" />
          <div class="plus">+</div>
          <label for="q5" class="panel-title">Returns and Refunds</label>
          <div class="panel-content">Autobots provides you easy option of return and refund if you are not satisfied with your order. 
          Below are some useful links to get more information on the common issues around return.
           Please note, items can only be returned during the return period.</div>
        </div>

        <div class="faq-question">
          <input id="q6" type="checkbox" class="panel" />
          <div class="plus">+</div>
          <label for="q6" class="panel-title">What does a Autobots warranty cover?</label>
          <div class="panel-content"> The costs of repairing or replacing the factory fitted mechanical & electrical
           components of your vehicle that have suffered sudden failure (including as a result of water ingress of a covered part)
            during the period of cover.</div>
        </div>
      </div>


      {/* Social */}
      <main>
        <div className="wrapper">
          <a href="/" className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span><i className="fab fa-facebook-f"></i></span>
          </a>
          <a href="/" className="icon twitter">
            <div className="tooltip">Twitter</div>
            <span><i className="fab fa-twitter"></i></span>
          </a>
          <a href="/" className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span><i className="fab fa-instagram"></i></span>
          </a>
          <a href="/" className="icon github">
            <div className="tooltip">Github</div>
            <span><i className="fab fa-github"></i></span>
          </a>
          <a href="/" className="icon youtube">
            <div className="tooltip">Youtube</div>
            <span><i className="fab fa-youtube"></i></span>
          </a>
        </div>
      </main>
    </div>
  )
}

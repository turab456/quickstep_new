export default function Contact() {
  return (
    <section className="location-section" id="contact" aria-label="Campus Location">
      <div className="container">
        <div className="location-wrapper">
          <iframe
            className="location-map-frame"
            title="Quickstep English Academy Campus Location in RT Nagar Bengaluru"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.279899320286!2d77.59258757577546!3d13.017849613840742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1657c7932c07%3A0x6a2dfa03b30646c0!2sQuickstep%20English%20Centre!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="location-transit-notes">
            <div className="location-transit-item">
              <i className="fas fa-map-pin" aria-hidden="true"></i>
              <span><strong>Landmark:</strong> 2nd Floor, Above Unilet Store, 80 Feet Road, P&T Colony</span>
            </div>

            <div className="location-transit-item">
              <i className="fas fa-bus" aria-hidden="true"></i>
              <span><strong>Transit:</strong> 3-minute walk from RT Nagar Bus Depot / Post Office</span>
            </div>

            <div className="location-transit-item">
              <i className="fas fa-square-parking" aria-hidden="true"></i>
              <span><strong>Accessibility:</strong> Elevator available & street two-wheeler parking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact(){
    return(
        <div className="">
<div className="site-wrapper">
        <nav aria-label="breadcrumb" className="breadcrumb-wrapper">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </div>
      </nav>
      <div className="gogle_map section-padding-top">
      <iframe id="googleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd">
      </iframe>
    </div>
    <section className="contact-page-section overflow-hidden">
    <div className="row">
      <div className="col-md-6">
        <div className="ct-single-side">
          <div className="ct-section-title">
            <h2>TELL US YOUR PROJECT</h2>
          </div>
          <form action="https://htmldemo.net/petmark/petmark/php/mail.php" className="site-form " id="contact-form" >
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" name="firstName" id="firstName"  className="form-control" placeholder="First Name*"/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name*"/>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input type="email" name="email" id="email" className="form-control" placeholder="Email*"/>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Message*"></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="submit-btn">
                  <button type="submit" className="btn btn-black">Send Mail</button>
                </div>
              </div>
              <div className="form-messege"></div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6 bg-gray">
        <div className="ct-single-side">
          <div className="section-title mb--20">
            <h2>CONTACT US</h2>
          </div>
          <div className="contact-right-description">
            <article className="ct-article">
              <h3 className="d-none sr-only">blog-article</h3>
              <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
                littera
                gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
            </article>
            <ul className="contact-list mb--35">
              <li><i className="fas fa-fax"></i>Address : No 40 Baria Sreet 133/2 NewYork City</li>
              <li><i className="fas fa-phone"></i>0(1234) 567 890</li>
              <li><i className="far fa-envelope"></i>Info@roadthemes.com</li>
            </ul>
            <div className="working-hour">
              <h3>Working hours</h3>
              <p> <strong>Monday – Saturday</strong>: 08AM – 22PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

</div>
</div>
    )
}
export default Contact
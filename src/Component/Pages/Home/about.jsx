import React from 'react'

const About = ({img}) => {
  return (
    <>
    {/* <section className="background-color-gleeful-opacity d-flex justify-content-center align-items-center py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-sm-12">
              <div>
                <div className="josefin-sans-font-family-600 font-size-40 text-color-dark-ashy-blue">
                  About Us
                </div>
                <div className="inter-font-family-400 font-size-24 text-capitalize text-color-dark-ashy-blue py-4">
                  quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam
                  ultrices vehicula, lacus tincidunt id viverra nulla, dui. leo.
                  urna at, sit lacus faucibus placerat
                </div>
                <div className="inter-font-family-400 font-size-24 text-capitalize text-color-dark-ashy-blue">
                  sollicitudin. Sed placerat sapien placerat. Ut venenatis quam
                  felis, nisi viverra nisl. quis placerat.
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 py-3">
              <img src={img} alt="About Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section> */}
      <section className="background-color-gleeful-opacity d-flex justify-content-center align-items-center py-5">
  <div className="container">
    <div className="row d-flex align-items-center">
      {/* Text Column */}
      <div className="col-lg-7 col-md-6 col-sm-12 text-center text-md-start">
        <div>
          <h2 className="josefin-sans-font-family-600 heading-text font-size-40 text-color-dark-ashy-blue">
            About Us
          </h2>
          <p className="inter-font-family-400 font-size-24 text-capitalize heading-title text-color-dark-ashy-blue py-3">
            quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam ultrices
            vehicula, lacus tincidunt id viverra nulla, dui. leo. urna at, sit lacus
            faucibus placerat.
          </p>
          <p className="inter-font-family-400 font-size-24 heading-title text-capitalize text-color-dark-ashy-blue">
            sollicitudin. Sed placerat sapien placerat. Ut venenatis quam felis,
            nisi viverra nisl. quis placerat.
          </p>
        </div>
      </div>

      {/* Image Column */}
      <div className="col-lg-5 col-md-6 col-sm-12 text-center py-3">
        <img 
          src={img} 
          alt="About Us" 
          className="img-fluid rounded custom-img"
        />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About

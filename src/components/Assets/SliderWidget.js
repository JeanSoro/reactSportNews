import React from 'react'
import Slider from 'react-slick'

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const slidesTemplates = (slides) => (
  slides ?
    <Slider {...settings}>
      {slides.map(slide => (
        <div key={slide.id}>
          <div className="item_slider"
            style={{
              background: `url(/images/covers/${slide.cover})`
            }}

          >
            <div className="caption">
              <h4>{slide.topic}</h4>
              <p>{slide.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    : null

)

// ------------------Component---------------------------

const SliderWidget = ({ slides }) => {
  return (
    <>
      {slidesTemplates(slides)}
    </>
  )
}

export default SliderWidget;
import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';




const imageBlocksTemplate = (blocks) => (
  blocks ?
    blocks.map(block => (
      <Fade key={block.id} left duration={2500}>
        <div className={`item ${block.type}`}>
          <div className="veil"></div>
          <div className="image"
            style={{ background: `url(/images/blocks/${block.image}) no-repeat` }}
          >
          </div>
          <div className="title">
            <Link to={block.link}>{block.title}</Link>
          </div>
        </div>
      </Fade>
    ))
    : null
)




const ImageBlocks = ({ blocks }) => {
  return (
    <div className="home_block">
      {imageBlocksTemplate(blocks)}
    </div>
  )
}


export default ImageBlocks;
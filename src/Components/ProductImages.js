import React, { useState } from 'react'
import styled from "styled-components"

const ProductImages = ({ images=[{url:''}] }) => {
    const [mainImage,setMainImage] = useState(images[0])
    //console.log(images)
    return (
      <Wrapper>
            {/* here i got the image and display it as main if i clicked the gallary images that image will be set according to index.  */}
            <img src={mainImage.url} alt="main" />
            <div className="gallery">
                {images.map((img,index) => {
                    return <img className={`${img.url === mainImage.url ? 'active' : null}`}
                        key={index} src={img.url} alt="img" onClick={() => setMainImage(images[index])} />
                })}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 4px solid green;
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  `

export default ProductImages

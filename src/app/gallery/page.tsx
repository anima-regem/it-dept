'use client';

import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export interface CustomImage {
  src: string;
  width: number;
  height: number;
  original: string;
  caption?: string;
  alt?: string;
  tags?: { value: string; title: string }[];
}

const Page = () => {
  const images: CustomImage[] = [
    {
      src: "/images/gallery/1.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/gallery/2.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 212,
      caption: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/gallery/3.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 212,
      caption: "Color Pencils (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/gallery/4.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 213,
      caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
    },
    {
      src: "/images/gallery/5.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 183,
      caption: "37H (gratispgraphy.com)",
    },
    {
      src: "/images/gallery/6.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 240,
      height: 320,
      caption: "8H (gratisography.com)",
    },
    {
      src: "/images/gallery/7.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 190,
      caption: "286H (gratisography.com)",
    },
    {
      src: "/images/gallery/8.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 148,
      caption: "315H (gratisography.com)",
    },
    {
      src: "/images/gallery/9.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 213,
      caption: "201H (gratisography.com)",
    },
    {
      src: "/images/gallery/10.jpg",
      original: "/images/gallery/1.jpeg",
      alt: "Big Ben - London",
      width: 248,
      height: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/11.jpeg",
      original: "/images/gallery/1.jpeg",
      alt: "Red Zone - Paris",
      width: 320,
      height: 113,
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/12.jpeg",
      original: "/images/gallery/1.jpeg",
      alt: "Wood Glass",
      width: 313,
      height: 320,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/13.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 213,
      caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/14.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 194,
      caption: "Old Barn (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/15.jpeg",
      original: "/images/gallery/1.jpeg",
      alt: "Cosmos Flower",
      width: 320,
      height: 213,
      caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/16.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 271,
      height: 320,
      caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/17.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 213,
      caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/18.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 213,
      caption: "Man on BMX (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/19.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 213,
      caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/20.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 213,
      caption: "Time to Think (Tom Eversley - isorepublic.com)",
    },
    {
      src: "/images/gallery/21.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 179,
      caption: "Untitled (Jan Vasek - jeshoots.com)",
    },
    {
      src: "/images/gallery/22.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 320,
      height: 215,
      caption: "Untitled (moveast.me)",
    },
    {
      src: "/images/gallery/23.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 257,
      height: 320,
      caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
      src: "/images/gallery/24.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 226,
      height: 320,
      caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
    {
      src: "/images/gallery/25.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 226,
      height: 320,
      caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
    {
      src: "/images/gallery/26.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 226,
      height: 320,
      caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
    {
      src: "/images/gallery/27.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 226,
      height: 320,
      caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
    {
      src: "/images/gallery/28.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 226,
      height: 320,
      caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
    {
      src: "/images/gallery/29.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 226,
      height: 320,
      caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
    {
      src: "/images/gallery/30.jpeg",
      original: "/images/gallery/1.jpeg",
      width: 226,
      height: 320,
      caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
  ];

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const prevIndex = (index + images.length - 1) % images.length;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className="px-7 py-28 lg:px-36">
      <h2 className=" text-[40px] text-[#00385E]">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </h2>
      <div className=" w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />

      <div className=" mt-12">
        <p className=" text-black text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <br />
        <p className=" text-black text-xl">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className=' mt-28'>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        {index >= 0 && currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            nextSrc={images[nextIndex].original}
            prevSrc={images[prevIndex].original}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
            imageTitle={currentImage.caption}
          />
        )}
      </div>
    </div>
  );
};

export default Page;

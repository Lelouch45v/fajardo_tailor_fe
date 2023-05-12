import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/bed.png",
      cateName: "bedsheets",
    },
    {
      cateImg: "./images/category/theater.png",
      cateName: "Curtains",
    },
    {
      cateImg: "./images/category/bag.jpg",
      cateName: "ToteBags",
    },
   

  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories

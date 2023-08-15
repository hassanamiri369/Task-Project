import React from 'react'
import "./ArticleStyle.css"



const Article = () => {


  const [state, setState] = React.useState([
    {
      id: 1, image: "https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg", tag: "خودشناسی", date: "1400/2/1", title: "زنده بودن غیر از زندگی کردن", text: " نتم موسپیا مرول هدنیآ همانزور ،پاچ تعنص زا موهفمان یگداس تسا مزا دصرد هس و تصش رد یدایز یاهباتک ،دشاب یم یدربراک یاهرازبا دوبهب فده اب",
      link: "ادامه مقاله"
    },
    {
      id: 2, image: "https://jenmulligandesign.com/wp-content/uploads/2017/04/pexels-beach-tropical-scene-free-stock-photo.jpg", tag: "خودشناسی", date: "1400/2/1", title: "زنده بودن غیر از زندگی کردن", text: " نتم موسپیا مرول هدنیآ همانزور ،پاچ تعنص زا موهفمان یگداس تسا مزا دصرد هس و تصش رد یدایز یاهباتک ،دشاب یم یدربراک یاهرازبا دوبهب فده اب",
      link: "ادامه مقاله"
    },
    {
      id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqFaiwIDS8LfPo3ctgklW3FJo4eX6_aMXRA&usqp=CAU", tag: "خودشناسی", date: "1400/2/1", title: "زنده بودن غیر از زندگی کردن", text: " نتم موسپیا مرول هدنیآ همانزور ،پاچ تعنص زا موهفمان یگداس تسا مزا دصرد هس و تصش رد یدایز یاهباتک ،دشاب یم یدربراک یاهرازبا دوبهب فده اب"
      , link: "ادامه مقاله"
    }
  ])

  return (
    <div className='article-container'>
      <div className='article-header'>
        <p>مقالات مرتبط</p>
      </div>

      <div>
        <div className='card'>{state ? (<>
          {state.map((post, index) => (
            <div className='cart-item'>
              <div className='post-image'>
                <img src={post.image} />
              </div>

              <div className='post-content'>
                <div className='post-head'>
                  <span className='post-data'>{post.date}</span>
                  <span className='post-tag'>{post.tag}</span>
                </div>

                <div className='post-title'>
                  <p>{post.title}</p>
                </div>

                <div className='post-text'>
                  <p>{post.text}</p>
                </div>

                <div className='post-link'>
                  <p>{post.link}</p>
                </div>
              </div>
            </div>
          ))}
        </>) : null}</div>
      </div>
    </div>
  )
}

export default Article
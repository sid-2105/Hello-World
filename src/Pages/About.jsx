import React from 'react'
import "./About.css"
import TypingEffect from '../Components/Typing Effect/TypingEffect'

const About = () => {
  return (
    <div className='Page'>
       <h1>About Us</h1>
      <div className="about">
        <div className="about_left">
          <img src="./about-bg.png" alt="" />
        </div>
       <div className="about_right">
        <TypingEffect text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, impedit repudiandae, voluptatem repellat et quia consequuntur maxime hic nulla iusto ratione ut ea eum accusantium sunt voluptate esse laborum deleniti? Unde earum beatae consectetur eius ducimus repudiandae ab atque distinctio! Quos nisi iure doloremque itaque ipsa tempore cupiditate! Nam voluptates necessitatibus error, doloremque ipsa expedita obcaecati. Earum odio iure vel dignissimos, soluta reprehenderit laboriosam reiciendis laudantium sint rerum facilis officiis adipisci? Culpa ex ullam repudiandae porro reiciendis, sequi eveniet, quis, sunt sed ipsum cum asperiores minus consequatur alias vel soluta commodi tempora eum? Dolorum veniam unde nemo porro maiores repudiandae eos quam quibusdam, cupiditate saepe ipsa corporis amet, pariatur magnam aut accusantium! Quisquam quidem omnis architecto quia nobis possimus, accusamus tempore magni aspernatur nam suscipit ut esse iusto quod placeat doloremque quaerat aliquam, modi commodi ab ipsa nesciunt. Minus eligendi quibusdam ipsa porro voluptas modi aliquid facere quo maxime quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis sequi impedit a praesentium! Consequuntur quae sed vel quam, odit doloremque, tempora maiores temporibus rerum inventore itaque. Hic similique velit commodi quam eum! Magnam error delectus minus inventore cupiditate facere a esse nulla pariatur. Fugit ipsam fugiat libero voluptatem amet consequatur inventore quibusdam quod laboriosam praesentium! Similique saepe debitis consectetur commodi iusto odio nemo laborum, officia quia atque corrupti sapiente, expedita architecto et aliquam sit! Quibusdam, provident. Nihil, consectetur fugiat?" speed={30}/>
       </div>
       
      </div>
    </div>
  )
}

export default About
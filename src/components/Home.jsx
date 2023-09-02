import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
            <h1>TechnoStar</h1>
            <p>No more getting stuck in tech problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>Introducing TechnoStar- your one-stop destination for all your tech-related needs! We are a leading company dedicated to providing exceptional technology services tailored to meet your specific requirements.Whether you're a small business owner looking to enhance your digital presence or an individual seeking reliable IT solutions, TechnoStar has got you covered. Our team of highly skilled experts specializes in website development, software solutions, cloud computing, cybersecurity, and much more. With a customer-centric approach. we strive to deliver innovative and cutting-edge solutions that empower your business and streamline your technological operations. Trust TechnoStar to take your tech game to the next level.</p>
        </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>Who we are? </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ex amet id molestiae magnam repellat fugit qui, doloremque minus minima facilis ad. Labore voluptatem mollitia, cum saepe accusamus, autem at illo eveniet magni adipisci quam rem quas dolorem consequatur doloribus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, veritatis facilis! Ex eos odit, quos illum corrupti velit asperiores, adipisci molestiae veritatis fuga sed. Repudiandae, animi? Praesentium officiis omnis, fugiat similique in laboriosam aspernatur aut fuga aperiam rerum nulla eum?</p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
      <h1>Brands</h1>
      <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s",
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"1s",
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
      </article>
      </div>
    </div>
    </>
  )
}

export default Home
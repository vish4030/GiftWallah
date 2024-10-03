import React,{useState} from 'react'
import slideImg from "../assets/slider01.jpg";


import ArtCard from '../components/ArtCard';
import ArtWorkCard from '../components/ArtWorkCard';

const Home = () => {

  const[arr1, setArr1] = useState(["Clay Art Gift","Paintings","Resign Artwork","Custom PrintMug", "PhotoFrame"])
  const[arr, setArr] = useState([0,0,0,0])
  return (
    <>
        <div className="slider">
          <div className="container">
          <div className="row">
            <div className="col-6"><img src={slideImg} alt="slideImg" /></div>
            <div className="col-6 img-content">
              <h2><span>WELCOME TO GIFTWALLA!</span></h2>
              <h3>Special Edition</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum</p>
              <span className='btn'>Shop Now</span>
            </div>
          </div>
          </div>
        </div>
        <div className="art-type">
          <div className="row justify-space-bet">
            <div className="col-2"><ArtCard artName="Clay Art Gift" /></div>
            <div className="col-2"><ArtCard artName="Paintings" /></div>
            <div className="col-2"><ArtCard artName="Resign Artwork" /></div>
            <div className="col-2"><ArtCard artName="Custom PrintMug " /></div>
            <div className="col-2"><ArtCard artName="Photo Frame" /></div>
          </div>
        </div>
        <div className="works-show container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12"></div>
                <div className="col-12">
                <h2>We Love Trends.</h2>  
                <button className="btn art-filter-btn btn-active">New Featured</button>
                <button className="btn art-filter-btn">For Boy</button>
                <button className="btn art-filter-btn">For Girl</button>
                </div>
              </div>
            </div>
            {
              arr1.map((item)=>{
                return <div className="col-12">
                  <h3 className='art-heading'>{item}</h3>
                  <div className="row">
                    {arr.map(item1=>{
                      return <div className="col-3"><ArtWorkCard /></div>
                    })}
                  </div>
                </div>
              })
            }
          </div>
        </div>
    </>
  )
}

export default Home
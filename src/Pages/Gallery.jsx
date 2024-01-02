import React from "react";
import "./Gallery.css";
import ImageCarousel from "./ImageCarousel";
import ProfileCard from "../Components/ProfileCard/ProfileCard";

const images = ["https://images.unsplash.com/photo-1624207371246-ed2f11b70e39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1624207371246-ed2f11b70e39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1624207371246-ed2f11b70e39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1624207371246-ed2f11b70e39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

const Gallery = () => {
  return (
    <div className="Page">
      <h1>Gallery</h1>
      <div className="carousel">
          <ImageCarousel images={images} />
      </div>
      <h2>Our Head</h2>
      <div className="head">
        <ProfileCard profileType={'Top'} profileImage={'./principal.jpeg'} profileName={'Dr. Prof. HP Shukla'} profileDesignation={'Principal(UCER)'}/>
        <ProfileCard profileType={'Top'} profileImage={'./vd.jpg'} profileName={'Dr. Vijay kr. Dwivedi'} profileDesignation={'HOD(CSE)'}/>
      </div>
      <h2>Our Faculty</h2>
      <div className="faculty">
        <ProfileCard profileType={'Middle'} profileImage={'./prashant.jpeg'} profileName={'Prashant Soni'} profileDesignation={'Competitive Coding'}/>
        <ProfileCard profileType={'Middle'} profileImage={'./rahul.jpeg'} profileName={'Rahul Kesarwani'} profileDesignation={'Web Development'}/>
        <ProfileCard profileType={'Middle'} profileImage={'./pal.png'} profileName={'Pallavi Shukla'} profileDesignation={'AI/ML'}/>
        <ProfileCard profileType={'Middle'} profileImage={'./dilip.jpg'} profileName={'Dilip Kumar'} profileDesignation={'App Development'}/>
      </div>
      <h2>Our Team</h2>
      <div className="team">
        <ProfileCard profileType={'Bottom'} profileImage={'./sid.jpg'} profileName={'Siddharth Mishra'} profileDesignation={'President'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./shiv.jpeg'} profileName={'Shivansh Dwivedi'} profileDesignation={'Vice-President'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./diesel.jpeg'} profileName={'Shivang Gupta'} profileDesignation={'Treasurer/Membership'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./shubhi.jpeg'} profileName={'Shubhranshu'} profileDesignation={'Secretary/Social Media'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./saumya.jpg'} profileName={'Saumya Singh'} profileDesignation={'Technical Lead'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./anshika.jpg'} profileName={'Anshika'} profileDesignation={'Event Coordinator'}/>
      </div>
    </div>
  );
};

export default Gallery;

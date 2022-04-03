import React from "react";

import CardText from "../Cards/CardText";
import CardImage from "../Cards/CardImage";
function AboutUs(){
    
        return( <div className="text-center">
<h1 ><u>About Us</u></h1>
<div class="row">
        <div class="col col-lg-6">
<CardText title="What We Do?" 
content="We've build this website to help job seekers in their quest to impress the interviewers and secure an amazing job opportunity.
We offer an easy and interactive way to create resumes. It’s absolutely free to use.
All you have to do is to fill the details which you wish to include in your resume and 
Ta-Da!
Your customised resume is ready for you to use. "
/></div>   <div class="col col-lg-6">
<CardImage imgURL="https://webdesignblog.info/wp-content/uploads/2018/01/cv-resume-cover-letters.jpg" alt="Resume" />
</div></div>
<div class="row">
        <div class="col col-lg-6">
        <CardImage imgURL="https://qph.fs.quoracdn.net/main-qimg-0dd75977c85a6f76dab916ac2a3b9933" alt="Contributors" />

</div><div class="col col-lg-6">
<CardText title="Who We Are?" 
content="We are a family of open source contributors working on this website to make it better day by day and enhance the user experience.
Anyone who wishes to contribute can make their contribution through GitHub.
GitHub repo link: " link="https://github.com/CatsInTech/Rezume"
/>
</div></div> </div>);
        

}





export default AboutUs;
// import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

// function Footer(){
//     const state=useSelector((state)=>state);
//     console.log("Footer ",state.loggedin.Username)
//     return (
//             <div class="fixed-bottom rounded-0">
//                 <img src={'assets/sonylogo.jpg'} style={{height:"50px",width:"150px"}} className="float-left"/>
//                 <img src={'assets/hplogo.png'} style={{height:"50px",width:"100px"}} className="float-left"/>
//                 <img src={'assets/lglogo.jpg'} style={{height:"50px",width:"170px"}} className="float-left"/>
//                 <img src={'assets/applelogo.png'} style={{height:"50px",width:"110px"}} className="float-left"/>
//                 <img src={'assets/nokialogo.jpg'} style={{height:"50px",width:"150px"}} className="float-left"/>
//                 <img src={'assets/canonlogo.jpg'} style={{height:"50px",width:"150px"}} className="float-left"/>
//                 <img src={'assets/skullogo.jpg'} style={{height:"50px",width:"150px"}} className="float-left"/>
//                 <img src={'assets/dellogo.jpg'} style={{height:"50px",width:"70px"}} className="float-left"/>
                
//                 <img src={'assets/samlogo.png'} style={{height:"50px",width:"150px"}} className="float-left"/>
//                 <img src={'assets/panalogo.jpg'} style={{height:"50px",width:"150px"}} className="float-left"/>
//                 <img src={'assets/roglogo.jpg'} style={{height:"50px",width:"90px"}} className="float-left"/>
//                 <img src={'assets/lenovo.jpg'} style={{height:"50px",width:"130px"}} className="float-left"/>

//             </div>
            
            
//     )
// }
function Footer(){
  return(
    <>
    <div className="container-fluid  my-5 bg-dark text-light" style={{backgroundColor: "#1c2331;"}}>

    <footer className="text-center text-lg-start text-light"
            style={{backgroundColor: "#1c2331;"}}
            >
   
      <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: "#6351ce"}}
            >
  
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
  
        <div>
          <Link to="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fab fa-github"></i>
         </Link>
        </div>

      </section>



      <section className="">
        <div className="container text-center text-md-start ">
      
          <div className="row mt-3">
   
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundVColor: "#7c4dff", height: "2px"}}
              />
              <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
              </p>
            </div>
         

          
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
              <p>
                <Link to="" class="text-white">MDBootstrap</Link>
              </p>
              <p>
                <Link to="" class="text-white">MDWordPress</Link>
              </p>
              <p>
                <Link to="" class="text-white">BrandFlow</Link>
              </p>
              <p>
                <Link to="" class="text-white">Bootstrap Angular</Link>
              </p>
            </div>
          

          
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
              />
              <p>
                <Link to="" className="text-white">Your Account</Link>
              </p>
              <p>
                <Link to="" className="text-white">Become an Affiliate</Link>
              </p>
              <p>
                <Link to="" className="text-white">Shipping Rates</Link>
              </p>
              <p>
                <Link to="" className="text-white">Help</Link>
              </p>
            </div>
         

          
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
              <p><i className="fas fa-home mr-3"></i> Mumbai, CDAC Juhu, </p>
              <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
       
          </div>
      
        </div>
     </section>
    

   
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2020 Copyright:
      <Link className="text-white" to=""
         >hikerstop.com</Link
        >
    </div>
  
  </footer>


</div>
</>
);
}


export default Footer;


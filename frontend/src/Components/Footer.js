import React from 'react';

export default class Footer extends React.Component {
    render() {

    
   return(
       <div className="footerContainer">
           <div className="footer">
                <div className="footerHeading">
                    <h1>About Us</h1>
                    <a href='#'>Blog</a>
                    <a href='#'>Charity</a>
                    <a href='#'>ShareHolders</a>
                    <a href='#'>Terms of Service</a>
                    <a href='#'>Meet the Team</a>
                </div>
                <div className="footerHeading">
                    <h1>Contact Us</h1>
                    <a href='#'>Employment</a>
                    <a href='#'>Support</a>
                    <a href='#'>Recommendation</a>
                    <a href='#'>Buy Your Tools</a>
                    
                </div>
                <div className="footerHeading">
                    <h1>Social Media</h1>
                    <a href='#'>Instagram</a>
                    <a href='#'>Facebook</a>
                    <a href='#'>Youtube</a>
                    <a href='#'>Twitter</a>
                </div>


            </div>
       </div>
       
   )
} 
}

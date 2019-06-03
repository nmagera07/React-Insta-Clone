import React from 'react'

const Search = () => {
        return(
            <div className="search-container">
               <div className="search-left">
                    <img className="img1"src="http://pngimg.com/uploads/instagram/instagram_PNG8.png" alt="instagram logo"/>
                    <img className="img2" src="https://fontmeme.com/images/instagram-new-logo.png" alt="instagram text"/>
                    {/* <p>Instagram</p> */}
               </div>

               <div className="search-bar">
                    <input placeholder="Search">
                    
                    </input>
                </div>     
                
                <div className="search-right">
                <img src="https://art4clip.com/images/compass-clipart-safari-9.jpg" alt="compass image"/>
                <img src="http://www.transparentpng.com/thumb/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png" alt="heart picture"/>
                <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/137578-200.png" alt="person logo"/>
                </div>
            </div>
            
        )
    
}

export default Search
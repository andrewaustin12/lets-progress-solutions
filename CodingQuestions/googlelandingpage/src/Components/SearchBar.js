import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import ShopIcon from '@mui/icons-material/Shop';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AirlinesIcon from '@mui/icons-material/Airlines';
import AppleIcon from '@mui/icons-material/Apple';
import AttractionsIcon from '@mui/icons-material/Attractions';

const SearchBar = () => {
  return (
    <div className="google-search">
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
        alt="Google"
        className="google-logo"
      />
      <div className="search-container">
        <div className="magnifying-icon"><SearchIcon/></div>
        <input type="text" className="search-input" placeholder="Search Google or type a URL" />
        <div className="google-mic"><MicIcon/></div>
        <div className="google-image"><ImageSearchIcon/></div>
      </div>
      <div className="icon-grid">
        <div className="icon-item">
          <div className="icon"><LinkedInIcon color="primary"/></div>
          <div className="label">Label 1</div>
        </div>
        <div className="icon-item">
          <div className="icon"><LinkedInIcon color="primary"/></div>
          <div className="label">Label 1</div>
        </div>
        <div className="icon-item">
          <div className="icon"><GoogleIcon color="primary"/></div>
          <div className="label">Label 1</div>
        </div>
        <div className="icon-item">
          <div className="icon"><ShopIcon color="warning"/></div>
          <div className="label">Label 1</div>
        </div>
        <div className="icon-item">
          <div className="icon"><FacebookIcon color="primary"/></div>
          <div className="label">Label 1</div>
        </div>
        <div className="icon-item">
          <div className="icon"><TwitterIcon color="primary"/></div>
          <div className="label">Label 1</div>
        </div>
        <div className="icon-item">
          <div className="icon"><AirlinesIcon color="warning"/></div>
          <div className="label">Label 1</div>
        </div>
        <div className="icon-item">
          <div className="icon"><AppleIcon color="warning"/></div>
          <div className="label">Label 1</div>
        </div>
        <div className="icon-item">
        <div className="icon"><AttractionsIcon color="primary"/></div>
          <div className="label">Label 1</div>
        </div>
        <div className="icon-item">
        <div className="icon"><AttractionsIcon color="primary"/></div>
          <div className="label">Label 1</div>
        </div> 

      </div>
    </div>
  );
};

export default SearchBar
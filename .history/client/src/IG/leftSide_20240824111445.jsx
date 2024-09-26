import React from 'react'
import '../IG/leftSide.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const leftSide = () => {
  return (
    <div className='leftSidePart'>
      <div className='logoPart'>
        <img className='logoImg' src='/' alt='IT-Moment'/>
      </div>
      <div className='navLinkPart'>
        <div className='navLink'>
            <HomeIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Home</div>
        </div>
        <div className='navLink'>
            <SearchIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Search</div>
        </div>
        <div className='navLink'>
            <Ex sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Search</div>
        </div>
        <div className='navLink'>
            <SearchIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Search</div>
        </div>
      </div>
    </div>
  )
}

export default leftSide

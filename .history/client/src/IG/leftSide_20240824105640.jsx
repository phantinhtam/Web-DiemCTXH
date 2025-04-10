import React from 'react'
import '../IG/leftSide.css'
import HomeIcon from '@mui/icons-material/Home';

const leftSide = () => {
  return (
    <div className='leftSidePart'>
      <div className='logoPart'>
        <img className='logoImg' src='/' alt='IT-Moment'/>
      </div>
      <div className='navLinkPart'>
        <div className='navLink'>
            <HomeIcon sx={{fontSide:"30px"}}

        </div>
      </div>
    </div>
  )
}

export default leftSide

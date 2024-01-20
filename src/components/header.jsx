import React from 'react';

const headerListStyle = {
  width: '1200px',
  display: 'flex', 
  background: 'grey'
};
const headerItemStyle = {display: 'inline-block'};

const Header = () => {
  return (
    <React.Fragment>
        <div className='headerBlock' style={headerListStyle}>
        <div className='imgLogo'>
            <img src='https://th.bing.com/th/id/R.3f6d25ceb41c538d3fda6d9a7af69999?rik=HV60TCoaxmeImQ&pid=ImgRaw&r=0' alt='Header Logo' style={{width: '50px', marginLeft: '50px'}}/>
        </div>
        <ul className='headerList' style={{display: 'flex', gap: '50px', marginLeft: '50px', fontSize: '16px'}}>
            <li className='headerItem' style={headerItemStyle}><a href='#'>My blog</a></li>
            <li className='headerItem' style={headerItemStyle}><a href='#'>Community</a></li>
            <li className='headerItem' style={headerItemStyle}><a href='#'>Partners</a></li>
            <li className='headerItem' style={headerItemStyle}><a href='#'>Settings</a></li>
        </ul>
        </div>

    </React.Fragment>
  )
}

export default Header;
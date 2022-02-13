import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import { useState, useEffect } from 'react'

const Main = ({ selectedPunk, punkListData }) => {

    const [activePunk, setActivePunk] = React.useState(punkListData[0]);

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk]);
    }, [punkListData, selectedPunk]);

  return (
    <div className='main'> 
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img src={activePunk.image_url} alt="" className='selectedPunk'/>
                </div>
            </div>

            <div className='punkDetails' style={{ color: '#fff' }}>
                <div className='title'>
                    {activePunk.name}
                <span className='itemNumber'> #{activePunk.token_id}</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.owner.profile_img_url} alt="" />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div className='ownerAddress'>0xb4E7Ff6275a4Ac618bF5eF2B9742b1F56c859A69</div>
                            <div className='ownerHandle'>@LewisHeath</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt="" />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt="" />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Main
import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img src={'https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'} alt="" className='selectedPunk'/>
                </div>
            </div>

            <div className='punkDetails' style={{ color: '#fff' }}>
                <div className='title'>
                    Bandana Punk
                </div>
                <span className='itemNumber'>#1</span>
            </div>

            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img src={'https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'} alt="" />
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
  )
}

export default Main
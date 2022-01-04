import React from 'react';
import '../css/Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender'
import Post from'./Post'
import Coin from './Coin'
function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Coin/>
            <Post profilePic='https://img.ltn.com.tw/Upload/ent/page/800/2021/03/31/phpCyvll8.jpg'
                  message='OK的拉'
                  timestamp='1111'
                  username='宋重機'
                  image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/collage-1613894438.jpg?crop=0.497xw:0.994xh;0,0&resize=640:*'
                  />
            <Post profilePic='https://img.ltn.com.tw/Upload/ent/page/800/2021/03/31/phpCyvll8.jpg'
                  message='gooood'
                  timestamp='1111'
                  username='宋重機'
                  image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/collage-1613894438.jpg?crop=0.497xw:0.994xh;0,0&resize=640:*'
                  />
            
        </div>
    )
}

export default Feed 

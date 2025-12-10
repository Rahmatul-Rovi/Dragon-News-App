import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playGround from '../../assets/playground.png';
import photo from '../../assets/bg.png';


const QZone = () => {
    return (
        <div className='bg-base-200 p-3 '>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className="space-y-5">
            <img src={swimmingImage} alt="" />
             <img src={classImage} alt="" />
              <img src={playGround} alt="" />
              <img src={photo} alt="" />
            </div>
        </div>
    );
};

export default QZone;
import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3'>
           <p className='text-base-100 bg-secondary px-3 py-2'>Latest </p>
           <Marquee className='flex gap-5' pauseOnHover={true} speed={70}>
              <p className='font-bold'> Local tech startup 'Nabodiganta' has launched its new Artificial Intelligence platform, claiming it will make data analysis faster and more accurate. </p>
               <p className='font-bold'>The national squad for the upcoming football tournament has been announced; the coach is putting trust in young talent, increasing enthusiasm among fans. </p>
                <p className='font-bold'> The World Summit on Environmental Protection began today; there is potential for a new global agreement to be signed to combat climate change.  </p>
           </Marquee>
        </div>
    );
};

export default LatestNews;
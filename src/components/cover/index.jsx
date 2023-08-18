import React from 'react'
import Style from './style';

const Cover = () => {
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     // 👇️ redirects to an external URL
  //     window.location.replace('https://www.w3schools.com');
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, []);
  return (
    <>
        <Style>
          <section>
            <div className='parent'>
              <div className='text'>SC</div>
              <div className='ball'>
                <div className='ball-loader'></div>
              </div>
              <div className='text'>REBUZZ</div>
            </div>
          </section>
        </Style>
    </>
  );
};

export default Cover;


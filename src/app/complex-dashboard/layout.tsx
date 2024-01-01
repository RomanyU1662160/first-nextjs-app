import React from 'react';

type Props = {
  children: React.ReactNode;
  metrics?: React.ReactNode;
  notifications?: React.ReactNode;
  analytics?: React.ReactNode;
  activities?: React.ReactNode;
  auth?: React.ReactNode;
};
const isLoggedIn = true;

function ComplexDashBoardLayout(props: Props) {
  console.log(props);
  return (
    <>
      <div className='container'>{props.children}</div>
      {isLoggedIn ? (
        <div className='row'>
          <div className='col-md-5 m-2'>
            <div className='card'>
              <div className='card-body'>{props.activities}</div>
            </div>
          </div>
          <div className='col-md-5 m-2'>
            <div className='card'>
              <div className='card-body'>{props.analytics}</div>
            </div>
          </div>

          <div className='col-md-5 m-2'>
            <div className='card'>
              <div className='card-body'>{props.metrics}</div>
            </div>
          </div>

          <div className='col-md-5 m-2'>
            <div className='card'>
              <div className='card-body'>{props.notifications}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className='col-md-5 m-2'>
          <div className='card'>
            <div className='card-body'>{props.auth}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ComplexDashBoardLayout;

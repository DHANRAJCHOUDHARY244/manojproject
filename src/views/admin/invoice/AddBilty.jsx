import React from 'react'
import './style.css'
import Logo from './logo.png'
import { Box } from '@chakra-ui/react'
const AddBilty = () => {
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
			>
        <div
          style={{
            backgroundColor: '#e5a8f4',
            width: 680,
            padding: '20px'
          }}
				>
          <div
            style={{
              border: '5px solid black',
              padding: 5,
              backgroundColor: '#e5a8f4',
              fontFamily: 'sans-serif',
              width: 640,
              margin: 'auto'
            }}
					>
            <div style={{ width: 620, border: '2px solid black', padding: 20 }}>
              <div className='grid-column' style={{ gridTemplateColumns: '100px 500px' }}>
                <div className='grid-item'>
                  <img src={Logo} alt style={{ height: 100 }} />
                </div>
                <div className='grid-item grid-row' style={{ gridTemplateRows: '(2,1fr)' }}>
                  <h2
                    className='grid-item'
                    style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    color: '#14175d'
                  }}
									>
										BALAJI TRANSPORT COMPANY
									</h2>
                  <h5
                    className='grid-item'
                    style={{
                    backgroundColor: '#383794',
                    color: 'white',
                    padding: 10,
                    height: 40,
                    boxSizing: 'border-box',
                    width: 400,
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 10
                  }}
									>
										TRANSPORTER &amp; COMMISSION AGENT
									</h5>
                </div>
              </div>
              <div
                className='grid-row'
                style={{
                  gridTemplateRows: '(4,1fr)',
                  fontSize: 15,
                  color: '#4f3a90'
                }}
							>
                <p className='grid-item'>B.O. Krishna Dhaba, Near Sant Lal Rice Mills, Agra Road, MAINPURI</p>
                <p className='grid-item'>(U.P.)-205001, 9166863725, 9783133725, 9982770605</p>
                <p className='grid-item'>H.O.: Anandpura, W. No. 4, Bhanwarpura 01,</p>
                <p className='grid-item'>Kuchaman City, Nagaur (Raj.) 341508, Mob.: 9887712795</p>
              </div>
              <div
                className='grid-column'
                style={{
                  gridTemplateColumns: '300px 300px',
                  marginTop: 10,
                  color: '#1f0352'
                }}
							>
                <div className='grid-item' style={{ alignItems: 'start' }}>
                  <span className='grid-item'>No : </span>
									.............................
								</div>
                <div className='grid-item' style={{ textAlign: 'end' }}>
                  <span className='grid-item'>Date :</span>
                  <input className='grid-item' type='date' name='date' placeholder='.............................' />
                </div>
              </div>
              <div
                className='grid-column'
                style={{
                  gridTemplateColumns: 600,
                  marginTop: 10,
                  color: '#1f0352'
                }}
							>
                <div className='grid-item' style={{ alignItems: 'start', marginTop: 10 }}>
                  <span className='grid-item'>Truck No : </span>
                  <input
                    className='grid-item'
                    type='text'
                    name='truckno'
                    placeholder='.................................'
									/>
                </div>
                <div className='grid-item' style={{ alignItems: 'start', marginTop: 10 }}>
                  <span className='grid-item'>Truck Owner : </span>
                  <input
                    className='grid-item'
                    type='text'
                    name='truckowner'
                    placeholder='...........................'
									/>
                </div>
                <div className='grid-item' style={{ alignItems: 'start', marginTop: 10 }}>
                  <span className='grid-item'>Owner Mobile No : </span>
                  <input className='grid-item' name='ownnermob' type='text' placeholder='....................' />
                </div>
                <div className='grid-item' style={{ alignItems: 'start', marginTop: 10 }}>
                  <span className='grid-item'>Driver Name : </span>
                  <input
                    className='grid-item'
                    type='text'
                    name='drivername'
                    placeholder='...........................'
									/>
                </div>
                <div className='grid-item' style={{ alignItems: 'start', marginTop: 10 }}>
                  <span className='grid-item'>Driver Mobile No : </span>
                  <input className='grid-item' type='text' name='drivermob' placeholder='.....................' />
                </div>
                <div className='grid-item' style={{ alignItems: 'start', marginTop: 10 }}>
                  <span className='grid-item'>Cosignor : </span>
                  <input
                    className='grid-item'
                    type='text'
                    name='cosignor'
                    placeholder='.................................'
									/>
                </div>
                <div className='grid-item' style={{ alignItems: 'start', marginTop: 10 }}>
                  <span className='grid-item'>Cosignee : </span>
                  <input
                    className='grid-item'
                    type='text'
                    name='cosignee'
                    placeholder='.................................'
									/>
                </div>
              </div>
              <div
                className='grid-column'
                style={{
                  gridTemplateColumns: '300px 300px',
                  marginTop: 10,
                  color: '#1f0352'
                }}
							>
                <div className='grid-item' style={{ alignItems: 'start' }}>
                  <span className='grid-item'>Weight : </span>
                  <input
                    className='grid-item'
                    type='text'
                    name='weight'
                    placeholder='....................................'
									/>
                </div>
                <div className='grid-item' style={{ textAlign: 'end' }}>
                  <span className='grid-item'>Rate :</span>
                  <input className='grid-item' type='text' name='rate' placeholder='.............................' />
                </div>
              </div>
              <div
                className='grid-column'
                style={{
                  gridTemplateColumns: 600,
                  marginTop: 10,
                  alignItems: 'flex-end',
                  color: '#1f0352'
                }}
							>
                <div className='grid-item' style={{ alignItems: 'end', marginTop: 10 }} />
                <div className='grid-item' style={{ textAlign: 'end', marginTop: 10 }}>
                  <span className='grid-item'>Total Freight Rs : </span>
                  <input
                    className='grid-item'
                    type='text'
                    name='totfrers'
                    placeholder='.............................'
									/>
                </div>
                <div className='grid-item' style={{ textAlign: 'end', marginTop: 10 }}>
                  <span className='grid-item'>Advance Rs : </span>
                  <input className='grid-item' type='text' name='advrs' placeholder='.............................' />
                </div>
                <div className='grid-item' style={{ textAlign: 'end', marginTop: 10 }}>
                  <span className='grid-item'>Party Commission Rs : </span>
                  <input className='grid-item' type='text' name='commirs' placeholder='.............................' />
                </div>
                <div className='grid-item' style={{ textAlign: 'end', marginTop: 10 }}>
                  <span className='grid-item'>Truck Owner Commission Rs : </span>
                  <input className='grid-item' type='text' name='commirs' placeholder='.............................' />
                </div>
                <div className='grid-item' style={{ textAlign: 'end', marginTop: 10 }}>
                  <span className='grid-item'>B.T.C Commission Rs : </span>
                  <input className='grid-item' type='text' name='commirs' placeholder='.............................' />
                </div>
                <div className='grid-input-cont' style={{ textAlign: 'end', marginTop: 10 }}>
                  <span className='grid-item'>Balance Rs : </span>
                  <input className='grid-item' type='text' name='balrs' placeholder='.............................' />
                </div>
              </div>
              <hr />
              <div
                className='grid-column'
                style={{
                  gridTemplateColumns: '300px 300px',
                  marginTop: 10,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#1f0352'
                }}
							>
                <div className='grid-input-cont' style={{ textAlign: 'start' }}>
                  <span className='grid-item'>Signature of Owner/Driver : </span>
                  <input
                    className='grid-item'
                    type='text'
                    placeholder='....................................'
                    name='signowner'
									/>
                </div>
                <div className='grid-input-cont' style={{ textAlign: 'end' }}>
                  <span className='grid-item'>Dispatching : </span>
                  <input
                    className='grid-item'
                    type='text'
                    name='dispatching'
                    placeholder='....................................'
									/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default AddBilty

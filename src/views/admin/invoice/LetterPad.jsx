import React from 'react'
import { Grid, GridItem, Box, Heading, Textarea } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'

import './style.css'
import Logo from './logo.png'
import Logo1 from './1769669.svg'
const LetterPad = () => {
  return (
    <Box
      alignContent='center'
      alignItems='center'
      className='bg'
      height='1000px'
      border='5px double rgb(26, 229, 212)'
      mt={20}
      p={2}
		>
      <Box>
        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={0} height='180px'>
          <GridItem colSpan={2}>
            <Heading as='h6' fontSize='12px' textAlign='center' bg='rgba(26, 229, 212,0.2)' p={2}>
							!! JAI VAISHNO DEVI !!
						</Heading>
          </GridItem>
          <GridItem colSpan={1}>
            <Heading as='h6' fontSize='12px' textAlign='center' bg='rgba(26, 229, 212,0.2)' p={2}>
							!! JAI BAJRANG BALI !!
						</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <Heading as='h6' fontSize='12px' textAlign='center' bg='rgba(26, 229, 212,0.2)' p={2}>
							!! JAI BHERU JI MAHARAJ !!
						</Heading>
          </GridItem>
          <GridItem colSpan={1} paddingTop='30px'>
            <img src={Logo} alt style={{ height: '120px', width: '120px', marginTop: '-20px', marginLeft: '30px' }} />
          </GridItem>
          <GridItem colSpan={3} textAlign='left' paddingTop='10px'>
            <Heading
              as='h1'
              fontSize='30px'
              color='rgb(14, 6, 82)'
              padding='0px'
              style={{ textAlign: 'left', paddingLeft: '40px' }}
						>
							BALAJI TRANSPORT COMPANY
						</Heading>{' '}
            <Heading
              as='h1'
              fontSize='20px'
              padding='10px'
              style={{ textAlign: 'center', fontWeight: 'bold' }}
              bg='rgba(14, 6, 82,0.1)'
              color='rgba(14, 56, 82,0.8)'
						>
							TRANSPORTER & COMMISSION AGENT
						</Heading>
            <Heading fontSize='10px' padding='10px' style={{ textAlign: 'center', fontWeight: 'bold' }}>
							Krishna Dhaba, Near Sant Lal Rice Mills Agra Road, MAINPURI (U.P.)-205001
						</Heading>
            <img
              src={Logo1}
              width='50%'
              height='10px'
              style={{
                marginTop: '-50px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
						/>
          </GridItem>
        </Grid>
        <Grid templateRows={2} height='600px' mt='10px'>
          <GridItem>
            <Box width='100%' height='40px'>
              <Heading as='h6' color='rgb(14, 6, 82)' padding='0px' fontSize='15px'>
								Date : <input padding={0} type='date' placeholder='.......................' />
              </Heading>
            </Box>
          </GridItem>
          <GridItem mt='40px' padding='50px'>
            <Textarea placeholder='Write Letter pad content here :|>----  :)' height='400px' />
          </GridItem>
          <GridItem>
            <Heading as='h6' color='rgb(14, 6, 82)' padding='0px' fontSize='15px' textAlign='right' mr='10px'>
							Signature with Seal
						</Heading>
          </GridItem>
        </Grid>
        <Grid templateColumns='repeat(2,1fr)' height='200px' mt='10px'>
          <GridItem colSpan={2}>
            <PhoneIcon />9166863725
					</GridItem>
          <GridItem colSpan={2} mt='-15px'>
            <PhoneIcon />7252903725
					</GridItem>
          <GridItem colSpan={2} mt='-15px'>
            <PhoneIcon />9783133725M{' '}
          </GridItem>
          <GridItem colSpan={2} mt='-15px'>
            <PhoneIcon />9982770605
					</GridItem>
          <GridItem colSpan={2} mt='-15px'>
            <EmailIcon />opposhak145@gmail.com
					</GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default LetterPad

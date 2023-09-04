import React from 'react'
import { TfiFile } from 'react-icons/tfi'
import { Icon } from '@chakra-ui/react'
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart, MdLibraryBooks } from 'react-icons/md'

// Admin Imports
import MainDashboard from 'views/admin/default'
import NFTMarketplace from 'views/admin/marketplace'
import Profile from 'views/admin/profile'
import DataTables from 'views/admin/dataTables'
import RTL from 'views/admin/rtl'

// Auth Imports
import SignInCentered from 'views/auth/signIn'
import DataTables1 from 'views/admin/invoice'
import AddBilty from 'views/admin/invoice/AddBilty'
import AddChalan from 'views/admin/invoice/AddChalan'
import LetterPad from 'views/admin/invoice/LetterPad'
import Data from 'views/admin/data/Data'
import DataInsert from 'views/admin/data/DataInsert'

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/data',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Data
  },
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/indata',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: DataInsert
  },
  {
    name: 'View Bills',
    layout: '/admin',
    path: '/view-bills',
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: DataTables1
  },
  {
    name: 'Add Bilty',
    layout: '/admin',
    path: '/AddBilty',
    icon: <Icon as={MdLibraryBooks} width='20px' height='20px' color='inherit' />,
    component: AddBilty
  },
  {
    name: 'Add Chalan',
    layout: '/admin',
    path: '/AddChalan',
    icon: <Icon as={TfiFile} width='20px' height='20px' color='inherit' />,
    component: AddChalan
  },
  {
    name: 'Add LetterPad',
    layout: '/admin',
    path: '/Letterpad',
    icon: <Icon as={TfiFile} width='20px' height='20px' color='inherit' />,
    component: LetterPad
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
    component: NFTMarketplace,
    secondary: true
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: '/data-tables',
    component: DataTables
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: '/rtl-default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RTL
  }
]

export default routes

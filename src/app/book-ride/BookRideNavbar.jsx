'use client'
import { AppBar, Avatar, Box, Button,Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import deepOrange from '@mui/material/colors/deepOrange';
import React, { useState } from 'react'; 
import drawerList from './DrawerList';


const BookRideNavbar = () => {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handledSidebarClose = () => setSideBarOpen(false)
    const handledSidebarOpen=()=> setSideBarOpen(true)
  return (
    
       <div className='w-full'>
          <Box className=''>
              <AppBar sx={{backgroundColor:'#120E43'}} className='' position='static'>
                  <Toolbar>
                      <IconButton
                          size="large"
                          edge="start"
                          color='inherit'
                          aria-label='menu'
                          sx={{ mr: 2 }}
                          onClick={handledSidebarOpen}
                      >
                          <MenuIcon  />
                      </IconButton>
                      <Typography variant='h6' component="div" sx={{ flexGrow:1}}> 
                          Ola Cab
                      </Typography>
                      {false ? (
                          <Avatar
                              className='cursor-pointer'
                             
                              sx={{ bgcolor: deepOrange[500]}}
                          >
                              A
                          </Avatar> 
                      ) : (
                      <Button  color='inherit'>
                         Login
                      </Button>
                      )}
                  </Toolbar>
              </AppBar> 
              <Drawer anchor={"left"} open={sidebarOpen} onClose={handledSidebarClose}>
                  {drawerList('left')}
              </Drawer>
          </Box>
    </div>
  )
}

export default BookRideNavbar
import ListItemText from '@mui/material/ListItemText';

import ListItem from '@mui/material/ListItem'; // Import the ListItem component
import Box from '@mui/material/Box'; // Import the Box component
import List from '@mui/material/List'; // Import the List component
import InboxIcon from '@mui/icons-material/MoveToInbox'; // Corrected import statement
import MailIcon from '@mui/icons-material/Mail'; // Corrected import statement
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

export const drawerList = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[ 'Book Your Ride', 'Rate Card', 'Support'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
     
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Your Ride"} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );
export default drawerList;
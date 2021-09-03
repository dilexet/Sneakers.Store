import React from 'react';
import {BottomNavigation, BottomNavigationAction, Box} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import '../../css/navigation.css';

const Navigation = () => {
    const [value, setValue] = React.useState('recent');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
       <Box className='navigationMenu'>
           <BottomNavigation
               value={value}
               onChange={handleChange}
           >
               <BottomNavigationAction
                   label="Recent"
                   value='recent'
                   icon={<RestoreIcon/>}
                   className='BottomNavigationAction'
               />
               <BottomNavigationAction
                   label="Favorite"
                   value='favorite'
                   icon={<FavoriteIcon/>}
                   className='BottomNavigationAction'
               />
               <BottomNavigationAction
                   label="Nearby"
                   value='nearby'
                   icon={<LocationOnIcon/>}
                   className='BottomNavigationAction'
               />
               <BottomNavigationAction
                   label="Folder"
                   value='folder'
                   icon={<FolderIcon/>}
                   className='BottomNavigationAction'
               />
           </BottomNavigation>
       </Box>
    );
}

export default Navigation;
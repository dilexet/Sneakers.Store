import React from "react";
import {
    Typography,
    BottomNavigation, BottomNavigationAction,
    withStyles,
} from "@material-ui/core";

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    footer: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    }
});

const Footer = ({classes}) => {
    const [value, setValue] = React.useState('recent');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}>
                <BottomNavigationAction
                    label="Recent"
                    value='recent'
                    icon={<RestoreIcon/>}
                />
                <BottomNavigationAction
                    label="Favorite"
                    value='favorite'
                    icon={<FavoriteIcon/>}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value='nearby'
                    icon={<LocationOnIcon/>}
                />
                <BottomNavigationAction
                    label="Folder"
                    value='folder'
                    icon={<FolderIcon/>}
                />
            </BottomNavigation>
            <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                2021 © FuckingShop — магазин не пойми чего.
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                Все права защищены.
            </Typography>
        </footer>
    )
}

export default withStyles(styles)(Footer);
import {darken, lighten} from "@material-ui/core";

export const useStyles = () => ({
    drawerItem: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
    },
    list: {
        width: 'auto',
        overflow: 'auto',
        marginBottom: '30px',
        flex: 1,
    },
    heading: {
        textAlign: 'center',
        padding: '15px 0px',
        marginBottom: '0px'
    },
    cartTotalBlock: {
        margin: '20px 20px',
        '& div': {
            flex: 1,
            height: '1px',
            borderBottom: '1px dashed black',
            position: 'relative',
            top: '-4px',
            margin: '0px 7px'
        },
        '& ul': {
            display: 'block',
            marginBottom: '20px'
        },
        '& li': {
            display: 'flex',
            alignItems: 'flex-end',
            padding: '10px 0px'
        },
    },

    buttonCheckout: {
        width: '100%',
        height: '55px',
        background: '#9dd558',
        marginBottom: '10px',
        borderRadius: '18px',
        border: 0,
        color: '#fff',
        fontSize: '16px',
        fontWeight: '500px',

        '& svg': {
            position: 'absolute',
            right: '30px',
            top: '17.5px',
        },

        '&:hover': {
            background: lighten('#9dd558', 0.1),
        },
        '&:active': {
            background: darken('#9dd558', 0.1),
        },
    },
    btnText: {},
});
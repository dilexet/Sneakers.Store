export const useStyles = theme => ({
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px 20px',
        border: '1px solid #f3f3f3',
        borderRadius: theme.spacing(3)
    },
    img: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginLeft: theme.spacing(2)
    },
    cartContent: {
        margin: 'auto',
        textAlign: 'center',
        padding: '20px 20px'
    },
    desc: {
        margin: '6px 6px'
    }
});
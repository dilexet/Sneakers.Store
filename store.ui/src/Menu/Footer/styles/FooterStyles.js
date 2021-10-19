export const useStyles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: '#481173',
        marginTop: theme.spacing(5)
    },
    main: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        "& p": {
            color: '#C8B8CF'
        }
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
});
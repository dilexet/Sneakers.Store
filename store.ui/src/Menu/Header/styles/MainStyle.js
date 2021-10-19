export const useStyles = theme => ({
    root: {
        flexGrow: 1
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(9)
    },
    mainFeaturesPost: {
        position: "relative",
        height: theme.spacing(50),
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0,.3)"
    }
});
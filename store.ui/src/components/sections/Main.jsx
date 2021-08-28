import React from "react";
import {
    Container,
    Typography,
    Button,
    withStyles,
    Paper,
    Grid
} from "@material-ui/core";

import {variable} from '../../variables/variable';

const styles = theme => ({
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

const Main = ({classes}) => {
    return (
        <main>
            <Paper className={classes.mainFeaturesPost}
                   style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
                <Container maxWidth='md'>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={12}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography
                                    component="h1"
                                    variant="h3"
                                    color="inherit"
                                    gutterBottom
                                >
                                    {variable.ProjectName}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="inherit"
                                    paragraph
                                >
                                    {variable.Description}
                                </Typography>
                                <Button variant='contained' className={classes.mainButton}>
                                    Learn more
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>

            <div>
                <Container maxWidth="sm">
                    <Typography
                        variant='h2'
                        align='center'
                        color='textPrimary'
                        gutterBottom
                    >
                        {variable.ProjectName}
                    </Typography>
                    <Typography
                        variant='h5'
                        align='center'
                        color='textSecondary'
                        paragraph
                    >
                        {variable.Description}
                    </Typography>
                    <div>
                        <Grid container spacing={4} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    Start Now
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Start Now
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
    )
}

export default withStyles(styles)(Main);
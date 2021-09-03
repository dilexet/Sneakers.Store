import React from "react";
import {
    Container,
    Typography,
    Button,
    withStyles,
    Grid
} from "@material-ui/core";

import {variable} from '../../variables/variable';
import CarouselBox from "./CarouselBox";
import '../../css/carousel.css';


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

const Main = () => {
    return (
        <main>
            <Container className='carouselBox'>
                <CarouselBox/>
            </Container>

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
                                <Button variant='contained' className='btnPurple'>
                                    Start Now
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' className='btnPurpleBorder'>
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
import React from "react";
import {
    Container,
    Typography,
    Button,
    withStyles,
    Grid
} from "@material-ui/core";

import {variable} from '../../../Shared/variables/variable';
import CarouselBox from "./CarouselBox";
import '../styles/css/carousel.css';
import {useStyles} from "../styles/MainStyle";

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

export default withStyles(useStyles)(Main);
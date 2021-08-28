import React from 'react'
import {Menu, Input} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {Container, withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    },
});


const Filter = ({classes, sortProduct, sortBy, searchQuery, searchProduct}) => {

    return (
        <Container className={classes.cardGrid} maxWidth='md'>
            <Menu secondary>
                <Menu.Item
                    name='all'
                    active={sortBy === 'all'}
                    onClick={sortProduct.bind(this, 'all')}
                >
                    All
                </Menu.Item>

                <Menu.Item
                    name='name'
                    active={sortBy === 'name'}
                    onClick={sortProduct.bind(this, 'name')}
                >

                    By name
                </Menu.Item>

                <Menu.Item
                    name='price_high'
                    active={sortBy === 'price_high'}
                    onClick={sortProduct.bind(this, 'price_high')}
                >

                    By price max
                </Menu.Item>

                <Menu.Item
                    name='price_low'
                    active={sortBy === 'price_low'}
                    onClick={sortProduct.bind(this, 'price_low')}
                >

                    By price min
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' onChange={e => searchProduct(e.target.value)} value={searchQuery}
                               placeholder='Search...'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    )
};

export default withStyles(styles)(Filter);
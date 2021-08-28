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


const Filter = ({classes, ...props}) => {

    return (
        <Container className={classes.cardGrid} maxWidth='md'>
            <Menu secondary>
                <Menu.Item
                    name='all'
                    active={props.sortBy === 'all'}
                    onClick={props.sortProduct.bind(this, 'all')}
                >
                    All
                </Menu.Item>

                <Menu.Item
                    name='name'
                    active={props.sortBy === 'name'}
                    onClick={props.sortProduct.bind(this, 'name')}
                >

                    By name
                </Menu.Item>

                <Menu.Item
                    name='price_high'
                    active={props.sortBy === 'price_high'}
                    onClick={props.sortProduct.bind(this, 'price_high')}
                >

                    By price max
                </Menu.Item>

                <Menu.Item
                    name='price_low'
                    active={props.sortBy === 'price_low'}
                    onClick={props.sortProduct.bind(this, 'price_low')}
                >

                    By price min
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' onChange={e => props.searchProduct(e.target.value)} value={props.searchQuery}
                               placeholder='Search...'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    )
};

export default withStyles(styles)(Filter);
import React from 'react'
import {Menu, Input} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {Container, withStyles} from "@material-ui/core";
import '../../css/filter.css'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    },
});


const Filter = ({classes, ...props}) => {

    const sortBy = ['all', 'name', 'price_high', 'price_low'];
    const sortName = ['All', 'By name', 'By price high', 'By price low'];

    const filterItem = (value, index) => {
        return (
            <Menu.Item
                key={index}
                name={value}
                active={props.sortBy === value}
                onClick={props.sortProduct.bind(this, value)}
                className='filterItem'
            >
                {sortName[index]}
            </Menu.Item>
        )
    }

    return (
        <Container className={classes.cardGrid} maxWidth='md'>
            <Menu secondary>
                {sortBy.map((product, index) => filterItem(product, index))}

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' onChange={e => props.searchProduct(e.target.value)}
                               value={props.searchQuery}
                               placeholder='Search...'
                               className='searchInput'
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    )
};

export default withStyles(styles)(Filter);
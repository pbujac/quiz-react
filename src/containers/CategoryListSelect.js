import React, {Component} from 'react';
import {MenuItem, SelectField} from "material-ui";

class CategoryListSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: {
                id: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        console.log(event);
    }


    render() {
        return (
            <SelectField className="input-form"
                         floatingLabelText="Category"
                         onChange={this.handleChange}>

                {this.props.categories.map((category, index) =>
                    <MenuItem key={index} value={category} primaryText={category.title}/>
                )}
            </SelectField>
        );
    }
}

export default CategoryListSelect;

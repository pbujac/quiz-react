import React, {Component} from 'react';
import {MenuItem, SelectField} from "material-ui";
import PropTypes from 'prop-types';
import {SelectValidator} from "react-material-ui-form-validator";

class CategoryListSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }


    /**
     * @param event
     * @param index
     * @param value
     */
    handleChange = (event, index, value) => {

        this.props.quiz.category.id = value;
        this.setState({value});
    };

    render() {
        return (
            <SelectValidator className="input-form"
                             floatingLabelText="Category"
                             validators={['required']}
                             errorMessages={['This field is required']}
                             name="category"
                             value={this.state.value}
                             onChange={this.handleChange}>

                {this.props.categories.map((category, index) =>
                    <MenuItem key={index} value={category.id} primaryText={category.title}/>
                )}
            </SelectValidator>
        );
    }
}

CategoryListSelect.propTypes = {
    quiz: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
};


export default CategoryListSelect;

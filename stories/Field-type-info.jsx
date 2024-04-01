import React from 'react';
import PropTypes from 'prop-types';
import ValueComponent from '../packages/discvr-ui-components/field-type-info'


export const fieldType = ValueComponent({filter, index, highlightedInputs, handleFilterChange, allowedGroupNames, fieldTypeInfo});

fieldType.PropTypes = {

    filter: PropTypes.shape(
        {
            field: PropTypes.string,
            operator:  PropTypes.string,
            value:  PropTypes.string,
        }
    ),

    index: PropTypes.number,

    highlightedInputs: PropTypes.arrayOf(PropTypes.shape({
        field:  PropTypes.bool,
        operator: PropTypes.bool,
        value: PropTypes.bool,
    })),

    handleFilterChange: PropTypes.func,

    allowedGroupNames: PropTypes.any,

    fieldTypeInfo: PropTypes.shape(
        {
            name: PropTypes.string,
            label: PropTypes.string,
            description: PropTypes.string,
            type: PropTypes.string,
            isInDefaultColumns: PropTypes.bool,
            isMultiValued: PropTypes.bool,
            isHidden: PropTypes.bool,
            colWidth: PropTypes.number,
            formatString: PropTypes.string,
            orderKey: PropTypes.number,
            allowableValues: PropTypes.arrayOf(PropTypes.string),
            category: PropTypes.string,
            url: PropTypes.string,
            flex: PropTypes.number,
            supportsFilter: PropTypes.bool
        }
    )
};

fieldType.defaultProps = {
    filter: {
        field:  '',
        operator: '',
        value: ''
    }
}
import { fn } from '@storybook/test';
import { fieldType } from './Field-type-info';

export default {
    title: 'Field-type-info',
    component: fieldType,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        
    },
    args: { handleFilterChange: fn() },
};


export const SingleInputNoAllowableValues = {
    args: {
        filter: {
            field: 'exampleField',
            operator: '=',
            value: 'singleValue'
        },
        index: 1,
        highlightedInputs: [{field: "", operator: "", value: ""}],
        allowedGroupNames: null,
        fieldTypeInfo: [
            {
                name: 'exampleField',
                label: 'Example Field',
                description: 'A field that allows a single value with no specific allowable values.',
                type: 'string',
                isInDefaultColumns: true,
                isMultiValued: false,
                isHidden: false,
                colWidth: 100,
                formatString: '',
                orderKey: 1,
                allowableValues: [],
                category: '',
                url: '',
                flex: 1,
                supportsFilter: true
            }
        ]
    }
};

export const MultiInputWithAllowableValues = {
    args: {
        filter: {
            field: 'multiExampleField',
            operator: 'IN',
            value: 'value1,value2'
        },
        index: 2,
        highlightedInputs: [{field: "", operator: "", value: ""}],
        allowedGroupNames: null,
        fieldTypeInfo: [
            {
                name: 'multiExampleField',
                label: 'Multi-Example Field',
                description: 'A field that allows multiple values with specific allowable values.',
                type: 'string',
                isInDefaultColumns: true,
                isMultiValued: true,
                isHidden: false,
                colWidth: 150,
                formatString: '',
                orderKey: 2,
                allowableValues: ['value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8', 'value9', 'value10', 'value11'],
                category: '',
                url: '',
                flex: 1,
                supportsFilter: true
            }
        ]
    }
}

export const InSetWithGroupNames = {
    args: {
        filter: {
            field: 'groupExampleField',
            operator: 'in set',
            value: 'group1'
        },
        index: 3,
        highlightedInputs: [{field: false, operator: true, value: true}],
        allowedGroupNames: ['group1', 'group2', 'group3', 'group4'],
        fieldTypeInfo: [
            {
                name: 'groupExampleField',
                label: 'Group Example Field',
                description: 'A field with the operator "in set" and selectable group names.',
                type: 'string',
                isInDefaultColumns: true,
                isMultiValued: false,
                isHidden: false,
                colWidth: 150,
                formatString: '',
                orderKey: 3,
                allowableValues: [],
                category: '',
                url: '',
                flex: 1,
                supportsFilter: true
            }
        ]
    }
}
import React from 'react';
import TestRenderer from 'react-test-renderer';
import ValueComponent from './field-type-info';

export declare type FieldModel = {
    name: string
    label: string
    description: string
    type: string
    isInDefaultColumns: boolean
    isMultiValued: boolean
    isHidden: boolean
    colWidth: number
    formatString: string
    orderKey: number
    allowableValues: string[]
    category: string
    url: string
    flex: number
    supportsFilter: boolean
}

export declare type FilterModel = {
    field: string
    op: string
    val: string
}

it('ValueComponent test', () => {
    const fieldTypeInfo:FieldModel[] = [{
        name: '',
        label: '',
        description: '',
        type: '',
        isInDefaultColumns: false,
        isMultiValued: false,
        isHidden: false,
        colWidth: 0,
        formatString: '',
        orderKey: 0,
        allowableValues: [],
        category: '',
        url: '',
        flex: 0,
        supportsFilter: false
    },
    {
        name: '',
        label: '',
        description: '',
        type: '',
        isInDefaultColumns: false,
        isMultiValued: false,
        isHidden: false,
        colWidth: 0,
        formatString: '',
        orderKey: 0,
        allowableValues: [],
        category: '',
        url: '',
        flex: 0,
        supportsFilter: false
    }]

    const filter:FilterModel = {
        field: '',
        op: '',
        val: ''
    }

    

    const component = TestRenderer.create(
        <ValueComponent 
        filter={filter} 
        index={0} 

        highlightedInputs={[{field:false, operator:false, value:false},{field:false, operator:false, value:false}]}

        handleFilterChange={undefined} 
        highlightedSx={undefined} 
        fieldTypeInfo={fieldTypeInfo}></ValueComponent>
    );
    expect(component.toJSON()).toMatchSnapshot();

});
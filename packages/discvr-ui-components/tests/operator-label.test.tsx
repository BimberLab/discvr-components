import React from 'react';
import {create} from 'react-test-renderer';
import { OperatorLabel } from '../src/operator-label';


export declare interface FieldModel {
    name: string
    label: string | undefined
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

export declare interface FilterModel {
    field: string;
    operator: string;
    value: string;
}

it('OperatorLabel test', () => {
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
        operator: '',
        value: ''
    }

const component = create(
    
    <OperatorLabel
        fieldTypeInfo={fieldTypeInfo} 
        filter={filter} 
        getOperatorsForField={(_fieldObj: FieldModel | undefined) => (["",""])}
        handleFilterChange={(_index: number, _key: string, _value: string | undefined) => ({ field: "", operator: "", value: "" })}
        index={0}
    />

)
expect(component.toJSON()).toMatchSnapshot();
})
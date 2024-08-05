import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


interface FieldModel {
    name: string;
    label: string | undefined;
    description: string;
    type: string;
    isInDefaultColumns: boolean;
    isMultiValued: boolean;
    isHidden: boolean;
    colWidth: number;
    formatString: string;
    orderKey: number;
    allowableValues: string[];
    category: string;
    url: string;
    flex: number;
    supportsFilter: boolean;
}


interface FilterType {
    field: string;
    operator: string;
    value: string;
}


type HandleFilterChangeFunction = (
    index: number, 
    key: string, 
    value: string | undefined, 
) => FilterType;


interface FieldLabelProps {
    filter: FilterType;
    index: number;
    handleFilterChange: HandleFilterChangeFunction;
    fieldTypeInfo: FieldModel[];
}


function FieldLabel(props: FieldLabelProps): React.ReactElement | null {

    const {filter, index, handleFilterChange, fieldTypeInfo} = props

    return (
        <Select
            label='Field'
            labelId="field-label"
            onChange={(event) =>
                handleFilterChange(index, "field", event.target.value)
            }
            value={filter.field}
        >
            <MenuItem style={{ display: 'none' }} value="">
                <em>None</em>
            </MenuItem>
            {fieldTypeInfo.map((field) => (
                <MenuItem key={field.name} value={field.name}>
                    {field.label ?? field.name}
                </MenuItem>
            ))}
        </Select>
    );

}

export {FieldLabel}
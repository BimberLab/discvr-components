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


type GetOperatorsForFieldFunction = (
    fieldTypeInfo: FieldModel | undefined
) => string[] | undefined


interface OperatorLabelProps {
    filter: FilterType;
    index: number;
    handleFilterChange: HandleFilterChangeFunction;
    fieldTypeInfo: FieldModel[];
    getOperatorsForField: GetOperatorsForFieldFunction;
}

function OperatorLabel(props: OperatorLabelProps): React.ReactElement | null {

    const {filter, index, getOperatorsForField, handleFilterChange, fieldTypeInfo} = props


    return (
        <Select
            label="Operator"    
            labelId="operator-label"

            onChange={(event) =>
                handleFilterChange(index, "operator", event.target.value)
            }
            value={filter.operator}
        >
            <MenuItem style={{ display: 'none' }} value="None">
                <em>None</em>
            </MenuItem>

            {getOperatorsForField(fieldTypeInfo.find(obj => obj.name === filter.field)) ? (
                getOperatorsForField(fieldTypeInfo.find(obj => obj.name === filter.field))?.map((operator) => (
                    <MenuItem key={operator} value={operator}>
                        {operator}
                    </MenuItem>
                ))
            ) : (
                <MenuItem/>
            )}

        </Select>
    );
}

export {OperatorLabel}
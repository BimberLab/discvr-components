import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import AsyncSelect from 'react-select/async';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';



interface FieldModel {
    name: string;
    label: string;
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


type HandleFilterChangeFunction = (
    index: number, 
    key: string, 
    value: string, 
) => FilterType;


interface FilterType {
    field: string;
    operator: string;
    value: string;
}


interface ValueInputProps {
    filter: FilterType;
    index: number;
    highlightedInputs: { field:boolean, operator: boolean, value:boolean }[];
    handleFilterChange: HandleFilterChangeFunction;
    allowedGroupNames?: string[];
    fieldTypeInfo: FieldModel[];
}



function ValueComponent(props: ValueInputProps): React.ReactElement | null {

    const {filter, index, highlightedInputs, handleFilterChange, allowedGroupNames, fieldTypeInfo} = props

    const highlightedSx = {
        border: '2px solid red',
        borderRadius: '4px'
    }

    const FormControlMinWidth = styled(FormControl)(({ theme }) => ({
        minWidth: 200,
        marginRight: theme.spacing(2)
    }))
    
    const TextFieldMinWidth = styled(TextField)(({ theme }) => ({
        minWidth: 200,
        marginRight: theme.spacing(2)
    }))

    return (
        <>
            {
                filter.operator === "in set" ? (
                    <FormControlMinWidth sx={highlightedInputs[index]?.value ? highlightedSx : null} >
                        <InputLabel id="value-select-label">Value</InputLabel>
                        <Select
                            labelId="value-select-label"
                            onChange={(event) =>
                                { handleFilterChange(index, "value", event.target.value); }
                            }
                            value={filter.value}
                        >
                            {allowedGroupNames?.map((gn) => (
                                <MenuItem key={gn} value={gn}>{gn}</MenuItem>
                            ))}
                        </Select>
                    </FormControlMinWidth>
                ) : fieldTypeInfo.find(obj => obj.name === filter.field)?.allowableValues.length > 10 ? (
                    <FormControlMinWidth sx={highlightedInputs[index]?.value ? highlightedSx : null} >
                        <AsyncSelect
                            aria-labelledby={`value-select-${index}`}
                            id={`value-select-${index}`}
                            inputId={`value-select-${index}`}
                            isDisabled={filter.operator === "is empty" || filter.operator === "is not empty"}
                            isMulti={fieldTypeInfo.find(obj => obj.name === filter.field)?.isMultiValued}
                            loadOptions={(inputValue, callback) => {
                                const fieldInfo = fieldTypeInfo.find(obj => obj.name === filter.field);

                                callback(
                                    (fieldInfo?.allowableValues || [])
                                        .filter(value => value.toLowerCase().includes(inputValue.toLowerCase()))
                                        .map(value => ({ label: value, value }))
                                );
                            }}
                            menuPortalTarget={document.body}
                            menuPosition="fixed"
                            menuShouldBlockScroll
                            onChange={(selected: FilterType[]) => { handleFilterChange(index, "value", selected.length > 0 ? selected.map(s => s.value).join(',') : undefined); }}
                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            value={filter.value ? filter.value.split(',').map(value => ({ label: value, value })) : undefined}
                        />
                    </FormControlMinWidth>
                ) : fieldTypeInfo.find(obj => obj.name === filter.field)?.allowableValues.length > 0 ? (
                    <FormControlMinWidth sx={highlightedInputs[index]?.value ? highlightedSx : null} >
                        <InputLabel id="value-select-label">Value</InputLabel>
                        <Select
                            disabled={filter.operator === "is empty" || filter.operator === "is not empty"}
                            labelId="value-select-label"
                            onChange={(event) =>
                                { handleFilterChange(index, "value", event.target.value); }
                            }
                            value={filter.value}
                        >
                            {fieldTypeInfo.find(obj => obj.name === filter.field)?.allowableValues.map(allowableValue => (
                                <MenuItem key={allowableValue} value={allowableValue}>
                                    {allowableValue}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControlMinWidth>
                ) : (
                    <TextFieldMinWidth
                        disabled={filter.operator === "is empty" || filter.operator === "is not empty"}
                        label="Value"
                        onChange={(event) =>
                            { handleFilterChange(index, 'value', event.target.value); }
                        }
                        sx={highlightedInputs[index]?.value ? highlightedSx : null}
                        value={filter.value}
                    />
                )
            }
        </>
    );
}

export { ValueComponent }

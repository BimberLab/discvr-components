import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import AsyncSelect from 'react-select/async';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';



export declare type ValueInputProps = {
    filter: any,
    index: number,
    highlightedInputs: {field:boolean,operator: boolean,value:boolean}[],
    handleFilterChange: any,
    highlightedSx: any,
    allowedGroupNames?: string[],
    fieldTypeInfo: any[],
}



const ValueComponent = (props: ValueInputProps) => {

    const {filter, index, highlightedInputs, handleFilterChange, highlightedSx, allowedGroupNames, fieldTypeInfo} = props
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
                            value={filter.value}
                            onChange={(event) =>
                                handleFilterChange(index, "value", event.target.value)
                            }
                        >
                            {allowedGroupNames?.map((gn) => (
                                <MenuItem value={gn} key={gn}>{gn}</MenuItem>
                            ))}
                        </Select>
                    </FormControlMinWidth>
                ) : fieldTypeInfo.find(obj => obj.name === filter.field)?.allowableValues?.length > 10 ? (
                    <FormControlMinWidth sx={highlightedInputs[index]?.value ? highlightedSx : null} >
                        <AsyncSelect
                            id={`value-select-${index}`}
                            inputId={`value-select-${index}`}
                            aria-labelledby={`value-select-${index}`}
                            menuPortalTarget={document.body}
                            menuPosition={'fixed'}
                            isDisabled={filter.operator === "is empty" || filter.operator === "is not empty"}
                            menuShouldBlockScroll={true}
                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            isMulti={fieldTypeInfo.find(obj => obj.name === filter.field)?.isMultiValued}
                            loadOptions={(inputValue, callback) => {
                                const fieldInfo = fieldTypeInfo.find(obj => obj.name === filter.field);

                                callback(
                                    (fieldInfo?.allowableValues || [])
                                        .filter(value => value.toLowerCase().includes(inputValue.toLowerCase()))
                                        .map(value => ({ label: value, value }))
                                );
                            }}
                            onChange={(selected) => handleFilterChange(index, "value", selected?.length > 0 ? selected.map(s => s.value).join(',') : undefined)}
                            value={filter.value ? filter.value.split(',').map(value => ({ label: value, value })) : undefined}
                        />
                    </FormControlMinWidth>
                ) : fieldTypeInfo.find(obj => obj.name === filter.field)?.allowableValues?.length > 0 ? (
                    <FormControlMinWidth sx={highlightedInputs[index]?.value ? highlightedSx : null} >
                        <InputLabel id="value-select-label">Value</InputLabel>
                        <Select
                            labelId="value-select-label"
                            value={filter.value}
                            disabled={filter.operator === "is empty" || filter.operator === "is not empty"}
                            onChange={(event) =>
                                handleFilterChange(index, "value", event.target.value)
                            }
                        >
                            {fieldTypeInfo.find(obj => obj.name === filter.field)?.allowableValues?.map(allowableValue => (
                                <MenuItem key={allowableValue} value={allowableValue}>
                                    {allowableValue}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControlMinWidth>
                ) : (
                    <TextFieldMinWidth
                        label="Value"
                        sx={highlightedInputs[index]?.value ? highlightedSx : null}
                        value={filter.value}
                        disabled={filter.operator === "is empty" || filter.operator === "is not empty"}
                        onChange={(event) =>
                            handleFilterChange(index, 'value', event.target.value)
                        }
                    />
                )
            }
        </>
    );
}

export default ValueComponent
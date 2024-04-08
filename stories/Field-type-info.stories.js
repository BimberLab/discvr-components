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

export const Primary = {
    args: {

    },
  };
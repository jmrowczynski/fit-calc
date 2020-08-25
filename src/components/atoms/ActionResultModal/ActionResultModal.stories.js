import React from 'react';
import ActionResultModal from './ActionResultModal';

export default {
    component: ActionResultModal,
    title: 'Atoms/Action result modal',
    argTypes: {
        fail: { control: 'boolean' },
    },
};

export const Basic = args => <ActionResultModal {...args} />;
Basic.args = {
    fail: false,
};

import React from 'react'
import { BigDangerButton, SuccessButton } from './composition'
import { DangerBtn, SuccessBtn } from './partialApply'

function DemoFP() {
    return (
        <>
            <SuccessBtn text='Success Btn' />
            <DangerBtn text='DangerButton' />
        </>
    )
}

export default DemoFP
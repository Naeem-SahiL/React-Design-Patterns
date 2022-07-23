import React from 'react'
import { useState } from "react";
import ControlledOnboardingFlow from './ControlledOnboardingFlow';

function Demo() {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = stepData => {
        setOnboardingData({ ...onboardingData, ...stepData })
        setCurrentIndex(currentIndex + 1)

    }
    function First({ gotoNext }) {
        return (
            <>
                <div>First</div>
                <button onClick={() => { gotoNext({ name: 'naeem' }) }}>Next</button>
            </>

        )
    }
    function Second({ gotoNext }) {
        return (
            <>
                <div>Second</div>
                <button onClick={() => { gotoNext({ age: '90' }) }}>Next</button>
            </>

        )
    }
    function Third({ gotoNext }) {
        return (
            <>
                <div>Third</div>
                <h3>Congratulations</h3>
                <button onClick={() => { gotoNext({}) }}>Next</button>
            </>

        )
    }
    function Four({ gotoNext }) {
        return (
            <>
                <div>Four</div>
                <button onClick={() => { gotoNext({ hairColor: 'Black' }) }}>Next</button>
            </>

        )
    }

    const onFinish = (data) => {
        console.log(data)
        alert('onBoarding completed')
    }

    return (
        <>
            <ControlledOnboardingFlow onFinish={onFinish} onNext={onNext} currentIndex={currentIndex}>
                <First />
                <Second />
                {onboardingData.age > 30 && <Third />}
                <Four />
            </ControlledOnboardingFlow>
        </>
    );
}


export default Demo
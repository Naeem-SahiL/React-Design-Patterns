import React from 'react'
export default function ControlledOnboardingFlow({ children, onFinish, currentIndex, onNext }) {
    const gotoNext = stepData => {
        onNext(stepData);
    }

    const currentChild = React.Children.toArray(children)[currentIndex]

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { gotoNext })
    }
    else
        return currentChild;


}
export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color
        }}

        >{text}</button>
    )
}

export const BigDangerButton = props => {
    return (
        <Button {...props} color='red' size='large' />
    )
}
export const SuccessButton = props => {
    return (
        <Button {...props} color='green' />
    )
}
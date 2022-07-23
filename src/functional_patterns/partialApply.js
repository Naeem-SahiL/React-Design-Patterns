export const partiallyApply = (Component, partialProps) => {
    return props =>
        <Component {...partialProps} {...props} />

}

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

export const SuccessBtn = partiallyApply(Button, { color: 'green' })
export const DangerBtn = partiallyApply(Button, { color: 'red', size: 'large' })


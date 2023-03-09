import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: 'fixed',
        width: '100%',
        left: '0',
        bottom: '0'
    }

    return (
        <footer className='py-3 my-4 border-top' style={footerStyle}>
            <p className='mb-0 text-muted'>Copyright &copy; Text Analyzer </p>
        </footer>
    )
}

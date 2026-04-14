'use client'
import React from 'react'

export default function Button({buttonClass, children,...props}) {
    return (
        <button className={buttonClass} {...props}>{children}</button>
    )
}

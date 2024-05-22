import React from 'react'

export {Modal} from './Modal'

export interface Props {
    open: boolean
    handleClose(): any
    children: React.ReactNode
}

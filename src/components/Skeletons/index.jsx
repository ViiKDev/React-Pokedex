import { Skeleton } from '@mui/material'
import React from 'react'
import { Container } from '@mui/system'

export const Skeletons = () => {
    return (
        <>
            <Container maxWidth="xxl">
                <Skeleton sx={{ marginBottom: "1em" }} variant="rounded" width="100%" height={150} />
                <Skeleton sx={{ marginBottom: "1em" }} variant="rounded" width="100%" height={150} />
                <Skeleton sx={{ marginBottom: "1em" }} variant="rounded" width="100%" height={150} />
                <Skeleton sx={{ marginBottom: "1em" }} variant="rounded" width="100%" height={150} />
                <Skeleton sx={{ marginBottom: "1em" }} variant="rounded" width="100%" height={150} />
            </Container>
        </>
    )
}

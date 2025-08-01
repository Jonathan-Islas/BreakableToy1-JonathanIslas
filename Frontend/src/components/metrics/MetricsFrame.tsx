import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

export const MetricsFrame = () => {


    return (
        <Paper
            sx={{
                height: '150px',
                width: { xs: '80%', md: '65%' },
                marginBottom: { xs: '1rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '1rem',
                textAlign: 'center'
            }}
        >
            <Typography
                variant={'h3'}
                fontWeight={'800'}
                sx={{
                    background: 'linear-gradient(54deg,rgba(13, 84, 27, 1) 1%, rgba(87, 199, 133, 1) 47%, rgba(206, 245, 169, 1) 100%);',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    width: { sm: '200px', md: 'fit-content', lg: 'fit-content' },
                    marginRight: '1rem'
                }}
            >
                Metrics Coming Soon
            </Typography>
        </Paper>
    )
}

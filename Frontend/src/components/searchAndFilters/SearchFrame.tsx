import React from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography, type SelectChangeEvent } from '@mui/material'

export const SearchFrame = () => {

    const [priority, setPriority] = React.useState('');
    const [taskState, setTaskState] = React.useState('');

    const changePriority = (event: SelectChangeEvent) => {
        setPriority(event.target.value as string);
    };
    const changeTaskState = (event: SelectChangeEvent) => {
        setTaskState(event.target.value as string);
    };

    return (
        <Paper
            sx={{
                height: '150px',
                width: { xs: '100%', sm: '100%', md: 'fit-content' },
                borderRadius: '1rem',
                padding: '1rem',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
            }}
        >
            <Typography
                variant={'h2'}
                fontWeight={'800'}
                sx={{
                    background: 'linear-gradient(54deg,rgba(13, 84, 27, 1) 1%, rgba(87, 199, 133, 1) 47%, rgba(206, 245, 169, 1) 100%);',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
            >
                ToDo
            </Typography>
            <Box
                width={'100%'}
                sx={{
                    padding: '1rem',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <TextField
                    label={'Task name'}
                    sx={{ minWidth: { xs: '80%', sm: '220%', md: '500px' } }}
                >

                </TextField>
                <FormControl sx={{ minWidth: '150px' }}>
                    <InputLabel id={'priority-filter-selection'}>Priority</InputLabel>
                    <Select
                        value={priority}
                        labelId={'priority-filter-selection'}
                        label={'Priority'}
                        onChange={changePriority}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'low'}>Low</MenuItem>
                        <MenuItem value={'medium'}>Medium</MenuItem>
                        <MenuItem value={'high'}>High</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: '150px' }}>
                    <InputLabel id={'taskState-filter-selection'}>ToDo State</InputLabel>
                    <Select
                        value={taskState}
                        labelId={'taskState-filter-selection'}
                        label={'Task State'}
                        onChange={changeTaskState}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'done'}>Done</MenuItem>
                        <MenuItem value={'undone'}>Undone</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant={'contained'}
                    size={'large'}
                >
                    Search
                </Button>
            </Box>
        </Paper>
    )
}

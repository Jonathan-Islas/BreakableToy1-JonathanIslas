import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography, useMediaQuery, useTheme, type SelectChangeEvent } from '@mui/material'
import { fetchFilteredToDos } from '../../services/api/ToDoAPI';
import { useToDos } from '../../services/api/ToDoContext';

export const SearchFrame = () => {
    const filterToDos = useToDos().filterToDos;
    const [priority, setPriority] = useState<number | string>('all');
    const [toDoState, setToDoState] = useState<boolean | string>('all');
    const [toDoText, setToDoText] = useState<string>('');
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    // const changePriority = (event: SelectChangeEvent) => {
    //     setPriority(event.target.value as string);
    // };
    // const changeTaskState = (event: SelectChangeEvent) => {
    //     setTaskState(event.target.value as string);
    // };

    const handleSubmit = async () => {
        await filterToDos(toDoText, priority, toDoState);
    }

    return (
        <Paper
            sx={{
                height: {md: '100px', lg:'150px'},
                width: { xs: '100%', sm: '100%', md: 'fit-content'},
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
            <form>
                <Box
                    width={'100%'}
                    sx={{
                        padding: '1rem',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <Box
                        display={'flex'}
                        width={'fit-content'}
                        alignItems={'center'}
                        gap={'1rem'}
                    >
                        <Typography
                            variant={'h2'}
                            fontWeight={'800'}
                            sx={{
                                background: 'linear-gradient(54deg,rgba(13, 84, 27, 1) 1%, rgba(87, 199, 133, 1) 47%, rgba(206, 245, 169, 1) 100%);',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                width: { sm: '150px', md: '150px', lg: 'fit-content' },
                                marginRight:'1rem'
                            }}
                        >
                            ToDo
                        </Typography>
                        <TextField
                            label={'ToDo'}
                            id={'toDoText'}
                            autoFocus
                            fullWidth
                            multiline
                            value={toDoText}
                            type={'text'}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setToDoText(event.target.value);
                            }}
                            slotProps={{ htmlInput: { maxLength: 120 } }}
                        />
                    </Box>
                    <Box
                        display={'flex'}
                        gap={'1rem'}
                    >
                        <FormControl sx={{ minWidth: {xs: '100px',md: '150px'} }}>
                            <InputLabel id={'priority-filter-selection'}>Priority</InputLabel>
                            <Select
                                value={priority}
                                labelId={'priority-filter-selection'}
                                label={'Priority'}
                                onChange={(event) => setPriority(event.target.value)}
                            >
                                <MenuItem value={'all'}>All</MenuItem>
                                <MenuItem value={0}>Low</MenuItem>
                                <MenuItem value={1}>Medium</MenuItem>
                                <MenuItem value={2}>High</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: {xs: '100px',md: '150px'} }}>
                            <InputLabel id={'taskState-filter-selection'}>ToDo State</InputLabel>
                            <Select
                                value={toDoState}
                                labelId={'taskState-filter-selection'}
                                label={'ToDo State'}
                                onChange={(event) => setToDoState(event.target.value)}
                            >
                                <MenuItem value={'all'}>All</MenuItem>
                                <MenuItem value={'true'}>Done</MenuItem>
                                <MenuItem value={'false'}>Undone</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant={'contained'}
                            size={isSmallScreen ? 'small' : 'large'}
                            onClick={handleSubmit}
                            sx={{
                                minWidth: {sm: '100px', md:'150px'},
                            }}
                        >
                            Search
                        </Button>
                    </Box>
                </Box>
            </form>
        </Paper>
    )
}

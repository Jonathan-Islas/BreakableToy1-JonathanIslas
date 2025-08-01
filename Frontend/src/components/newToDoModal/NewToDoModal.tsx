import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { FloatingButton } from "./floatingButton";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { FieldChangeHandler } from "@mui/x-date-pickers/internals";

export const NewToDoModal = () => {
    //Modal render
    const [openDialog, setOpenDialog] = useState(false);
    const handleClose = () => setOpenDialog(false);

    // Modal Form 
    const [priority, setPriority] = useState('');
    const [toDoText, setToDoText] = useState('');
    const [dueDate, setDueDate] = useState<Dayjs | null>(dayjs());

    const changePriority = (event: SelectChangeEvent) => {
        setPriority(event.target.value);
    };

    const handleCancel = () => {
        setOpenDialog(false);
        setToDoText('');
        setPriority('');
    };


    return (
        <>
            <FloatingButton openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <Dialog
                open={openDialog}
                onClose={handleClose}
                sx={{
                    '& .MuiDialog-paper': { height: 'fit-content' }
                }}
            >
                <DialogTitle>New ToDo</DialogTitle>
                <DialogContent sx={{ paddingBottom: 0 }}>
                    <DialogContentText>
                        Create your new ToDo task by filling the form!
                    </DialogContentText>
                    <form /*onSubmit={handleSubmit}*/>
                        <Box
                            sx={{
                                padding: '1rem',
                                boxSizing: 'border-box',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            <TextField
                                label={'ToDo'}
                                fullWidth
                                multiline
                                value={toDoText}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setToDoText(event.target.value);
                                }}
                            >

                            </TextField>
                            <FormControl fullWidth>
                                <InputLabel id={'priority-filter-selection'}>Priority</InputLabel>
                                <Select
                                    value={priority}
                                    labelId={'priority-filter-selection'}
                                    label={'Priority'}
                                    onChange={changePriority}
                                >
                                    <MenuItem value={'low'}>Low</MenuItem>
                                    <MenuItem value={'medium'}>Medium</MenuItem>
                                    <MenuItem value={'high'}>High</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        disablePast
                                        value={dueDate}
                                        label={'Due Date'}
                                        onChange={(newValue) => setDueDate(newValue)}

                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Box>
                        <DialogActions>
                            <Button onClick={handleCancel}>Cancel</Button>
                            <Button type="submit" color="secondary">Create</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
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
import axios from "axios";
import type { ToDo } from "../../utils/ToDo";
import { createToDo } from "../../services/api/ToDoAPI";
import { useToDos } from "../../services/api/ToDoContext";

interface UpdateToDoModalProps {
    todo?: ToDo,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const UpdateToDoModal: React.FC<UpdateToDoModalProps> = ({todo, open = false, setOpen}) => {
    // Get refreshToDos from ToDoContext
    const refreshToDos = useToDos().refreshToDos;
    console.log()
    //Modal render
    const handleClose = () => setOpen(false);

    // Modal Form 
    const [priority, setPriority] = useState<number | null>(0);
    const [toDoText, setToDoText] = useState('todo.text');
    const [dueDate, setDueDate] = useState<Dayjs | null>(dayjs('2025'));

    useEffect(() => {
        setPriority(todo?.priority);
        setToDoText(todo?.text);
        setDueDate(dayjs(todo?.dueDate));
    }, [])
    

    const changePriority = (event: SelectChangeEvent) => {
        setPriority(parseInt(event.target.value));
    };

    const handleCloseWithCleanUp = () => {
        setOpen(false);
        setToDoText('');
        setPriority(0);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formJson: ToDo = {
            id: todo.id,
            text: toDoText,
            priority: priority,
            dueDate: dueDate ? dueDate.format('dddd DD, MMMM YYYY').toString() : null,
            createdDate: todo.createdDate,
            isFinished: false
        };


        try {
            await createToDo(formJson);
        } catch (err) {
            console.error(err);
        };

        await refreshToDos();
        handleCloseWithCleanUp();
    };


    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    '& .MuiDialog-paper': { height: 'fit-content' }
                }}
            >
                <DialogTitle>Update ToDo</DialogTitle>
                <DialogContent sx={{ paddingBottom: 0 }}>
                    <DialogContentText>
                        Update your new ToDo task by filling the form!
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <FormControl
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
                                id={'toDoText'}
                                autoFocus
                                required
                                fullWidth
                                multiline
                                value={toDoText}
                                type={'text'}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setToDoText(event.target.value);
                                }}
                                slotProps={{ htmlInput: { maxLength: 120 } }}
                                helperText={'Characters left: ' + (120 - toDoText.length)}
                            />
                            <FormControl required fullWidth>
                                <InputLabel id={'priority-filter-selection'}>Priority</InputLabel>
                                <Select
                                    value={priority}
                                    labelId={'priority-filter-selection'}
                                    label={'Priority'}
                                    onChange={changePriority}
                                >
                                    <MenuItem value={0}>Low</MenuItem>
                                    <MenuItem value={1}>Medium</MenuItem>
                                    <MenuItem value={2}>High</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl required fullWidth>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        disablePast
                                        value={dueDate}
                                        label={'Due Date'}
                                        onChange={(newValue) => setDueDate(newValue)}

                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </FormControl>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" color="secondary">Update</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default UpdateToDoModal;

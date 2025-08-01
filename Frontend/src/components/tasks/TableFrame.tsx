import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import {fetchToDos, apiClient} from '../../services/api/ToDoAPI';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { type ToDo } from '../../utils/ToDo';
//Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// 120 char string 
// Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat

// Priority table cell formatting
const getPriorityProps = (priority: number | null) => {
    const priorityData = {
        0: { label: 'Low', color: 'success.main' },
        1: { label: 'Medium', color: 'warning.main' },
        2: { label: 'High', color: 'error.main' }
    };
    return priorityData[priority as keyof typeof priorityData] ||
        { label: 'Unknown', color: 'text.secondary' };
};



export const TableFrame = () => {
    const [todos, setToDos] = useState<ToDo[]>([]);
    const [page, setPage] = React.useState(0);

    // load and fetch function for all todos
    const loadToDos = async () => {
        const todos = await fetchToDos();
        setToDos(todos);
        console.log('todos use effect', todos)
    }

    // first mount todos load
    useEffect(() => {
        loadToDos();
    }, []);

    // Pagination for MUI Table 
    const handlePageChange = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    // ToDo Delete Button action
    const handleDeleteClick = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this ToDo?')) {
            const response = await apiClient.delete<string>(`todos/${id}`);
            loadToDos()
        }
    }

    return (
        <TableContainer component={Paper}
            sx={{
                height: '100%',
                width: '100%',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <Table stickyHeader sx={{ width: '100%', }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Status</TableCell>
                        <TableCell>Task Name</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Due Date</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos
                        // .slice(page * 10, page * 10 + 10)
                        .map((toDo) => (
                            <TableRow
                                key={toDo.id}
                                hover
                            >
                                <TableCell padding={'checkbox'} sx={{ paddingLeft: 2 }}>
                                    <Checkbox
                                        color={'primary'}
                                        checked={false}
                                    />
                                </TableCell>
                                <TableCell
                                    component={'th'}
                                    scope={'row'}
                                >
                                    {toDo.text}
                                </TableCell>
                                <TableCell sx={{ color: getPriorityProps(toDo.priority).color }}>{getPriorityProps(toDo.priority).label}</TableCell>
                                <TableCell>{toDo.dueDate}</TableCell>
                                <TableCell>
                                    <Box>
                                        <IconButton aria-label={'edit'} disabled>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label={'delete'} onClick={() => handleDeleteClick(toDo.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                height={'150px'}
                rowsPerPageOptions={[10]}
                rowsPerPage={10}
                component={'div'}
                count={todos.length}
                page={page}
                onPageChange={handlePageChange}
            />
        </TableContainer>
    )
}

export default TableFrame;
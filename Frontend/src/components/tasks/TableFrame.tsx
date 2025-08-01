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
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
// import { fetchToDos } from '../../utils/GetToDos';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 120 char string 
// Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat

// const StyledTableCell = styled(TableCell)({
//     borderRight: '1px solid #dcedc8'
// });


interface ToDo {
    id: string;
    text: string;
    dueDate: number;
    status: boolean;
    finishedDate?: number;
    priority: number;
    createdDate: number;
}

export const TableFrame = () => {
    const [toDoList, setToDoList] = useState([])

    const [todos, setTodos] = useState<ToDo[]>([]);

    // useEffect(() => {
    //     const todos = fetchToDos();
    //     setToDoList(todos);
    //     console.log('todos use effect', todos)
    // }, []);

    const [page, setPage] = React.useState(0);

    const handlePageChange = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    useEffect(() => {
        const fetchTodos = async () => {

            try {
                const response = await axios.get<ToDo[]>('http://localhost:9090/api/todos');
                setTodos(response.data);
                console.log(todos);
            } catch (err) {
                console.error(err); 
            };
        }
        fetchTodos();
    }, []);

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
                                <TableCell padding={'checkbox'}>
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
                                <TableCell>{toDo.priority}</TableCell>
                                <TableCell>{new Date(toDo.dueDate).toLocaleString()}</TableCell>
                                <TableCell>{toDo.id}</TableCell>
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
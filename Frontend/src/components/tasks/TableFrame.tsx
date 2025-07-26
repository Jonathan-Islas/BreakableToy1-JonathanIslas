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
import React from 'react';

// 120 char string 
// Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat

// const StyledTableCell = styled(TableCell)({
//     borderRight: '1px solid #dcedc8'
// });

const dummyDueDate: number = new Date('2025-07-28T10:30:00.000Z').getTime();

interface ToDo {
    id: string;
    text: string;
    dueDate: number;
    status: boolean;
    finishedDate?: number;
    priority: number;
    createdDate: number;
}

const dummyTodo: ToDo = {
    id: '19DyX0',
    text: 'Take out the trash pretty pls',
    dueDate: dummyDueDate,
    status: false,
    priority: 0,
    createdDate: Date.now(),
}

const toDoList: ToDo[] = [
    dummyTodo,
    { id: 'Pr3sD', text: 'Feed them CATSSS', dueDate: dummyDueDate, status: false, priority: 1, createdDate: Date.now() },
    { id: 'J8iOd', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd1', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd12', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd3', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd4', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd5', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd6', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd7', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd8', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd9', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd10', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd11', text: 'Play some games', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() },
    { id: 'J8iOd12', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat', dueDate: dummyDueDate+18900, status: false, priority: 2, createdDate: Date.now() }
]


export const TableFrame = () => {

    const [page, setPage] = React.useState(0);

    const handlePageChange = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

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
            <Table stickyHeader sx={{ width: '100%', height: '90%' }}>
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
                    {toDoList
                    .slice(page * 10, page * 10 + 10 )
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
                rowsPerPageOptions={[10]}
                rowsPerPage={10}
                component={'div'}
                count={toDoList.length}
                page={page}
                onPageChange={handlePageChange}
            />
        </TableContainer>
    )
}

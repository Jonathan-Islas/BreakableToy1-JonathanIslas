import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import type { FunctionComponent } from 'react';

interface FloatingButtonProps {
    openDialog: boolean;
    setOpenDialog: any;
}


export const FloatingButton: FunctionComponent<FloatingButtonProps> = ({openDialog, setOpenDialog}) => {

    const handleClick = (openDialog: boolean) => {
        setOpenDialog(!openDialog);
    }


    return (
        <Fab
            color={'primary'}
            aria-label={'New ToDo'}
            variant={'extended'}
            onClick={() => handleClick(openDialog)}
            sx={{
                position: 'absolute',
                left: '85%',
                top: '90%',
                '@media(max-width: 600px)': {
                    left: '70%',
                }
            }}
        >
            <AddIcon/>
            New ToDo
        </Fab>
    )
};

export default FloatingButton;
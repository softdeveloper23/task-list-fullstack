import { Button, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react'

export const Task = ({ task }) => {
    const { id, name, completed } = task;
    const [isCompleted, setIsCompleted] = useState(completed);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleUpdateTaskCompletion = () => {
        setIsCompleted((prev) => !prev);
    }

    const handleDeleteTask = () => {
        console.log('Deleting task:', id);
    }

    return (
    <div>
        <Checkbox checked={isCompleted} onChange={handleUpdateTaskCompletion} />
        <Typography variant='h4'>{name}</Typography>
        <Button variant='contained' onClick={() => setIsDialogOpen(true)}></Button>
        <Button variant='contained' onClick={handleDeleteTask}></Button>
    </div>
    )
}

//import React from 'react';
import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

// export default function TaskForm() {
//     return (
//       <div>
//         TaskForm
//       </div>
//     )
// }

export default function TaskForm() {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   //console.log(task);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(task);

    setLoading(true);

    const res = await fetch('http://localhost:4000/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: { "Content-type": "application/json" }
    });
    const data = await res.json();
    console.log(data);

    setLoading(false);

    navigate('/');
  };

  const handleChange = e => {
    //console.log(e.target.name, e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value });
    //console.log(task);
  }
  // const handleChange = e =>
  //   setTask({...task,[e.target.name]:e.target.value});

  return (
    <Grid container direction='column' alignItems='center' justifyContent='center'>
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }}
          style={{
            backgroundColor: '#1e272e',
            padding: '1rem'
          }}>
          <Typography variant='5' textAlign='center' color='white' >Create Task</Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant='filled'
                /*placeholder='texting'*/
                label='Write your title'
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}
                name='title'
                onChange={handleChange}
                inputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
              />
              <TextField
                variant='filled'
                label='Write your description'
                multiline
                rows={4}
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}
                name='description'
                onChange={handleChange}
                inputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
              />
              <Button
              variant='contained'
              color='primary'
              type='submit'
              disabled={!task.title || !task.description}
              >
                {/*Save*/}
                {/*{loading ? 'Loading...': 'Create'}*/}
                {loading ? <CircularProgress
                  color='inherit'
                  size={24}
                /> : 'Create'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  )
}
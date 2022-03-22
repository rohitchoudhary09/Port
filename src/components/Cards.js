import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Cards = (props) => {

  return (
    <div>
        <Container>
            <Toolbar>
                <Card sx={{ maxWidth: 450, backgroundColor: "white" }}>
                    <CardActionArea >
                    <CardMedia
                        component="img"
                        height="240"
                        image={props.img}
                        alt="alt"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {props.para}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button 
                    size="small" 
                    color="primary">
                        Project Link
                    </Button>
                    </CardActions>
                </Card>
            </Toolbar>
        </Container>
    </div>
  )
}

export default Cards
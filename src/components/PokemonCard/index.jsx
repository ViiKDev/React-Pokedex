import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function PokemonCard({ name, image, types }) {

    const typeHandler = () => {
        let allTypes = ""
        for (let i = 0; i < types.length; i++) {
            if (i > 0) {
                allTypes += " | "
            }
            allTypes += types[i].type.name
        }
        return allTypes
    }

    return (
        <Card sx={{ maxWidth: 345 }} className={types[0].type.name}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt="Pokemon"
                />
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h5" component="div">
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="div">
                            {typeHandler()}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type DetailsCardType = {
  img: string;
  artistName: string;
  albumName: string;
  trackName: string;
}

const DetailsCard = ({ img, artistName, albumName, trackName }: DetailsCardType) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={img}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Artist - {artistName} | Song - {trackName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Album - {albumName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DetailsCard

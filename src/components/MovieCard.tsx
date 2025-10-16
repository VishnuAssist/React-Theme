import { Card, CardContent, CardMedia, Typography, Box, Rating } from "@mui/material";
// import backup from "../assets/placeholder.svg";
import { useNavigate } from "react-router-dom";

interface MoviesCardProps {
  id:number;
  image: string;
  title: string;
  rating: number;
  outOff: number;
  link: string;
  description:string;
}

export default function MoviesCard({
  id,
  image,
  title,
  rating,
  // description,
  outOff,
  // link,
}: MoviesCardProps) {
    const navigate = useNavigate();

  const poster = image ? `https://image.tmdb.org/t/p/original${image}` : "/placeholder.svg"; 

  return (
    <Card
      sx={{
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
       onClick={() => navigate(`/Movie/${id}`)}
    >
      {/* Poster */}
      <CardMedia
        component="img"
        height="150" // 🔥 Reduced height (was 180)
        image={poster}
        alt={title}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        {/* ✅ Title */}
        <Typography variant="subtitle1" fontWeight="bold" noWrap>
          {title}
        </Typography>

        {/* ✅ Rating only (description removed) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Rating
            value={rating / 2}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="caption" color="text.secondary">
            {rating.toFixed(1)} / {outOff}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

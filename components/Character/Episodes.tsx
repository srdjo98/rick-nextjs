import { Box, Paper, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { EpisodeProp } from "@/pages/[id]";

interface Props {
  episodes: EpisodeProp[];
}

const Episode = ({ episodes }: Props) => (
  <>
    <Typography variant="h4" sx={{ pt: "35px" }}>
      Featured Episodes
    </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "0.625rem",
        pt: "1.563rem",
      }}
    >
      {episodes?.slice(0, 3).map((e: EpisodeProp) => (
        <Paper
          elevation={7}
          sx={{ width: "15.625rem", height: "auto" }}
          key={e.name}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "white", bgcolor: "#728C69" }}
          >
            {e.episode}
          </Typography>
          <Box>
            <Typography sx={{ fontSize: "17px" }}>
              Episode - {e.name}
            </Typography>
            <PlayCircleIcon sx={{ fontSize: "3.75rem" }} />
          </Box>
          <Typography sx={{ color: "white", bgcolor: "black" }}>
            {e.air_date}
          </Typography>
        </Paper>
      ))}
    </Box>
  </>
);

export default Episode;

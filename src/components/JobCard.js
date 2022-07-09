import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Box } from "@mui/material";
import SkillStack from "./SkillStack";

export default function JobCard({ job }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "action.hover",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" textAlign="center">
          {job.title}
        </Typography>
        <Divider variant="middle" />
        <SkillStack skills={job.skills} />

        <Typography
          variant="body2"
          sx={{
            fontSize: 13,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
          }}
        >
          {job.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" size="small" color="warning">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

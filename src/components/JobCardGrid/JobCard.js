import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import SkillStack from "./SkillStack";
import { Link, useLocation } from "react-router-dom";


export default function JobCard({ job }) {


  let location = useLocation();

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
        <SkillStack skills={job.skills} total={3} />

        <Typography
          variant="body2"
          sx={{
            fontSize: 13,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
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
          pt: 0,
        }}
      >
        <Link
          to={`/jobs/${job.id}`}
          style={{ textDecoration: "none" }}
          state={{ backgroundLocation: location }}
        >
          <Button
            variant="contained"
            size="small"
            color="warning"
          >
            Learn More
          </Button>
        </Link>
      </CardActions>
      
    </Card>
  );
}

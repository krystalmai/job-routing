import {
  Modal,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SkillStack from "./SkillStack";
import { LocationOn, AttachMoney, Info } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById, getJobs } from "../../helpers/jobs";

function JobDetails() {
  const style = {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    bgcolor: "#343434",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const navigate = useNavigate();
  const handleClose = () => navigate(-1);

  const [job, setJob] = useState(null);
  let { jobId } = useParams();
 

  useEffect(() => {
  

    getJobs().then((jobs) => {
      
      setJob(getJobById(jobs, jobId));
      
    });
  }, [jobId]);

  if (!job) {
    return null;
  }
  return (
    <Modal open={true} onClose={handleClose}>
      <Card sx={style}>
        <CardContent sx={{ maxWidth: 500, height: 400, overflow: "auto" }}>
          <Typography variant="h5" component="div" textAlign="center">
            {job.title}
          </Typography>
          <Divider variant="middle" />
          <SkillStack skills={job.skills} />
          <Divider variant="middle" mb={2} />

          <List
            sx={{
              width: "100%",
              maxWidth: 500,
              bgcolor: "background.paper",
              
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "warning.main" }}>
                  <LocationOn />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="City" secondary={job.city} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "warning.main" }}>
                  <AttachMoney />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Salary"
                secondary={`From ${job.salaryLow} to ${job.salaryHigh}`}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "warning.main" }}>
                  <Info />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Description" secondary={job.description} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Modal>
  );
}

export default JobDetails;

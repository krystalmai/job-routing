import apiService from "../app/apiService";

export const getJobById = (jobsArray, id) => {
  return jobsArray.find((job) => job.id === id);
}

export const getJobs = async () => {
  try {
    let jobs = await apiService.get("/jobs");
    return jobs.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchJob = (jobsArr, string) => {
  return jobsArr.find((job) => job.title.includes(string.toLowerCase().trim()))
}
import  axios  from 'axios';
export async function getProjects(params) {
    try {
      const res = await axios(
        "https://fifty-candies-sneeze.loca.lt/api/v1/projects",
      );
      console.log("res", res.data.data.data);
    } catch (error) {
      console.log(error?.response?.data || error?.errors?.email?.[0]);
    } }
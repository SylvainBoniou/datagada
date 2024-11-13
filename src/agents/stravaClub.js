import axios from 'axios';

import { fetchAllResults } from '../helpers/fetchHelpers';

const baseUrl = 'https://www.strava.com/api/v3';
const idclub = '647074';

export default {
  getAllMembers: idclub => fetchAllResults(`${baseUrl}/clubs/${idclub}/members`),
  getAllActivities: idclub => fetchAllResults(`${baseUrl}/clubs/${idclub}/activitiesvities`),
};

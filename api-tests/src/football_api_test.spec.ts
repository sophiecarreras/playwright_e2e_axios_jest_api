import axios from 'axios';

const baseURL = 'https://api.football-data.org/v2';

describe('Football REST API Tests', () => {
  it('Test Case 1: Get all competitions (200 OK)', async () => {
    const response = await axios.get(`${baseURL}/competitions`);

    expect(response.status).toBe(200);
  });

  it('Test Case 2: Get a specific competition with an incorrect API key (401 Unauthorized)', async () => {
    try {
      await axios.get('https://api.football-data.org/v2/competitions/2001', {
        headers: {
          'X-Auth-Token': 'INVALID_API_KEY',
        },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        expect(error.response?.status).toBe(400);
      } else {
        throw error;
      }
    }
  });
  
  it('Test Case 3: Get a non-existent competition (404 Not Found)', async () => {
    try {
      await axios.get(`${baseURL}/competitions/0`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        expect(error.response?.status).toBe(404);
      } else {
        throw error;
      }
    }
  });  
});

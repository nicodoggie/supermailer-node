const qs = require('query-string');

module.exports = async function logs(email, offset = 0, limit = 100) {
  if (typeof email !== 'string') {
    throw new Error(
      `Supermailer.recipients.logs first parameter must be the current email of the user you want to get the logs for.`
    );
  }

  if (typeof offset !== 'number') console.log(`Note: Offset can be passed as second parameter, defaulting to 0...`);
  if (typeof limit !== 'number') console.log(`Note: Limit can be passed as third parameter, defaulting to 100...`);

  try {
    const payload = { filterBy: JSON.stringify({ email }), page: offset, pageSize: limit };
    const query = qs.stringify(payload);
    const response = await this.api.get(`/api/supermailer/logs?${query}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
    return false;
  }
};

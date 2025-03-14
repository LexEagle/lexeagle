=
const validToken = process.env.ADMIN_ACCESS_TOKEN;

exports.handler = async (event, context) => {

  const { queryStringParameters } = event;
  const token = queryStringParameters.token;


  if (token === validToken) {

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Access granted to /admin!" }),
    };
  } else {

    return {
      statusCode: 302,  
      headers: {
        Location: '/',
      },
      body: JSON.stringify({ message: "Access denied. Redirecting to login." }),
    };
  }
};

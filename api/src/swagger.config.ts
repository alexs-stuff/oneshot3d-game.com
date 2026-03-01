export default {
  openapi: "3.0.0",
  info: {
    title: "OneShot3D Website API Docs",
    version: "1.0.0",
    description: "a description i dunno",
  },
  paths: {
    "/countdown": {
      get: {
        tags: ["Countdown"],
        summary: "gets the current countdown info",
      },
    },
    "/countdown/update": {
      post: {
        tags: ["Countdown"],
        summary: "updates the current countdown info",
        parameters: [
          {
            name: "x-api-key",
            in: "query",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
      },
    },
    "/bugs/report": {
      post: {
        tags: ["Bug Reporting"],
        summary: "endpoint for submitting bug reports",
        responses: {
          200: {
            description: "bug report sent successfully",
          },
          400: {
            description: "bug report wasnt able to be sent",
          },
        },
      },
    },
  },
};

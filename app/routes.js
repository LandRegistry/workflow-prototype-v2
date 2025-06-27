//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();
require('dotenv').config();

// ***********************************************
// Flow routes
// ***********************************************

router.use(/\/example-flow\/v([0-9]+)/, (req, res, next) => {
  return require(`./views/example-flow/v${req.params[0]}/_routes`)(req, res, next);
});

router.use("/defer-time/", (req, res, next) => {
  return require("./views/defer-time/_routes")(req, res, next);
});

router.use("/defer-time-dates/", (req, res, next) => {
  return require("./views/defer-time-dates/_routes")(req, res, next);
});

router.use("/defer-time-dates-v3/", (req, res, next) => {
  return require("./views/defer-time-dates-v3/_routes")(req, res, next);
});

router.use("/defer-time-dates-v3-1/", (req, res, next) => {
  return require("./views/defer-time-dates-v3/_routes")(req, res, next);
});

router.use("/progress-later/", (req, res, next) => {
  return require("./views/progress-later/_routes")(req, res, next);
});

// router.use("/quiz/", (req, res, next) => {
//   return require("./views/quiz/_routes")(req, res, next);
// });

// ***********************************************
// Claude API route
// ***********************************************

router.post('/api/claude', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        messages
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API Error:', errorData);
      return res.status(response.status).json({
        error: 'Failed to get response from Claude',
        details: errorData
      });
    }

    const data = await response.json();
    const claudeResponse = data.content[0].text;

    res.json({ response: claudeResponse });

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: error.message
    });
  }
});

module.exports = router;

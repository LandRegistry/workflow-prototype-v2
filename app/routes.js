//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();
require('dotenv').config();



// Show password form
router.get('/index', function (req, res) {
  const authenticated = req.cookies.authenticated === 'true'
  res.render('index', { authenticated: authenticated })
})

// Handle password submission
router.post('/index', function (req, res) {
  const password = req.body.password
  
  if (password === 'workf1ow') {//<<<<<<<<<< THE PASSWORD <<<<<<<<<<<
    
    // Password correct - set cookie for 3 years
    res.cookie('authenticated', 'true', {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 3
    })
    res.render('index', { authenticated: true })

  } else {

    // Password incorrect - show error
    res.render('index', { error: true, authenticated: false })

  }
})

//to delete the cookie, uncomment this code (the 2 forward slashes), and visit http://localhost:3000/delete-cookie (then recomment it)
//router.get('/delete-cookie', function (req, res) {
  //res.clearCookie('authenticated')
  //res.redirect('/index')
//})

/*
// Show password page or protected content
router.get('/password', function (req, res) {
  // Check if user has valid authentication cookie
  const authenticated = req.cookies.authenticated === 'true'
  
  res.render('password', {
    authenticated: authenticated
  })
})

// Handle homepage password 
router.post('/password', function (req, res) {
  const password = req.body.password
  
  switch (password) {
    case 'workf1ow': //<<<<<<<<<<<<<< THIS IS THE PASSWORD
      // Password correct - set cookie for 3 years
      res.cookie('authenticated', 'true', {
        //maxAge: 1000 * 60 * 60 * 24 * 365 * 3, // 3 years in milliseconds
        httpOnly: true
      })
      res.render('password', {
        authenticated: true
      })
      break
    
    default:
      // Password incorrect - show error
      res.render('password', {
        error: true,
        authenticated: false
      })
      break
  }
})
*/

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

router.use("/capability-based/", (req, res, next) => {
  return require("./views/capability-based/_routes")(req, res, next);
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

// Server file - Defines process and TCP port

/* ==========================================================================
   Requires
   ========================================================================== */
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controller/controller')
const PORT = process.env.PORT || 9090;
const app = express();

/* ==========================================================================
   Middleware
   ========================================================================== */

// static route
app.use(express.static('public'));

// access to req.body
app.use(express.urlencoded({extended: true}));

// set views engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set routes
app.use(routes);

/* ==========================================================================
   Start Server
   ========================================================================== */

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
})

const app = require('./app');












const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});

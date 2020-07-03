const server = require("./router/approuter");

const PORT = process.env.PORT || 5000; // change to the port you would like to use


server.use((err, req, res, next) => { // catchall error middleware.  
	console.log(err)
	res.status(500).json({
		message: "Catch All Error Handler: Something went wrong",
	})
})

server.listen(PORT, () => { 
  console.log(`\n== API running on port ${PORT} ==\n`);
});
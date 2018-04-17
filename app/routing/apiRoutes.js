app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});
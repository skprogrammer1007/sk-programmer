const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ConnectToServer = require('./Databases/Connection');

ConnectToServer();
app.use(express.json())

app.use("/api/auth/bloger", require("./Routes/BlogersAuth"))
app.use("/api/auth/user", require("./Routes/UserAuth"))
app.use("/api/auth/authority", require("./Routes/Authority"))
// authority need an update

app.use("/api/blog/", require("./Routes/Blogs/BlogerBlogs"))
app.use("/api/blog/admin", require("./Routes/Blogs/AuthorityBlogs"))
app.use("/api/blog/user", require("./Routes/Blogs/UserBlogs"))
app.use("/api/all/", require("./Routes/Blogs/AllBlogs"))
// app.use("/api/auth/authority", require("./Routes/AuthorityAuth"))

app.listen(port, () => { console.log(`sk-programmerBackend is listning at ${port}`) })
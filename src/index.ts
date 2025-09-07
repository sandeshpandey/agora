import connectDB from "./config/db";
import app from "./server";

const PORT = 3000;


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
});
import express, { Request, Response } from 'express';

const app = express();
const PORT = 8000;

// JSON middleware
app.use(express.json());

// Root GET route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Express TypeScript server is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

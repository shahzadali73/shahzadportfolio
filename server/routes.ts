import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve CV download
  app.get('/shahzad-ali-cv.pdf', (req, res) => {
    const cvPath = path.join(__dirname, '../public/shahzad-ali-cv.pdf');
    res.download(cvPath, 'Shahzad_Ali_Frontend_Developer_CV.pdf', (err) => {
      if (err) {
        console.error('Error downloading CV:', err);
        res.status(404).json({ message: 'CV not found' });
      }
    });
  });

  // Contact form endpoint (for future EmailJS integration)
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Here you would typically integrate with an email service
    // For now, we'll just return success
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.json({ message: 'Message sent successfully' });
  });

  const httpServer = createServer(app);
  return httpServer;
}

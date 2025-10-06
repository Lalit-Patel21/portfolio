# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with React, Vite, Bootstrap, and Node.js. Features smooth animations, professional design, and a fully functional contact form.

## ✨ Features

### Frontend
- **Modern React 18** with Vite for fast development
- **Responsive Design** using Bootstrap 5
- **Smooth Animations** with Framer Motion
- **Professional UI/UX** with modern design principles
- **Mobile-First** approach for all devices
- **SEO Optimized** with proper meta tags

### Sections
- 🏠 **Home** - Hero section with animated text and statistics
- 👤 **About** - Personal information, education, and interests
- 🛠️ **Skills** - Interactive skill categories with progress bars
- 📁 **Projects** - Portfolio showcase with filtering and modals
- 💼 **Experience** - Work history with timeline layout
- 📧 **Contact** - Functional contact form with backend integration

### Backend
- **Node.js** with Express server
- **Contact Form** handling with email notifications
- **Newsletter Subscription** endpoint
- **RESTful API** design
- **CORS enabled** for cross-origin requests

## 🛠️ Technologies Used

### Frontend
- React 18
- Vite
- Bootstrap 5 (CDN)
- Framer Motion
- React Router DOM
- React Type Animation

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

### 4. Environment Setup
Create a `.env` file in the server directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

**Note:** For Gmail, you'll need to use an App Password. Enable 2-factor authentication and generate an app password.

### 5. Build the Frontend
```bash
npm run build
```

### 6. Start the Backend Server
```bash
cd server
npm start
```

### 7. Access the Website
Open your browser and navigate to `http://localhost:5000`

## 🚀 Development

### Frontend Development
```bash
npm run dev
```
This will start the Vite development server on `http://localhost:5173`

### Backend Development
```bash
cd server
npm run dev
```
This will start the backend with nodemon for auto-restart on changes.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── server/
│   ├── server.js
│   └── package.json
├── public/
├── index.html
├── package.json
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Home.jsx` - Hero section content
- `src/components/About.jsx` - Personal details and education
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer links and social media

### Styling
- Modify `src/App.css` for custom styles
- Update CSS variables in `:root` for color schemes
- Customize Bootstrap classes for layout changes

### Projects
Edit the projects array in `src/components/Projects.jsx` to showcase your work.

### Skills
Update the skills data in `src/components/Skills.jsx` to reflect your expertise.

## 📧 Contact Form Setup

The contact form is fully functional and will send emails to your specified email address. Make sure to:

1. Set up your email credentials in the `.env` file
2. Configure your email service (Gmail, Outlook, etc.)
3. Test the form submission

## 🌐 Deployment

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service (Netlify, Vercel, etc.)

### Backend Deployment
1. Deploy the `server` folder to your hosting service (Heroku, DigitalOcean, etc.)
2. Set environment variables on your hosting platform
3. Update the frontend API endpoints to point to your deployed backend

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎭 Animations

- **Framer Motion** for smooth page transitions
- **Scroll-triggered animations** for better user engagement
- **Hover effects** for interactive elements
- **Loading animations** for better UX

## 🔒 Security Features

- **Input validation** on both frontend and backend
- **CORS protection** for API endpoints
- **Environment variables** for sensitive data
- **Rate limiting** (can be added for production)

## 📈 Performance Optimization

- **Lazy loading** for components
- **Optimized images** and assets
- **Minified CSS and JavaScript** in production
- **CDN usage** for Bootstrap and fonts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Framer Motion for animations
- React team for the amazing framework
- Vite for the fast build tool

---

**Made with ❤️ by [Your Name]**

Happy coding! 🚀

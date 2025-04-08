# 🧠 BrainlyShare – Share Your Brain, Simply!

Welcome to **BrainlyShare**, a modern and minimal app that allows users to create, organize, and securely **share their personal brain content** (like links, notes, etc.) with a simple, elegant UI.

This is the **frontend** repository built using React + TypeScript, powered by a clean and responsive UI. Whether you’re a student, researcher, or curious mind — BrainlyShare lets you share what’s in your brain, one link at a time.

---

## 🌟 Features

✅ **Authentication-based access** to create and manage content  
🔗 **Generate public shareable links** for selected content  
🧾 **Beautiful card UI** to display titles, descriptions, and links  
📤 **Copy-to-clipboard button** for easy sharing  
🧩 Seamless integration with backend APIs  
📱 **Responsive design** across all devices  
🎨 Built with **Tailwind CSS** for speed and flexibility

---

## 🔧 Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Frontend   | React + TypeScript            |
| Styling    | Tailwind CSS                  |
| State      | React Hooks                   |
| Routing    | React Router DOM              |
| API Calls  | Axios                         |
| Auth       | JWT (token-based, via backend) |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/brainly-frontend.git
cd brainly-frontend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Environment
Create a config.ts file or update the existing one with your backend API:

ts
Copy
Edit
export const BACKEND_URL = "http://localhost:3000"; // or your deployed backend
4. Start the App
bash
Copy
Edit
npm run dev
The app will run on http://localhost:5173

📁 Project Structure
bash
Copy
Edit
src/
├── components/
│   ├── ui/                # Reusable UI components like Card, Button
├── pages/
│   ├── Home.tsx           # Main dashboard for user content
│   ├── SharePage.tsx      # Public page for shared content
├── hooks/
├── utils/
└── config.ts              # Backend URL config
✨ UI Preview
Here’s what your shared page might look like:

vbnet
Copy
Edit
👤 Username’s Shared Brain
📄 Card 1 | 🔗 link1.com
📄 Card 2 | 🔗 link2.com
📄 ...
Visitors will see only shared content. Personal dashboard is protected via auth.

🔗 Live Demo
🌐 Check the live site here (if deployed)

🤝 Contributing
Want to contribute or suggest features? Awesome!

Fork the repo

Create a new branch

Submit a PR with proper description

🛡️ License
This project is licensed under the MIT License.

📬 Contact
Built with ❤️ by Raman Kurai

📧 Email: ramankurai27@gmail.com

🐙 GitHub: github.com/RamanKurai

🐦 Twitter: https://x.com/RamanKurai



---

# 🎬 Movie Review App  

🚀 **A simple yet powerful Express.js application** that allows users to log in, view their movie reviews, and upload images. This project demonstrates authentication, file uploads with **Multer**, and dynamic rendering using **EJS**.  

---

## 📌 Features  

✅ **User Authentication** – Secure login with predefined passwords.  
✅ **Movie Reviews** – Displays a personalized list of movie reviews for each user.  
✅ **Image Upload** – Users can upload images related to their reviews.  
✅ **Dynamic Routing** – Each user has a unique profile page.  
✅ **Templating Engine** – Uses **EJS** to render dynamic content.  
✅ **File Storage** – Uploaded images are stored in a dedicated folder.  

---

## 🚀 Tech Stack  

🔹 **Backend** – [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)  
🔹 **Templating Engine** – [EJS](https://ejs.co/)  
🔹 **File Uploads** – [Multer](https://www.npmjs.com/package/multer)  
🔹 **Middleware** – Method-Override (for handling forms)  
🔹 **CSS Framework (Optional)** – You can style the app using CSS frameworks like Bootstrap or Tailwind CSS.  

---

## 📂 Project Structure  

```
📂 movie-review-app
 ┣ 📂 public
 ┃ ┣ 📂 images
 ┃ ┃ ┗ 📂 uploads  # Stores uploaded images
 ┃ ┣ 📂 css        # Add your custom CSS styles here
 ┣ 📂 views        # EJS templates for dynamic rendering
 ┃ ┣ 📜 allPosts.ejs      # Displays all reviews
 ┃ ┣ 📜 users.ejs         # Shows list of users
 ┃ ┣ 📜 enterPass.ejs     # Password input page
 ┃ ┣ 📜 userProfile.ejs   # User profile with reviews
 ┣ 📜 index.js      # Main server file
 ┣ 📜 package.json  # Project metadata and dependencies
 ┣ 📜 README.md     # Documentation (this file)
```

---

## 🔧 Installation & Setup  

### **1️⃣ Prerequisites**  
Ensure you have the following installed:  
🔹 **Node.js** (Download from [here](https://nodejs.org/))  

### **2️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/movie-review-app.git
cd movie-review-app
```

### **3️⃣ Install Dependencies**  
```sh
npm install
```

### **4️⃣ Start the Server**  
```sh
node index.js
```
Or, if you have **nodemon** installed for automatic restarts:  
```sh
nodemon index.js
```

The app will now be running at:  
🌐 `http://localhost:3000/`

---

## 🔗 API Endpoints  

| Method | Endpoint                  | Description |
|--------|---------------------------|-------------|
| **GET**  | `/`                        | Displays all movie reviews. |
| **GET**  | `/users`                    | Lists all registered users. |
| **GET**  | `/users/:username`          | Requests password to access a user's profile. |
| **GET**  | `/users/:username/profile`  | Displays the user's movie reviews (after password verification). |
| **POST** | `/users/:username/upload`   | Allows users to upload an image (handled by Multer). |

---

## 🔑 User Authentication  

This app has predefined **users and passwords** for authentication:  

| Username            | Password |
|---------------------|---------|
| **Vikas Tiwari**   | `11111` |
| **Satyam Raj**     | `22222` |
| **Satyam Sharma**  | `33333` |
| **Shailendra Singh** | `44444` |
| **Ujjawal Jaiswal** | `55555` |
| **Dheeraj Singh**  | `66666` |

Each user can log in using their respective username and password.

---

## 📸 Image Upload  

✅ Users can **upload images** related to their movie reviews.  
✅ Uploaded files are **stored** in `public/images/uploads/`.  
✅ Image upload is handled using the **Multer** middleware.  

---

## 🎨 Frontend (EJS Views)  

- The app dynamically renders content using **EJS templates**.  
- You can customize the views inside the `views/` folder.  

---

## 🛠️ Future Enhancements  

🚀 Add a **Database** to store user accounts and reviews.  
🚀 Improve **UI/UX** with a frontend framework like **Bootstrap**.  
🚀 Implement a **JWT-based authentication system** for security.  
🚀 Enable **editing and deleting reviews**.  

---

## 👨‍💻 Author  

**Ujjawal Kumar Jaiswal**  

📬 For any questions, feel free to contact me at: **[ujjawaljaiswal618@gmail.com](mailto:ujjawaljaiswal618@gmail.com)**  

⭐ If you found this project useful, please **star** the repository!  

---

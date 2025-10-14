Full Stack E-Commerce App
# 🛒 TechToy – Modern eCommerce Website

**TechToy** là nền tảng thương mại điện tử (eCommerce) hiện đại, giúp người dùng **mua sắm các sản phẩm công nghệ** như laptop, tai nghe, phụ kiện... với giao diện tinh gọn, tốc độ nhanh và thân thiện với người dùng.  

Dự án được xây dựng bằng **React + TailwindCSS**, với backend **Node.js + Express** và cơ sở dữ liệu **MongoDB**.  
Thanh toán tích hợp **Stripe** và xác thực người dùng qua **Clerk**.

Front-end: Html, Css, NexJS, Tailwind, Javascript

Back-end: NodeJS, Express.js, MonggoDB,

Orther:
    Authentication: Cleck
    Backend workplow : Inngest
    
API: REST:ful, Axios

Admin account: admin2002@gmail.com
Pass: admin20022002

User account : user2002@gmail.com
Pass: user123459876

Deploy:
https://ecommerceapp-ashen.vercel.app/

![Image](https://github.com/user-attachments/assets/caa818ba-c8a7-4f95-b97a-5852a1c39594)


---

## 🚀 Tính năng nổi bật

- 🛍️ **Trang chủ giới thiệu sản phẩm nổi bật** và các ưu đãi đặc biệt.  
- 🔎 **Tìm kiếm & lọc sản phẩm** theo tên, danh mục, hoặc giá.  
- 🧾 **Chi tiết sản phẩm**: hiển thị hình ảnh, mô tả, giá, đánh giá.  
- 🛒 **Giỏ hàng & thanh toán Stripe Checkout.**  
- 👤 **Xác thực người dùng (Clerk)** — đăng ký, đăng nhập, quản lý tài khoản.  
- 📦 **Trang quản lý đơn hàng (Admin Dashboard)** cho người bán.  
- 📱 **Responsive Design** — hiển thị đẹp trên mọi thiết bị.  

---

## 🧩 Kiến trúc & Công nghệ

| Thành phần | Công nghệ | Mô tả |
|-------------|------------|--------|
| **Frontend** | React + TailwindCSS | Giao diện hiện đại, tối giản |
| **State Management** | Redux Toolkit / Zustand | Quản lý trạng thái giỏ hàng & người dùng |
| **Backend API** | Node.js + Express | RESTful API cho sản phẩm, giỏ hàng, thanh toán |
| **Database** | MongoDB + Mongoose | Lưu trữ sản phẩm, người dùng, đơn hàng |
| **Authentication** | Clerk | Xác thực người dùng & bảo vệ route |
| **Payment** | Stripe | Thanh toán trực tuyến, tự động xử lý webhook |
| **Deployment** | Vercel (Frontend) + Render / Railway (Backend) | CI/CD tự động |
| **Version Control** | GitLab / GitHub | Quản lý mã nguồn & pipeline |

---

## 🗂️ Cấu trúc thư mục

techtoy/
┣━ frontend/ # React + Tailwind + Clerk + Stripe
┃ ┣━ src/
┃ ┣━ components/
┃ ┣━ pages/
┃ ┣━ hooks/
┃ ┗━ package.json
┣━ backend/ # Node.js + Express + MongoDB + Stripe
┃ ┣━ src/
┃ ┣━ controllers/
┃ ┣━ routes/
┃ ┣━ models/
┃ ┣━ middlewares/
┃ ┣━ server.js
┃ ┗━ package.json
┣━ .gitignore
┣━ .gitlab-ci.yml
┗━ README.md

yaml
Sao chép mã

---

## ⚙️ Cài đặt & Chạy dự án

### 1️⃣ Clone repository
```bash
git clone https://gitlab.com/yourusername/techtoy.git
cd techtoy
2️⃣ Cài đặt dependencies
bash
Sao chép mã
cd backend && npm install
cd ../frontend && npm install
3️⃣ Cấu hình biến môi trường
📁 backend/.env
bash
Sao chép mã
PORT=5000
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLERK_SECRET_KEY=your_clerk_secret_key
📁 frontend/.env.local
bash
Sao chép mã
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
💳 Thanh toán Stripe
Quy trình:
Người dùng nhấn "Order Now" → frontend gọi API /api/checkout.

Backend tạo Stripe Checkout Session → trả về URL thanh toán.

Stripe xử lý thanh toán và gửi webhook về server.

Server cập nhật trạng thái đơn hàng trong MongoDB.

👤 Xác thực Clerk
Quy trình:
Người dùng đăng nhập qua Clerk UI Component (Google, email, OTP).

Clerk cung cấp JWT token cho frontend.

Backend xác thực request qua middleware verifyClerkToken().

Bảo vệ route /orders, /checkout, /profile, v.v.

🧠 Hướng phát triển
🌟 Wishlist – thêm sản phẩm yêu thích.

🧾 Review & Rating System.

📈 Dashboard doanh thu và phân tích bán hàng.

📦 Theo dõi đơn hàng và thông báo trạng thái (Email/SMS).

🤖 Gợi ý sản phẩm bằng AI (Recommendation System).

🧪 CI/CD (GitLab → Vercel)
yaml
Sao chép mã
stages:
  - install
  - build
  - deploy

install_dependencies:
  stage: install
  script:
    - npm install --prefix backend
    - npm install --prefix frontend

build_frontend:
  stage: build
  script:
    - npm run build --prefix frontend

deploy_frontend:
  stage: deploy
  script:
    - echo "🚀 Deploying TechToy to Vercel..."
👨‍💻 Tác giả
Nguyễn Thăng Long
Full Stack Developer



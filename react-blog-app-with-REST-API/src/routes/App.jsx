import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

import PostListProvider from "../store/post-list-store";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar />
        <div className="container">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

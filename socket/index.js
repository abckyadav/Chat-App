import { Server } from "socket.io";

let io = new Server(9000, {
  cors: {
    origin: "https://chat-app-xi-brown.vercel.app", //http://localhost:3000" 
  },
});
let activeUsers = [];

const removeUser = (socketId) => {
  activeUsers = activeUsers.filter((user) => user.socketId !== socketId);
};

const addUsers = (userData, socketId) => {
  try {
    if (!activeUsers.some((user) => user?.sub == userData?.sub)) {
      activeUsers.push({ ...userData, socketId });
    }
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

const getUser = (userId) => {
  try {
    return activeUsers?.find((user) => user.sub === userId);
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
};

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
    removeUser(socket.id);
    io.emit("getUsers", activeUsers);
  });

  socket.on("addUsers", (userData) => {
    console.log("User added:", userData);
    addUsers(userData, socket?.id);
    io.emit("getUsers", activeUsers);
  });

  socket.on("sendMessage", (data) => {
    console.log("Message sent:", data);
    const user = getUser(data?.receiverId);
    console.log("activeUsers:", activeUsers);
    if (user) {
      io.to(user.socketId).emit("getMessage", data);
    } else {
      console.log("User not found:", data.receiverId);
    }
  });
});

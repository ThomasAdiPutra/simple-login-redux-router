export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "") {
        reject("Email is required");
      }
      if (password === "") {
        reject("Password is required");
      }

      if (email === "admin@login.com" && password === "admin") {
        resolve({
          user: {
            name: "Thomas Adi Putra",
            email,
          },
          token: "123456",
        });
      }

      reject("Invalid email or password");
    }, 1000);
  });
};

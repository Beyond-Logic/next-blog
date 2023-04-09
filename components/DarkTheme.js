import React from "react";

const DarkTheme = () => {
  return (
    <style jsx global>{`
      /* Dark Theme */
      :root {
        --background-color: rgb(14, 13, 13);
        --link-color: rgb(36, 163, 157);
        --text-color: white;
      }
    `}</style>
  );
};

export default DarkTheme;

// app/login/layout.jsx

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-480 w-[800] overflow-hidden">
        <div className="">{children}</div>
      </body>
    </html>
  );
}

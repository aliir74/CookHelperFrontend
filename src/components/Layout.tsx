import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed relative inset-0 mx-auto flex min-h-screen min-w-full flex-col">
      <div className="absolute inset-0 z-0 bg-[url('./assets/images/image3.png')] bg-cover bg-center bg-no-repeat opacity-100" />
      {/* <header className="sticky top-0 z-10 bg-gray-600 p-4 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center">چی بپزم؟</h1>
        </div>
      </header> */}
      <main className="z-10 flex-grow overflow-auto p-4">
        <div className="mx-auto max-w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

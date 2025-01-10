export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ifeoluwa Agbogun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

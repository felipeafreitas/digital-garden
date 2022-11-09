import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { globalStyles } from "./styles/global";
import { ThemeProvider, useTheme } from "./utils/contexts/theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Felipe Freitas Portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOriginIsolated: true
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
    },
  ];
}

function App() {
  const [theme] = useTheme()

  return (
    <html lang="en" className={theme as string}>
      <head>
        <Meta />
        <Links />
      </head>
      {globalStyles()}
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
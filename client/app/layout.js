import './globals.css';
import LeftNavbar from '@/components/LeftNavbar'
import ReduxProvider from '@/redux-store/provider';


export const metadata = {
  title: "U_Me",
  description: "Social media application"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
        <div className="row">
          <div className="column1">
            <LeftNavbar />
          </div>
          <div className="column">
            {children}
          </div>
        </div>
        </ReduxProvider>
      </body>
    </html>
  )
}

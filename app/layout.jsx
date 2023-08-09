import './globals.css'
import Nav from './auth/Nav'
import QueryWrapper from './auth/QueryWrapper'



export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className= {"mx-4 md:mx-48 xl:mx-96 ${roboto.variable} bg-blue-300"}>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
        </body>
    </html>
  )
}

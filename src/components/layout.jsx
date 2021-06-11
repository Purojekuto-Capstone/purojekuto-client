

export default function Layout({children}) {
    return (
      <>     
          <header>
              <h3>Header</h3>
          </header>
          <main>{children}</main>
          <footer>
          <h3>footer</h3>
          </footer>
      </>
    )
  }
  
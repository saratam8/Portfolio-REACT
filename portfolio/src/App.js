import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const styles = {
    page: {
        backgroundColor: '#fffdf7',
        width: '100rem',
        height: '100rem',
        margin: '0 auto',
    },
}

function App() {
    return(
        <div style={styles.page}>
            <PortfolioContainer/>
        </div>
    )
}

// const App = () => <PortfolioContainer/>;

export default App;

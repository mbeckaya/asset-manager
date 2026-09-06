import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Navbar from "./components/Navbar"
import AssetListPage from "./pages/AssetListPage"

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={<AssetListPage />} />
                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </Provider>
    )
}
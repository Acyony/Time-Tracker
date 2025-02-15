import 'bootstrap/dist/css/bootstrap.min.css';

import AddProject from "@/shared/components/Home/AddProject";
import FooterComponent from "@/shared/components/Footer/Footer";
import SearchProject from "@/shared/components/Home/SearchProject";
import NavbarComponent from "@/shared/components/Navbar/Navbar";

export default async function Page() {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <NavbarComponent/>
            {/*main*/}
            <main className="container my-5 flex-grow-1 ">
                <h1 className="mb-4 text-center">Time Tracker</h1>
                <div className="mt-3">

                    <AddProject/>
                </div>
                <div className="mt-3">
                    <SearchProject/>
                </div>
            </main>
            {/* Footer */}
            <FooterComponent/>
        </div>
    )
}

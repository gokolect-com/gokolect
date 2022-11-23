import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.components";
import Navigations from "../../components/navigations/navigations.component";
 
const HomePage = () => (
    <div className="homepage">
        <Directory />
        <Navigations />
    </div>
);

export default HomePage;
import dva from "dva";
import "./index.css";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/adminStore").default);
app.model(require("./models/buyerStore").default);
app.model(require("./models/navigator").default);
app.model(require("./models/sellerStore").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
